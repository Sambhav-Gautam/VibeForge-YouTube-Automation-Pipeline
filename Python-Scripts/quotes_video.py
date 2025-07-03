import os
import random
import traceback
import cv2
import numpy as np
from moviepy.editor import ImageClip, vfx
import moviepy
from datetime import datetime

# === CONFIG ===
img_folder = r"C:\Users\sambh\Downloads\AI_Girls_Database\gemini-downloader\downloads"
music_folder = r"C:\Users\sambh\Downloads\AI_Girls_Database\youtube_music"
output_folder = img_folder
target_width, target_height = 608, 1080
duration = 2  # 2-second video

# === LOGGING ===
def log(msg):
    print(msg)
    try:
        with open(os.path.join(output_folder, "log.txt"), "a", encoding="utf-8") as f:
            f.write(msg + "\n")
    except Exception:
        pass

# === MAIN ===
try:
    log(f"[0/4] Using moviepy version {moviepy.__version__} at {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    log("[1/4] Scanning image and music folders...")
    all_images = [f for f in os.listdir(img_folder) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]
    music_files = [f for f in os.listdir(music_folder) if f.lower().endswith('.mp3')]

    if not all_images:
        raise Exception("❌ No images found.")
    if not music_files:
        raise Exception("❌ No music files found.")

    selected_image = random.choice(all_images)
    selected_music = random.choice(music_files)
    image_path = os.path.join(img_folder, selected_image)
    music_path = os.path.join(music_folder, selected_music)
    log(f"🖼️ Image: {selected_image}")
    log(f"🎵 Music: {selected_music}")

    # === Load and resize the image to fill the frame
    log("[2/4] Preprocessing image...")
    img = cv2.imread(image_path, cv2.IMREAD_COLOR)
    if img is None:
        raise Exception(f"Failed to read image: {image_path}")

    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    # Resize to exactly match target dimensions, ignoring aspect ratio
    resized = cv2.resize(img, (target_width, target_height), interpolation=cv2.INTER_AREA)

    temp_image = os.path.join(output_folder, "temp_frame.png")
    cv2.imwrite(temp_image, cv2.cvtColor(resized, cv2.COLOR_RGB2BGR))

    if np.mean(resized) < 10:
        raise Exception("🛑 Generated image is too dark or blank.")

    # === Create the silent video with fade-in transition
    log("[3/4] Creating silent video with fade-in transition...")
    img_clip = (ImageClip(temp_image)
                .set_duration(duration)
                .fx(vfx.fadein, 0.5))  # 0.5-second fade-in
    output_silent = os.path.join(output_folder, "temp_silent_video.mp4")
    img_clip.write_videofile(output_silent, fps=24, codec="libx264", preset="ultrafast", threads=4)

    if not os.path.exists(output_silent) or os.path.getsize(output_silent) == 0:
        raise Exception("❌ Silent video was not created or is empty.")

    # === Merge music with ffmpeg
    log("[4/4] Adding background music...")
    output_video = os.path.join(output_folder, f"short_{random.randint(1000, 9999)}.mp4")
    ffmpeg_cmd = (
        f'ffmpeg -y -i "{output_silent}" -i "{music_path}" -c:v copy -c:a aac -shortest '
        f'-map 0:v:0 -map 1:a:0 -movflags +faststart "{output_video}"'
    )
    result = os.system(ffmpeg_cmd)

    if result != 0:
        raise Exception("❌ FFmpeg failed to merge audio and video.")

    if not os.path.exists(output_video) or os.path.getsize(output_video) == 0:
        raise Exception("❌ Final video was not created or is empty.")

    log(f"✅ Done! 2-second video with music and fade-in transition saved as: {output_video}")

except Exception as e:
    log(f"\n❌ ERROR: {str(e)}\n{traceback.format_exc()}")

finally:
    for temp_file in ["temp_frame.png", "temp_silent_video.mp4"]:
        temp_path = os.path.join(output_folder, temp_file)
        if os.path.exists(temp_path):
            os.remove(temp_path)
    log("🧹 Cleaned up temporary files.")
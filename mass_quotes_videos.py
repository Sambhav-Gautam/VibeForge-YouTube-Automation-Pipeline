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
output_folder = r"C:\Users\sambh\Downloads\AI_Girls_Database\youtube_quotes"
target_width, target_height = 608, 1080
duration = 4  # 4-second video

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
    # Create output directory if it doesn't exist
    os.makedirs(output_folder, exist_ok=True)

    log(f"[0/3] Using moviepy version {moviepy.__version__} at {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    log("[1/3] Scanning image and music folders...")
    all_images = sorted([f for f in os.listdir(img_folder) if f.lower().endswith(('.png', '.jpg', '.jpeg'))])
    music_files = [f for f in os.listdir(music_folder) if f.lower().endswith('.mp3')]

    if not all_images:
        raise Exception("❌ No images found.")
    if not music_files:
        raise Exception("❌ No music files found.")

    log(f"Found {len(all_images)} images to process.")
    log(f"Found {len(music_files)} music files.")

    # Process each image
    for idx, selected_image in enumerate(all_images, 1):
        log(f"\n[2/3] Processing image {idx}/{len(all_images)}: {selected_image}")
        selected_music = random.choice(music_files)
        image_path = os.path.join(img_folder, selected_image)
        music_path = os.path.join(music_folder, selected_music)
        log(f"🖼️ Image: {selected_image}")
        log(f"🎵 Music: {selected_music}")

        # === Load and resize the image to fill the frame
        log("Preprocessing image...")
        img = cv2.imread(image_path, cv2.IMREAD_COLOR)
        if img is None:
            log(f"❌ Failed to read image: {image_path}")
            continue

        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        # Resize to exactly match target dimensions, ignoring aspect ratio
        resized = cv2.resize(img, (target_width, target_height), interpolation=cv2.INTER_AREA)

        temp_image = os.path.join(output_folder, f"temp_frame_{idx}.png")
        cv2.imwrite(temp_image, cv2.cvtColor(resized, cv2.COLOR_RGB2BGR))

        if np.mean(resized) < 10:
            log(f"❌ Generated image is too dark or blank: {selected_image}")
            if os.path.exists(temp_image):
                os.remove(temp_image)
            continue

        # === Create the silent video with fade-in transition
        log("Creating silent video with fade-in transition...")
        img_clip = (ImageClip(temp_image)
                    .set_duration(duration)
                    .fx(vfx.fadein, 0.5))  # 0.5-second fade-in
        output_silent = os.path.join(output_folder, f"temp_silent_video_{idx}.mp4")
        img_clip.write_videofile(output_silent, fps=24, codec="libx264", preset="ultrafast", threads=4)

        if not os.path.exists(output_silent) or os.path.getsize(output_silent) == 0:
            log(f"❌ Silent video was not created or is empty: {selected_image}")
            if os.path.exists(temp_image):
                os.remove(temp_image)
            continue

        # === Merge music with ffmpeg
        log("Adding background music...")
        output_video = os.path.join(output_folder, f"short_{idx:03d}.mp4")
        ffmpeg_cmd = (
            f'ffmpeg -y -i "{output_silent}" -i "{music_path}" -c:v copy -c:a aac -shortest '
            f'-map 0:v:0 -map 1:a:0 -movflags +faststart "{output_video}"'
        )
        result = os.system(ffmpeg_cmd)

        if result != 0:
            log(f"❌ FFmpeg failed to merge audio and video for: {selected_image}")
            if os.path.exists(temp_image):
                os.remove(temp_image)
            if os.path.exists(output_silent):
                os.remove(output_silent)
            continue

        if not os.path.exists(output_video) or os.path.getsize(output_video) == 0:
            log(f"❌ Final video was not created or is empty: {selected_image}")
            if os.path.exists(temp_image):
                os.remove(temp_image)
            if os.path.exists(output_silent):
                os.remove(output_silent)
            continue

        log(f"✅ Video {idx}/{len(all_images)} saved as: {output_video}")

        # Clean up temporary files for this iteration
        for temp_file in [temp_image, output_silent]:
            if os.path.exists(temp_file):
                os.remove(temp_file)

    log(f"\n✅ Completed! Processed {len(all_images)} images.")

except Exception as e:
    log(f"\n❌ ERROR: {str(e)}\n{traceback.format_exc()}")

finally:
    # Clean up any remaining temporary files
    for temp_file in os.listdir(output_folder):
        if temp_file.startswith("temp_frame_") or temp_file.startswith("temp_silent_video_"):
            temp_path = os.path.join(output_folder, temp_file)
            if os.path.exists(temp_path):
                os.remove(temp_path)
    log("🧹 Cleaned up all temporary files.")
import os
import random
import traceback
from datetime import datetime, timedelta
from moviepy.editor import ImageClip, CompositeVideoClip, concatenate_videoclips, vfx
import cv2
import numpy as np

# === CONFIG ===
input_dir = r"C:\Users\sambh\Downloads\AI_Girls_Database"
save_dir = os.path.join(input_dir, "frames")
music_files = [f for f in os.listdir(input_dir) if f.endswith(".mp3")]
target_width, target_height = 608, 1080

# === Text Prompt Variations ===
text_prompts = [
    ["Comment Your Favourite", "Girl!"],
    ["Which look", "won your heart?"],
    ["Vote for your", "style icon!"],
    ["Pick your", "aesthetic queen!"],
    ["Your favourite", "vibe today?"],
    ["Who slayed", "the best?"]
]

# === Random Girl Names Pool ===
girl_names = [
    "Ava", "Mia", "Luna", "Zara", "Layla", "Saanvi", "Emily", "Nora", "Chloe", "Tara",
    "Amara", "Kiara", "Mei", "Aria", "Sofia", "Anaya", "Leah", "Freya", "Isla", "Rhea",
    "Nina", "Yuki", "Lara", "Aisha", "Priya", "Elsa", "Inaya", "Mira", "Zoya", "Noor",
    "Daisy", "Myra", "Hana", "Nyla", "Aanya", "Rina", "Akira", "Eva", "Tiana", "Lina",
    "Aya", "Jia", "Sakura", "Liya", "Adele", "Esha", "Reina", "Neha", "Ayla", "Kira"
]

# === LOGGING ===
def log(msg):
    print(msg)
    try:
        with open("log.txt", "a", encoding="utf-8") as f:
            f.write(msg + "\n")
    except Exception:
        pass

# === TRANSITIONS POOL ===
transition_effects = [
    lambda c1, c2: CompositeVideoClip([
        c1.set_end(2).fx(vfx.fadeout, 0.5),
        c2.set_start(-0.5).fx(vfx.fadein, 0.5)
    ]).set_duration(0.5),

    lambda c1, c2: CompositeVideoClip([
        c1.set_end(2).fx(vfx.resize, lambda t: 1 - 0.05 * t),
        c2.set_start(0).fx(vfx.resize, lambda t: 0.95 + 0.05 * t)
    ]).set_duration(0.5),

    lambda c1, c2: CompositeVideoClip([
        c1.set_end(2).fx(vfx.colorx, 0.5),
        c2.set_start(0).fx(vfx.colorx, 1.5)
    ]).set_duration(0.5)
]

# === MAIN ===
try:
    os.makedirs(save_dir, exist_ok=True)
    log("[1/5] Scanning PNG images...")
    all_images = [f for f in os.listdir(input_dir) if f.lower().endswith(".png")]
    if len(all_images) < 6:
        raise Exception("❌ Need at least 6 PNG images in the input folder.")

    selected = random.sample(all_images, 6)
    selected_paths = [os.path.join(input_dir, f) for f in selected]

    log("[2/5] Preparing clips...")
    clips = []
    used_names = random.sample(girl_names, 5)
    prompt_lines = random.choice(text_prompts)

    for i, path in enumerate(selected_paths):
        img_cv = cv2.imread(path)
        img_cv = cv2.resize(img_cv, (target_width, target_height))

        if i == 0:
            lines = prompt_lines
            font_scale = 1.4
            spacing = 15
        else:
            lines = [f"{i}. {used_names[i - 1]}"]
            font_scale = random.choice([1.8, 2.0, 2.2])
            spacing = 20

        font = cv2.FONT_HERSHEY_SIMPLEX
        thickness = 4
        shadow_color = (0, 0, 0)
        font_color = (255, 255, 255)
        bar_height = 180 if len(lines) > 1 else 120

        total_height = 0
        sizes = []
        for line in lines:
            (w, h), _ = cv2.getTextSize(line, font, font_scale, thickness)
            sizes.append((w, h))
            total_height += h + spacing
        total_height -= spacing
        y0 = (target_height - bar_height) // 2 + (bar_height - total_height) // 2

        overlay = img_cv.copy()
        cv2.rectangle(overlay, (0, (target_height - bar_height) // 2),
                      (target_width, (target_height + bar_height) // 2), (0, 0, 0), -1)
        alpha = 0.4
        img_cv = cv2.addWeighted(overlay, alpha, img_cv, 1 - alpha, 0)

        for idx, (line, (w, h)) in enumerate(zip(lines, sizes)):
            x = (target_width - w) // 2
            y = y0 + sum(s[1] + spacing for s in sizes[:idx])
            cv2.putText(img_cv, line, (x, y), font, font_scale, shadow_color, thickness + 2, cv2.LINE_AA)
            cv2.putText(img_cv, line, (x, y), font, font_scale, font_color, thickness, cv2.LINE_AA)

        frame_path = os.path.join(save_dir, f"frame_{i+1}.png")
        cv2.imwrite(frame_path, img_cv)

        try:
            img_clip = ImageClip(frame_path).set_duration(2).fx(vfx.resize, lambda t: 1 + 0.1 * t / 2)
            clips.append(img_clip)
        except Exception as e:
            raise RuntimeError(f"Failed to create video clip from {frame_path}") from e

    log("[3/5] Adding transitions...")
    final_clips = [clips[0]]
    for i in range(1, len(clips)):
        transition_fn = random.choice(transition_effects)
        trans = transition_fn(clips[i - 1], clips[i])
        final_clips.append(trans)
        final_clips.append(clips[i])

    log("[4/5] Rendering silent video...")
    final_video = concatenate_videoclips(final_clips, method="compose")
    output_silent = os.path.join(input_dir, "temp_silent_video.mp4")
    final_video.write_videofile(output_silent, fps=24, audio=False, codec="libx264", threads=4)

    log("[5/5] Adding music (if available)...")
    selected_music = os.path.join(input_dir, random.choice(music_files))
    today = datetime.now().date()
    future_date = today + timedelta(days=1)
    output_final = os.path.join(input_dir, f"short_{future_date.strftime('%Y%m%d')}.mp4")

    if os.path.exists(selected_music):
        os.system(f'ffmpeg -y -i "{output_silent}" -i "{selected_music}" -c:v libx264 -c:a aac -shortest -movflags +faststart "{output_final}"')
    else:
        log("⚠️ Music file not found. Saving silent version.")
        os.system(f'ffmpeg -y -i "{output_silent}" -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -pix_fmt yuv420p -movflags +faststart "{output_final}"')

    log(f"✅ Final video saved: {output_final}")
    log("💬 Comment below: Which girl was your favourite? #Shorts")

except Exception as e:
    err = f"\n❌ ERROR: {str(e)}\n{traceback.format_exc()}"
    log(err)
    print(err)
finally:
    if 'output_silent' in locals() and os.path.exists(output_silent):
        os.remove(output_silent)
    log("🗑️ Cleaned up temporary silent file.")
import os
import random
from moviepy.editor import ImageClip, AudioFileClip, vfx

# Paths
root_dir = os.path.dirname(os.path.dirname(__file__))
downloads_dir = os.path.join(root_dir, "ChatBotAutomation", "gemini-downloader", "downloads_brainrot")
music_dir = os.path.join(root_dir, "youtube_music")
output_dir = os.path.join(root_dir, "brainRot_automation", "Content")
os.makedirs(output_dir, exist_ok=True)

# Collect and sort images
image_files = sorted([os.path.join(downloads_dir, f) for f in os.listdir(downloads_dir) if f.lower().endswith('.jpg')])
music_files = [os.path.join(music_dir, f) for f in os.listdir(music_dir) if f.lower().endswith(('.mp3', '.wav', '.m4a'))]

for idx, image_path in enumerate(image_files):
    try:
        clip = ImageClip(image_path, duration=5).resize(width=1080)

        # Force height to be even
        w, h = clip.size
        if h % 2 != 0:
            clip = clip.resize(height=h+1)

        clip = clip.fx(vfx.fadein, 0.5).fx(vfx.fadeout, 0.5)

        music_path = random.choice(music_files)
        audio_clip = AudioFileClip(music_path).subclip(0, 5).volumex(0.2)
        final_clip = clip.set_audio(audio_clip)

        output_path = os.path.join(output_dir, f"short_{idx+1}.mp4")
        final_clip.write_videofile(
            output_path,
            fps=30,
            codec="libx264",
            audio_codec="aac",
            preset="slow",
            ffmpeg_params=["-pix_fmt", "yuv420p"]
        )

        clip.close()
        audio_clip.close()
        final_clip.close()

        print(f"✅ Exported: {output_path}")

    except Exception as e:
        print(f"❌ Error processing {image_path}: {e}")

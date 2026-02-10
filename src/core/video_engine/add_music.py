import random
from moviepy.editor import VideoFileClip, AudioFileClip, vfx

from pathlib import Path

# Paths
root_dir = Path(__file__).resolve().parent.parent
videos_dir = root_dir / "AI_Models" / "Youtube"
music_dir = root_dir / "youtube_music"
output_dir = videos_dir / "Res"
output_dir.mkdir(parents=True, exist_ok=True)

# Collect files
video_files = [f for f in videos_dir.iterdir() if f.suffix.lower() in ['.mp4', '.mov', '.mkv', '.avi']]
music_files = [f for f in music_dir.iterdir() if f.suffix.lower() in ['.mp3', '.wav', '.m4a']]

for idx, video_path in enumerate(video_files, start=1):
    try:
        video = VideoFileClip(str(video_path))
        music_path = random.choice(music_files)
        audio = AudioFileClip(str(music_path))

        # Adjust audio length:
        if audio.duration < video.duration:
            # Loop audio if too short
            n_loops = int(video.duration // audio.duration) + 1
            audio = audio.fx(vfx.loop, n_loops=n_loops).subclip(0, video.duration)
        else:
            audio = audio.subclip(0, video.duration)

        final_video = video.set_audio(audio.volumex(0.3))

        output_path = output_dir / f"{video_path.stem}_with_music{video_path.suffix}"
        final_video.write_videofile(
            str(output_path),
            codec="libx264",
            audio_codec="aac",
            preset="medium",
            ffmpeg_params=["-pix_fmt", "yuv420p"]
        )

        video.close()
        audio.close()
        final_video.close()

        print(f"✅ Exported: {output_path}")

    except Exception as e:
        print(f"❌ Error processing {video_path}: {e}")

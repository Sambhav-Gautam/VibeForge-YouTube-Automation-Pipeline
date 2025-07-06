from moviepy.editor import VideoFileClip, ImageClip, CompositeVideoClip
from pathlib import Path

# Paths
root_dir = Path(__file__).resolve().parent.parent
videos_dir = root_dir / "AI_Models" / "Youtube" / "Res"
logo_path = root_dir / "AI_Models" / "logo.png"
output_dir = videos_dir / "with_logo"
output_dir.mkdir(parents=True, exist_ok=True)

# Collect video files
video_files = [f for f in videos_dir.iterdir() if f.suffix.lower() in ['.mp4', '.mov', '.mkv', '.avi']]

for idx, video_path in enumerate(video_files, start=1):
    try:
        video = VideoFileClip(str(video_path))

        # Create the logo clip with transparency
        logo = ImageClip(str(logo_path)).set_duration(video.duration)

        # Resize logo to appropriate size relative to video height
        logo_height = int(video.h * 0.10)  # 10% of video height
        logo = logo.resize(height=logo_height)

        # Position the logo at top-right with padding
        padding = int(video.h * 0.02)
        logo = logo.set_pos(("right", "top")).margin(right=padding, top=padding, opacity=0)
        logo = logo.set_opacity(0.2)  # Set logo opacity

        # Composite the video with logo
        final = CompositeVideoClip([video, logo])

        output_path = output_dir / f"{video_path.stem}_logo{video_path.suffix}"
        final.write_videofile(
            str(output_path),
            codec="libx264",
            audio_codec="aac",
            preset="medium",
            ffmpeg_params=["-pix_fmt", "yuv420p"],
            threads=4
        )

        video.close()
        logo.close()
        final.close()

        print(f"✅ Exported with logo: {output_path}")

    except Exception as e:
        print(f"❌ Error processing {video_path}: {e}")

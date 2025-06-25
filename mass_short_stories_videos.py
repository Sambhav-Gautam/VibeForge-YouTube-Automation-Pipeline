import os
import shutil
import subprocess
from gtts import gTTS
from moviepy.editor import ImageClip, AudioFileClip, concatenate_videoclips
from PIL import Image
from pydub import AudioSegment
from moviepy.video.fx.fadein import fadein
from moviepy.video.fx.fadeout import fadeout


# === CONFIG ===
folder_path = r"C:\Users\sambh\Downloads\AI_GIRLS_DATABASE\gemini-downloader\downloads_stories"
output_folder = "final_story_videos"
os.makedirs(output_folder, exist_ok=True)

# === All 10 stories ===
stories = [
    [
        "Mango tree ke neeche puppy ne apne doston ko bulaya...",
        "Sab rich kutte aaye, expensive collars mein...",
        "Puppy bola, ‘Yeh aam maine ugaye hain tumhare liye’",
        "Sabne aam khaye, mazaak udaya, kuch nahi chhoda",
        "Puppy chupchaap dekhta raha, kuch bola nahi",
        "Sab chale gaye, ped bhi toota, aam bhi gaye",
        "Us raat puppy ne sirf mitti kha kar sona pada"
    ],
    [
        "Jungle mein bhoot aaya, sab jaanwar bhag rahe the",
        "Rabbit aur kitten ek dusre ko pakad ke bhaage",
        "Pahaadon ka rastaa tha, slippery aur dangerous",
        "Kitten fisaal gayi, rabbit chillaya, 'NOOO'",
        "Uski aankhon ke saamne, kitten neeche gir gayi",
        "Rabbit chillaata raha, par kuch nahi kar paya",
        "Us din ke baad, usne kabhi khud pe trust nahi kiya"
    ],
    [
        "Zordaar baarish mein ek chhota sa squirrel bheeg raha tha",
        "Ek mouse ne apni chhoti si chhatri usko de di",
        "Frog ne apne leaves share kiye ek crow ke saath",
        "Cat ne injured pigeon ko apne ghar mein jagah di",
        "Tortoise ne ek bache hue fish ko lake mein chhoda",
        "Ek owl ne raat bhar ek chhoti puppy ki rakhwali ki",
        "Jab sab milkar karein help, jungle bhi safe lagta hai"
    ],
    [
        "Ek ladke ne road se ek injured puppy uthaya",
        "Har din usko doodh diya, zakhm saaf kiya",
        "Puppy bada hota gaya, par silent raha",
        "Ek din ladka gir gaya, aur puppy ne usko bacha liya",
        "Logo ne bola, ‘yeh to wild dog hai, kaat lega’",
        "Par usne sirf ladke ke pair choome",
        "Par agli subah, woh puppy wapas jungle chala gaya... forever"
    ],
    [
        "Chhota elephant jungle school mein first day gaya",
        "Sab uske size ka mazaak udaane lage",
        "Ek monkey bola ‘yeh to fat hai, swing bhi todega’",
        "Elephant chup raha, sir jhukakar classroom gaya",
        "Exam mein sab fail, sirf elephant ne top kiya",
        "Sabne claps diye, monkey bhi sharma gaya",
        "Us din sabne size nahi, dimaag dekha"
    ],
    [
        "Billi aur mor ki shaadi hui, sab khush the", 
        "Par billi har raat jungle mein chali jaati thi",
        "Ek din mor ne usko follow kiya...",
        "Billi kisi aur sher ke saath nach rahi thi",
        "Mor ki aankhon mein aansu the, usne kuch nahi bola",
        "Wapas aake billi se bola: ‘mujhe chhod de’",
        "Billi chali gayi, aur mor ne naachna band kar diya"
    ],
    [
        "Chhota mouse har din jungle ke school mein top karta",
        "Lekin usko hamesha bully kiya jaata: ‘nerd’",
        "Ek din uska homework chura diya gaya",
        "Teacher ne usko punish kiya, bina galti ke",
        "Mouse ka patience tut gaya, usne school chhod diya",
        "Teen mahine baad usne bank loot liya",
        "Jab pakda gaya, bola: ‘main sirf padhna chahta tha’"
    ],
    [
        "Ek ullu jungle ke sabse weak student tha",
        "Har exam mein fail, sab mazaak udaate the",
        "Raat bhar wo ro kar padhta tha, chupchaap",
        "Ek din woh jungle se chala gaya, sab bhool gaye",
        "10 saal baad, jungle mein ek conference hui",
        "IAS Owl ne speech di: ‘Kabhi kisi ko kamzor mat samjho’",
        "Sab jaanwar ne standing ovation diya"
    ],
    [
        "Ped ke upar ek baby bird girne waala tha",
        "Sab dekh rahe the, koi kuch nahi kar raha",
        "Ek slow sa koala neeche aaya...",
        "Aur last second mein usko pakad liya",
        "Bird ne kaha ‘thank you’, sab clap karne lage",
        "Koala bola ‘Har koi kuch kar sakta hai’",
        "Us din se jungle mein ek naya hero bana"
    ],
    [
        "Ek puppy ne kuch shining cheez khaa li gali mein",
        "Uska pet dard karne laga, par wo kuch bol nahi paaya",
        "Kids usko dekh kar hans rahe the",
        "Ek old man ne usko uthaya aur vet ke paas le gaya",
        "Puppy ka operation hua, wo bach gaya",
        "Next week, puppy us old man ke ghar ke bahar khada tha",
        "Uski aankhon mein gratitude tha, par bol nahi sakta tha"
    ]
]
# === TTS with speed-up ===
def generate_tts(text, filename, speed=1.2):
    tts = gTTS(text=text, lang='hi')
    raw = filename.replace(".mp3", "_raw.mp3")
    tts.save(raw)
    seg = AudioSegment.from_file(raw)
    faster = seg._spawn(seg.raw_data, overrides={"frame_rate": int(seg.frame_rate * speed)})
    faster = faster.set_frame_rate(24000)
    faster.export(filename, format="mp3")
    os.remove(raw)

# === Resize image to even width and 1080p height ===
def ensure_even_width(img_path, target_h=1080):
    img = Image.open(img_path)
    ar = img.width / img.height
    w = int(target_h * ar)
    if w % 2: w += 1
    img = img.resize((w, target_h), Image.LANCZOS)
    out = img_path.replace(".png", "_resized.png")
    img.save(out)
    return out

# === Create one video ===
def create_video_with_ffmpeg_safe(story_lines, story_index):
    print(f"\n🔧 Creating video for story {story_index}…")
    temp_dir = f"temp_build_{story_index}"
    os.makedirs(temp_dir, exist_ok=True)
    audio_list = os.path.join(temp_dir, "audios.txt")
    open(audio_list, "w").close()

    clips = []
    TRANSITION_DURATION = 0.5  # Total time added per frame for transitions (fade in/out combined)

    for i, line in enumerate(story_lines):
        img_num = (story_index - 1) * 7 + (i + 1)
        img_in = os.path.join(folder_path, f"{img_num}.png")
        img_fixed = ensure_even_width(img_in)

        audio_mp3 = os.path.join(temp_dir, f"line_{i+1}.mp3")
        generate_tts(line, audio_mp3)

        ac = AudioFileClip(audio_mp3)
        duration = ac.duration
        ac.close()

        adjusted_duration = duration + TRANSITION_DURATION
        base_clip = ImageClip(img_fixed, duration=adjusted_duration)
        zoom_clip = base_clip.resize(lambda t: 1 + 0.03 * t)
        animated = fadein(fadeout(zoom_clip, TRANSITION_DURATION/2), TRANSITION_DURATION/2)

        clips.append(animated.set_fps(24))

        with open(audio_list, "a", encoding="utf-8") as f:
            f.write(f"file '{os.path.abspath(audio_mp3)}'\n")

    final_clips = [clips[0]]
    for c in clips[1:]:
        final_clips.append(c.crossfadein(0.4))

    temp_vid = os.path.join(temp_dir, "video.mp4")
    concat = concatenate_videoclips(final_clips, method="compose", padding=-0.4)
    concat.write_videofile(temp_vid, fps=24, codec="libx264", audio=False)

    audio_out = os.path.join(temp_dir, "audio.mp3")
    subprocess.run([
        "ffmpeg", "-y", "-f", "concat", "-safe", "0",
        "-i", audio_list, "-c", "copy", audio_out
    ], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

    final = os.path.join(output_folder, f"story_{story_index}.mp4")
    subprocess.run([
        "ffmpeg", "-y",
        "-i", temp_vid, "-i", audio_out,
        "-c:v", "libx264", "-preset", "medium", "-crf", "23",
        "-c:a", "aac", "-b:a", "192k",
        "-pix_fmt", "yuv420p", "-movflags", "+faststart",
        final
    ], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

    shutil.rmtree(temp_dir)
    print(f"✅ Saved: {final}")

# === Run for all stories ===
for idx, story in enumerate(stories, start=1):
    create_video_with_ffmpeg_safe(story, idx)

print("\n🎉 All stories rendered in 'final_story_videos/'")

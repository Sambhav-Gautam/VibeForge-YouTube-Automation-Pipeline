import os
from gtts import gTTS
from moviepy.editor import ImageClip, concatenate_videoclips, AudioFileClip
import shutil

# Path where your 70 images are saved as 1.jpg to 70.jpg
folder_path = r"C:\Users\sambh\Downloads\AI_Girls_Database\gemini-downloader\downloads_stories"
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
        "Kitten fisaal gayi, rabbit chillaya, 'NOOO!'",
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
        "Logo ne bola, ‘yeh to wild dog hai, kaat lega!’",
        "Par usne sirf ladke ke pair choome",
        "Par agli subah, woh puppy wapas jungle chala gaya... forever"
    ],
    [
        "Chhota elephant jungle school mein first day gaya",
        "Sab uske size ka mazaak udaane lage",
        "Ek monkey bola ‘yeh to fat hai, swing bhi todega!’",
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
        "Lekin usko hamesha bully kiya jaata: ‘nerd!’",
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

# === Functions ===

def generate_tts(text, filename):
    tts = gTTS(text=text, lang='hi')
    tts.save(filename)

def create_story_video(story_index, story_lines, start_image_index):
    print(f"\n🔧 Creating story {story_index + 1}...")

    clips = []
    temp_audio_dir = "temp_audio"
    os.makedirs(temp_audio_dir, exist_ok=True)

    for i, line in enumerate(story_lines):
        img_path = os.path.join(folder_path, f"{start_image_index + i}.png")
        audio_path = os.path.join(temp_audio_dir, f"frame_{i + 1}.mp3")

        # Generate voiceover
        generate_tts(line, audio_path)
        audio_clip = AudioFileClip(audio_path)

        # Create video from image and audio
        img_clip = ImageClip(img_path).set_duration(audio_clip.duration).set_audio(audio_clip)
        img_clip = img_clip.set_fps(24).resize(height=1080)

        clips.append(img_clip)

    # Combine all 7 clips
    final_video = concatenate_videoclips(clips, method="compose")
    output_path = os.path.join(output_folder, f"story_{story_index + 1}.mp4")
    final_video.write_videofile(output_path, fps=24, codec='libx264', audio_codec='aac')

    shutil.rmtree(temp_audio_dir)
    print(f"✅ Saved: {output_path}")

# === Create Videos ===

for idx, story in enumerate(stories):
    create_story_video(idx, story, start_image_index=idx * 7 + 1)

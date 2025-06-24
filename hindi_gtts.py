from gtts import gTTS
from pydub import AudioSegment
import os

# Step 1: Create TTS
hindi_text = "Goat hamesha gaati thi, sab uski awaaz pasand karte the."
tts = gTTS(text=hindi_text, lang='hi')
tts.save("output_hindi.mp3")

# Step 2: Speed up the audio
sound = AudioSegment.from_file("output_hindi.mp3")
faster_sound = sound.speedup(playback_speed=1.5)  # 1.5x speed

# Step 3: Export faster audio
faster_sound.export("output_hindi_fast.mp3", format="mp3")

print("✅ Faster audio saved as: output_hindi_fast.mp3")

import os
import pickle
import random
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload

# Directly load token_brainrot.pickle
with open("token_brainrot.pickle", "rb") as token_file:
    creds = pickle.load(token_file)

youtube = build("youtube", "v3", credentials=creds)

BASE_DIR = os.path.dirname(__file__)
VIDEO_DIR = os.path.join(BASE_DIR, "Content")
INDEX_FILE = os.path.join(BASE_DIR, "brainrot_last_index.txt")

# Determine next video
files = sorted(
    [f for f in os.listdir(VIDEO_DIR) if f.endswith(".mp4")],
    key=lambda x: int(''.join(filter(str.isdigit, x)) or 0)
)
total = len(files)
index = 0
if os.path.exists(INDEX_FILE):
    with open(INDEX_FILE, "r") as f:
        index = int(f.read().strip())
next_video = files[index % total]
with open(INDEX_FILE, "w") as f:
    f.write(str((index + 1) % total))

base_name = os.path.splitext(next_video)[0]
video_path = os.path.join(VIDEO_DIR, next_video)

# Generate dynamic SEO title and description
keywords = [
    "dopamine detox", "discipline hacks", "study motivation",
    "grind mindset", "reset your brain", "unstoppable mindset",
    "focus hacks", "no excuses"
]
actions = [
    "watch or stay the same", "ignore and fail", "stop scrolling",
    "watch to level up", "skip and regret", "see before quitting",
    "stay broke or watch", "only for action takers"
]

title = f"{random.choice(keywords).title()} - {random.choice(actions).title()} | BrainRot Shorts | {base_name}"
description = (
    f"{title}\n\n"
    "Boost your mindset instantly with this BrainRot short.\n"
    "Image created by gemini-ai.\n"
    "#brainrot #shorts #motivation"
)

# Upload request
request_body = {
    "snippet": {
        "title": title,
        "description": description,
        "tags": ["brainrot", "motivation", "shorts"],
        "categoryId": "22"
    },
    "status": {
        "privacyStatus": "public"
    }
}

media = MediaFileUpload(video_path, mimetype="video/mp4", resumable=True)
request = youtube.videos().insert(part="snippet,status", body=request_body, media_body=media)
response = request.execute()

print(f"✅ Upload successful: https://youtube.com/watch?v={response['id']}")

import os
import pickle
import random
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload

# Load credentials directly
with open("token_genz.pickle", "rb") as token_file:
    creds = pickle.load(token_file)

youtube = build("youtube", "v3", credentials=creds)

BASE_DIR = os.path.dirname(__file__)
VIDEO_DIR = os.path.join(BASE_DIR, "content")
INDEX_FILE = os.path.join(BASE_DIR, "genz_last_index.txt")

# Get next video
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

# Dynamic SEO-friendly title and description
keywords = [
    "gen z motivation", "aesthetic quotes", "gen z lifestyle", "study with me",
    "dopamine detox", "soft aesthetic", "clean girl aesthetic", "midnight motivation"
]
actions = [
    "watch before 20", "skip and regret", "stop scrolling", "reset your mindset",
    "midnight motivation", "gen z hustle", "glow up secrets", "no excuses"
]

title = f"{random.choice(keywords).title()} - {random.choice(actions).title()} | GenZ Shorts | {base_name}"
description = (
    f"{title}\n\n"
    "Stay consistent. Stay aesthetic.\n"
    "Image created by gemini-ai.\n"
    "#genz #shorts #motivation"
)

# Upload
request_body = {
    "snippet": {
        "title": title,
        "description": description,
        "tags": ["genz", "motivation", "shorts", "aesthetic"],
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

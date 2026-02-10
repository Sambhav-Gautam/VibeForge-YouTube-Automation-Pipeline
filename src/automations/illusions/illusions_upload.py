import os
import pickle
import random
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload

# Load credentials
with open("token_illusions.pickle", "rb") as token_file:
    creds = pickle.load(token_file)

youtube = build("youtube", "v3", credentials=creds)

BASE_DIR = os.path.dirname(__file__)
VIDEO_DIR = os.path.join(BASE_DIR, "Content")
INDEX_FILE = os.path.join(BASE_DIR, "illusions_last_index.txt")

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

# Generate dynamic SEO-friendly title and description
keywords = [
    "mind illusions", "visual illusions", "brain tricks", "optical illusions",
    "eye test", "perception tricks", "hidden images", "illusion challenge"
]
actions = [
    "can you spot it", "mind blown", "try this", "wait for it",
    "watch carefully", "pause to see", "spot the difference", "don't blink"
]

title = f"{random.choice(keywords).title()} - {random.choice(actions).title()} | Illusions Shorts | {base_name}"
description = (
    f"{title}\n\n"
    "Experience the best illusions and test your mind.\n"
    "Image created by gemini-ai.\n"
    "#illusions #shorts #mindblowing"
)

# Upload
request_body = {
    "snippet": {
        "title": title,
        "description": description,
        "tags": ["illusions", "shorts", "optical illusions", "brain tricks"],
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
# This script uploads a video to YouTube with a dynamic title and description.
# It uses the YouTube Data API to handle the upload process.
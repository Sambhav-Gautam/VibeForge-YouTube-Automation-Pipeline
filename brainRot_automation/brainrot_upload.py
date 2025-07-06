import os, pickle, random
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload

with open("brainRot_automation/Secrets/token_brainrot.pickle", "rb") as f:
    creds = pickle.load(f)

youtube = build("youtube", "v3", credentials=creds)

index_file = "brainRot_automation/brainrot_last_index.txt"
idx = 1
if os.path.exists(index_file):
    with open(index_file) as f:
        idx = int(f.read().strip())

video_path = f"brainRot_automation/Content/short_{idx}.mp4"

keywords = ["dopamine detox", "discipline hacks", "study motivation", "grind mindset", "reset your brain", "unstoppable mindset", "focus hacks", "no excuses"]
actions = ["watch or stay the same", "ignore and fail", "stop scrolling", "watch to level up", "skip and regret", "see before quitting", "stay broke or watch", "only for action takers"]

title = f"{random.choice(keywords).title()} - {random.choice(actions).title()} | BrainRot Shorts | Video #{idx}"
description = f"Boost your mindset instantly. {title}.\\n\\nImage created by gemini-ai.\\n#brainrot #shorts #motivation"

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

media = MediaFileUpload(video_path, resumable=True)
request = youtube.videos().insert(part="snippet,status", body=request_body, media_body=media)
response = None
while response is None:
    status, response = request.next_chunk()
    if status:
        print(f"Upload progress: {int(status.progress() * 100)}%")
print(f"Upload complete: https://youtu.be/{response['id']}")

idx = idx + 1 if idx < 95 else 1
with open(index_file, "w") as f:
    f.write(str(idx))
import os
import pickle
import random
import re
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request

SCOPES = ['https://www.googleapis.com/auth/youtube.upload']
BASE_DIR = os.path.dirname(__file__)
VIDEO_DIR = os.path.join(BASE_DIR, "Content")
INDEX_FILE = os.path.join(BASE_DIR, "brainrot_last_index.txt")
TOKEN_PATH = os.path.join(BASE_DIR, "Secrets", "token_brainrot.pickle")
CLIENT_SECRET_PATH = os.path.join(BASE_DIR, "Secrets", "client_secret_brainrot.json")

def get_authenticated_service():
    creds = None
    if os.path.exists(TOKEN_PATH):
        with open(TOKEN_PATH, "rb") as token:
            creds = pickle.load(token)
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(CLIENT_SECRET_PATH, SCOPES)
            creds = flow.run_local_server(port=0)
        with open(TOKEN_PATH, "wb") as token:
            pickle.dump(creds, token)
    return build("youtube", "v3", credentials=creds)

def get_next_video():
    def extract_number(filename):
        match = re.search(r'\d+', filename)
        return int(match.group()) if match else 0

    files = sorted(
        [f for f in os.listdir(VIDEO_DIR) if f.endswith(".mp4")],
        key=extract_number
    )
    total = len(files)
    index = 0
    if os.path.exists(INDEX_FILE):
        with open(INDEX_FILE, "r") as f:
            index = int(f.read().strip())
    next_file = files[index % total]
    with open(INDEX_FILE, "w") as f:
        f.write(str((index + 1) % total))
    return next_file

def main():
    youtube = get_authenticated_service()
    next_video = get_next_video()
    base = os.path.splitext(next_video)[0]
    video_path = os.path.join(VIDEO_DIR, next_video)

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

    title = f"{random.choice(keywords).title()} - {random.choice(actions).title()} | BrainRot Shorts | Video {base}"
    description = (
        f"Boost your mindset instantly with this BrainRot short: {title}.\n\n"
        f"Image created by gemini-ai.\n"
        f"#brainrot #shorts #motivation"
    )

    request_body = {
        "snippet": {
            "categoryId": "22",
            "title": title,
            "description": description,
            "tags": ["brainrot", "motivation", "shorts"]
        },
        "status": {
            "privacyStatus": "public"
        }
    }

    media = MediaFileUpload(video_path, mimetype='video/mp4', resumable=True)
    response = youtube.videos().insert(
        part="snippet,status",
        body=request_body,
        media_body=media
    ).execute()

    print(f"✅ Uploaded BrainRot video: https://youtube.com/watch?v={response['id']}")

if __name__ == "__main__":
    main()

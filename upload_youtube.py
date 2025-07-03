import os
import random
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload
from google.oauth2.credentials import Credentials

VIDEO_DIR = "generated_shorts"
SCOPES = ["https://www.googleapis.com/auth/youtube.upload"]

def get_authenticated_service():
    creds = Credentials.from_authorized_user_file("refresh_token.json", SCOPES)
    return build("youtube", "v3", credentials=creds)

def pick_random_line(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = [line.strip() for line in f if line.strip()]
    return random.choice(lines)

def pick_random_video():
    files = [f for f in os.listdir(VIDEO_DIR) if f.endswith(".mp4")]
    return os.path.join(VIDEO_DIR, random.choice(files))

def upload_video(youtube):
    video_path = pick_random_video()
    title = pick_random_line("titles.txt")
    desc = pick_random_line("descriptions.txt")

    request = youtube.videos().insert(
        part="snippet,status",
        body={
            "snippet": {
                "title": title,
                "description": desc,
                "tags": ["motivation", "quotes", "shorts"],
                "categoryId": "22",
            },
            "status": {"privacyStatus": "public"}
        },
        media_body=MediaFileUpload(video_path)
    )
    response = request.execute()
    print(f"✅ Uploaded: {video_path} ➜ https://youtube.com/watch?v={response['id']}")

if __name__ == "__main__":
    youtube = get_authenticated_service()
    upload_video(youtube)

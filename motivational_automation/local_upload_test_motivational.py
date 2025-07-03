import os
import pickle
import re
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request

SCOPES = ['https://www.googleapis.com/auth/youtube.upload']
BASE_DIR = os.path.dirname(__file__)
VIDEO_DIR = os.path.join(BASE_DIR, "youtube_quotes")
INDEX_FILE = os.path.join(BASE_DIR, "current_index_motivational.txt")

def get_authenticated_service():
    creds = None
    if os.path.exists("token_motivational.pickle"):
        with open("token_motivational.pickle", "rb") as token:
            creds = pickle.load(token)
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                "client_motivational_quotes.json", SCOPES)
            creds = flow.run_local_server(port=0)
        with open("token_motivational.pickle", "wb") as token:
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
    title_path = os.path.join(VIDEO_DIR, f"{base}_motivational_title.txt")
    desc_path = os.path.join(VIDEO_DIR, f"{base}_motivational_description.txt")

    with open(title_path, "r", encoding="utf-8") as f:
        title = f.read().strip()
    with open(desc_path, "r", encoding="utf-8") as f:
        description = f.read().strip()

    request_body = {
        "snippet": {
            "categoryId": "22",
            "title": title,
            "description": description,
            "tags": ["Motivation", "Shorts", "Quotes"]
        },
        "status": {
            "privacyStatus": "public"  # Change to 'private' for testing
        }
    }

    media = MediaFileUpload(video_path, mimetype='video/mp4', resumable=True)
    response = youtube.videos().insert(
        part="snippet,status",
        body=request_body,
        media_body=media
    ).execute()

    print(f"✅ Uploaded locally: https://youtube.com/watch?v={response['id']}")

if __name__ == "__main__":
    main()

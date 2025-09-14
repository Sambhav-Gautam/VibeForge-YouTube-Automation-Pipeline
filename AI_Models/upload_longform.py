import os, pickle
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload

base_dir = os.path.join(os.getcwd(), "AI_Models")

# Load metadata
with open(os.path.join(base_dir, "title.txt")) as f:
    title = f.read().strip()
with open(os.path.join(base_dir, "description.txt")) as f:
    description = f.read().strip()
with open(os.path.join(base_dir, "tags.txt")) as f:
    tags = [t.strip() for t in f.read().split(",")]

video_file = os.path.join(base_dir, "output.mp4")

# Authenticate
with open("token_ai_models.pickle", "rb") as token_file:
    creds = pickle.load(token_file)

youtube = build("youtube", "v3", credentials=creds)

request_body = {
    "snippet": {
        "title": title,
        "description": description,
        "tags": tags,
        "categoryId": "28",
    },
    "status": {"privacyStatus": "public"},
}

media = MediaFileUpload(video_file, chunksize=-1, resumable=True)
upload_request = youtube.videos().insert(
    part="snippet,status", body=request_body, media_body=media
)
response = upload_request.execute()
print(f"✅ Uploaded long-form video: {response['id']}")

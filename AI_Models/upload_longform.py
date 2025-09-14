import pickle, os
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload

# Load generated metadata
with open("AI_Models/long_form/title.txt") as f:
    title = f.read().strip()
with open("AI_Models/long_form/description.txt") as f:
    description = f.read().strip()
with open("AI_Models/long_form/tags.txt") as f:
    tags = [t.strip() for t in f.read().split(",")]

video_file = "AI_Models/long_form/output.mp4"

# Authenticate
with open("token_ai_models.pickle", "rb") as token_file:
    creds = pickle.load(token_file)

youtube = build("youtube", "v3", credentials=creds)

request_body = {
    "snippet": {
        "title": title,
        "description": description,
        "tags": tags,
        "categoryId": "28",  # Science & Technology
    },
    "status": {
        "privacyStatus": "public",
    },
}

media = MediaFileUpload(video_file, chunksize=-1, resumable=True)
upload_request = youtube.videos().insert(
    part="snippet,status",
    body=request_body,
    media_body=media,
)
response = upload_request.execute()
print(f"✅ Uploaded long-form video: {response['id']}")

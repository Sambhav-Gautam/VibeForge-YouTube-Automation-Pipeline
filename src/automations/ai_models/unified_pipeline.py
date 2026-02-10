import os
import subprocess
import json
import pickle
import time
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# --- Configuration ---
NODE_SCRIPT_PATH = os.path.join(os.path.dirname(__file__), "gemini_generate.js")
CREDENTIALS_PATH = "token_ai_models.pickle" # Assuming this is in root or we find it
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "generated_content")

class VideoGenerator:
    def __init__(self, script_path, output_dir):
        self.script_path = script_path
        self.output_dir = output_dir

    def generate(self):
        print(f"🚀 Launching Veo 3.0 Generation via {self.script_path}...")
        try:
            # Run the Node.js script and capture stdout
            process = subprocess.Popen(
                ["node", self.script_path, self.output_dir],
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                text=True,
                encoding='utf-8' # Ensure UTF-8 encoding
            )
            
            stdout, stderr = process.communicate()
            
            if process.returncode != 0:
                print(f"❌ Generation failed:\n{stderr}")
                return None

            print("✅ Generation complete. Parsing output...")
            
            # Extract JSON from stdout
            json_str = ""
            capturing = False
            for line in stdout.splitlines():
                if line.strip() == "JSON_OUTPUT_START":
                    capturing = True
                    continue
                if line.strip() == "JSON_OUTPUT_END":
                    capturing = False
                    break
                if capturing:
                    json_str += line

            if not json_str:
                print("❌ Could not find JSON output in Node script response.")
                print(f"Full stdout: {stdout}")
                return None

            return json.loads(json_str)

        except Exception as e:
            print(f"❌ Error during generation: {e}")
            return None

class YouTubeUploader:
    def __init__(self, credentials_path):
        self.credentials_path = credentials_path
        self.youtube = self._authenticate()

    def _authenticate(self):
        if not os.path.exists(self.credentials_path):
            raise FileNotFoundError(f"Credentials not found at {self.credentials_path}")
        
        with open(self.credentials_path, "rb") as token_file:
            creds = pickle.load(token_file)
        
        return build("youtube", "v3", credentials=creds)

    def upload(self, video_data):
        video_path = video_data['videoPath']
        title = video_data['title']
        description = video_data['description']
        tags = video_data.get('tags', [])

        print(f"📤 Uploading: {title}")
        
        request_body = {
            "snippet": {
                "title": title[:100], # Max 100 chars
                "description": description[:5000], # Max 5000 chars
                "tags": tags[:500],
                "categoryId": "22" # People & Blogs or 24 for Entertainment
            },
            "status": {
                "privacyStatus": "public",
                "selfDeclaredMadeForKids": False
            }
        }

        media = MediaFileUpload(video_path, mimetype="video/mp4", resumable=True)
        request = self.youtube.videos().insert(
            part="snippet,status",
            body=request_body,
            media_body=media
        )
        
        response = None
        while response is None:
            status, response = request.next_chunk()
            if status:
                print(f"Uploading... {int(status.progress() * 100)}%")

        print(f"✅ Upload successful! Video ID: {response['id']}")
        return response['id']

def main():
    # 1. Resolve Paths
    base_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.abspath(os.path.join(base_dir, "..", "..", "..")) # src/automations/ai_models -> root
    
    # Check for credentials in root (typically where they are stored in this repo)
    creds_path = os.path.join(project_root, CREDENTIALS_PATH)
    if not os.path.exists(creds_path):
        # Fallback to local dir if moved
        creds_path = os.path.join(base_dir, CREDENTIALS_PATH)
    
    gen_script = os.path.join(base_dir, "gemini_generate.js")
    output_dir = os.path.join(base_dir, "generated_content")

    # 2. Generate Content
    generator = VideoGenerator(gen_script, output_dir)
    content_data = generator.generate()
    
    if not content_data:
        print("❌ Pipeline aborted due to generation failure.")
        return

    # 3. Upload to YouTube
    try:
        uploader = YouTubeUploader(creds_path)
        uploader.upload(content_data)
        print("🎉 Pipeline executed successfully.")
    except Exception as e:
        print(f"❌ Upload failed: {e}")

if __name__ == "__main__":
    main()

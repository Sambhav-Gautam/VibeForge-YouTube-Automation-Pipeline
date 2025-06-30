import os
import json
import base64
from datetime import datetime

# === CONFIG ===
VIDEOS_DIR = "youtube_quotes"
CLIENT_SECRET = "client_motivational_quotes.json"
TOKEN_FILE = "tokens_motivational.json"

# === UTILS ===
def generate_title_description(filename):
    base_title = os.path.splitext(filename)[0].replace('_', ' ').title()
    today = datetime.now().strftime('%d %b %Y')
    title = f"{base_title} | Daily Motivation | {today}"
    description = (
        f"🔥 Stay motivated with today's quote: {base_title}.\n\n"
        "✨ Remember to like, comment, and subscribe for daily motivational shorts.\n"
        "#motivation #shorts #quotes"
    )
    return title, description

# === MAIN ===
def main():
    for file in os.listdir(VIDEOS_DIR):
        if file.endswith(".mp4"):
            base_name = os.path.splitext(file)[0]
            title, description = generate_title_description(file)

            title_file = os.path.join(VIDEOS_DIR, f"{base_name}_motivational_title.txt")
            desc_file = os.path.join(VIDEOS_DIR, f"{base_name}_motivational_description.txt")

            with open(title_file, "w", encoding="utf-8") as f:
                f.write(title)
            with open(desc_file, "w", encoding="utf-8") as f:
                f.write(description)

            print(f"Generated title and description for: {file}")

    # Create base64 token file for future GitHub Action
    with open(CLIENT_SECRET, "rb") as f:
        encoded = base64.b64encode(f.read()).decode('utf-8')

    with open(TOKEN_FILE, "w", encoding="utf-8") as f:
        json.dump({"base64": encoded}, f, indent=2)

    print(f"Generated {TOKEN_FILE} with base64 encoded client secret.")

if __name__ == "__main__":
    main()

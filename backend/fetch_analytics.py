import json
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build
from datetime import datetime, timedelta

channels = [
    ("client_secret_ai_models.json", "token_ai_models.json", "AI Models"),
    ("client_secret_brainrotmemes.json", "token_brainrotmemes.json", "BrainRotMemes"),
    ("client_secret_brainrot.json", "token_brainrot.json", "BrainRot"),
    ("client_secret_genz.json", "token_genz.json", "GenZ"),
    ("client_secret_illusions.json", "token_illusions.json", "Illusions"),
    ("client_motivational_quotes.json", "token_motivational.json", "Motivational")
]

def fetch_channel_analytics(client_secret_file, token_file, channel_name):
    creds = Credentials.from_authorized_user_file(
        token_file,
        scopes=["https://www.googleapis.com/auth/yt-analytics.readonly"]
    )
    service = build("youtubeAnalytics", "v2", credentials=creds)

    yesterday = (datetime.utcnow() - timedelta(days=1)).strftime("%Y-%m-%d")

    request = service.reports().query(
        ids="channel==MINE",
        startDate=yesterday,
        endDate=yesterday,
        metrics="views,estimatedMinutesWatched,subscribersGained,subscribersLost",
        dimensions="day",
        maxResults=1
    )
    response = request.execute()
    if "rows" in response:
        row = response["rows"][0]
        return {
            "channel": channel_name,
            "date": row[0],
            "views": row[1],
            "minutesWatched": row[2],
            "subsGained": row[3],
            "subsLost": row[4]
        }
    else:
        return {"channel": channel_name, "error": "No data returned"}

if __name__ == "__main__":
    all_data = []
    for client_secret, token_file, channel_name in channels:
        try:
            data = fetch_channel_analytics(client_secret, token_file, channel_name)
            all_data.append(data)
        except Exception as e:
            all_data.append({"channel": channel_name, "error": str(e)})
    with open("dashboard_data.json", "w") as f:
        json.dump(all_data, f, indent=2)
    print("✅ Fetched and saved dashboard_data.json")

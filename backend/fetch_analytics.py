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
    try:
        creds = Credentials.from_authorized_user_file(
            token_file,
            scopes=["https://www.googleapis.com/auth/yt-analytics.readonly"]
        )
        service = build("youtubeAnalytics", "v2", credentials=creds)

        # Fetch last 7 days data for safety
        today = datetime.utcnow().date()
        start_date = (today - timedelta(days=7)).strftime("%Y-%m-%d")
        end_date = (today - timedelta(days=1)).strftime("%Y-%m-%d")

        request = service.reports().query(
            ids="channel==MINE",
            startDate=start_date,
            endDate=end_date,
            metrics="views,estimatedMinutesWatched,subscribersGained,subscribersLost",
            dimensions="day",
            maxResults=7
        )
        response = request.execute()

        if "rows" not in response or len(response["rows"]) == 0:
            return {"channel": channel_name, "error": "No data returned (no activity or private data)"}

        # Sum data over the last 7 days for smoother display
        total_views = 0
        total_minutes = 0
        total_subs_gained = 0
        total_subs_lost = 0

        for row in response["rows"]:
            total_views += row[1]
            total_minutes += row[2]
            total_subs_gained += row[3]
            total_subs_lost += row[4]

        return {
            "channel": channel_name,
            "start_date": start_date,
            "end_date": end_date,
            "views": total_views,
            "minutesWatched": total_minutes,
            "subsGained": total_subs_gained,
            "subsLost": total_subs_lost
        }

    except Exception as e:
        return {"channel": channel_name, "error": str(e)}

if __name__ == "__main__":
    all_data = []
    for client_secret, token_file, channel_name in channels:
        data = fetch_channel_analytics(client_secret, token_file, channel_name)
        all_data.append(data)

    with open("dashboard_data.json", "w") as f:
        json.dump(all_data, f, indent=2)

    print("✅ Fetched and saved dashboard_data.json")

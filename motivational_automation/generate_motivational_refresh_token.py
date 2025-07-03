import os
import pickle
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request

SCOPES = ['https://www.googleapis.com/auth/youtube.upload']
BASE_DIR = os.path.dirname(__file__)
CLIENT_SECRET_FILE = os.path.join(BASE_DIR, "client_motivational_quotes.json")
TOKEN_PICKLE_FILE = os.path.join(BASE_DIR, "token_motivational.pickle")

def generate_refresh_token():
    creds = None
    if os.path.exists(TOKEN_PICKLE_FILE):
        with open(TOKEN_PICKLE_FILE, "rb") as token:
            creds = pickle.load(token)

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
            print("✅ Existing token refreshed successfully.")
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                CLIENT_SECRET_FILE, SCOPES)
            creds = flow.run_local_server(port=0)
            print("✅ New token generated successfully.")

        with open(TOKEN_PICKLE_FILE, "wb") as token:
            pickle.dump(creds, token)
        print(f"✅ Token saved to {TOKEN_PICKLE_FILE}")
    else:
        print("✅ Existing token is still valid, no action needed.")

if __name__ == "__main__":
    generate_refresh_token()
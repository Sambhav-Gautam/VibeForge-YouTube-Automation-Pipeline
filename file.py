from google_auth_oauthlib.flow import InstalledAppFlow
import pickle

SCOPES = ["https://www.googleapis.com/auth/youtube.upload"]

flow = InstalledAppFlow.from_client_secrets_file(
    "Secrets/client_secret_brainrotmemes.json",
    scopes=SCOPES
)
creds = flow.run_local_server(port=0)

with open("token_brainrotmemes.pickle", "wb") as token_file:
    pickle.dump(creds, token_file)

from google_auth_oauthlib.flow import InstalledAppFlow
import pickle, base64

flow = InstalledAppFlow.from_client_secrets_file(
    "../Secrets/client_secret_brainrot.json",
    scopes=["https://www.googleapis.com/auth/youtube.upload"]
)
creds = flow.run_local_server(port=0)

with open("../Secrets/token_brainrot.pickle", "wb") as f:
    pickle.dump(creds, f)

with open("../Secrets/token_brainrot.pickle", "rb") as f:
    print(base64.b64encode(f.read()).decode())
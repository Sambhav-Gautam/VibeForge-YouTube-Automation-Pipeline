from google_auth_oauthlib.flow import InstalledAppFlow

SCOPES = ["https://www.googleapis.com/auth/youtube.upload"]
flow = InstalledAppFlow.from_client_secrets_file("client_secrets.json", SCOPES)
creds = flow.run_local_server(port=0)

print("\n✅ Your refresh token:")
print(creds.refresh_token)

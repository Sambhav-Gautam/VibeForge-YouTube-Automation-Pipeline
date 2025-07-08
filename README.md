# 🚀 VibeForge Pipeline: YouTube Automation & Gemini Bulk Downloader

![VibeForge Pipeline](https://img.shields.io/badge/VibeForge%20Pipeline-Active-brightgreen) ![Python](https://img.shields.io/badge/Python-3.11-blue) ![Node.js](https://img.shields.io/badge/Node.js-18-green) ![Gemini](https://img.shields.io/badge/Gemini-Bulk%20Image%20Generation-yellow) ![YouTube API](https://img.shields.io/badge/YouTube%20API-Automated%20Uploads-red) ![Vercel](https://img.shields.io/badge/Vercel-Hosted%20Dashboard-orange) ![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-Workflows-blue)

**Welcome to the VibeForge Pipeline**—the ultimate tool for creators to **automate short-form video content creation** and skyrocket their YouTube, Instagram, and TikTok presence! Generate stunning Gemini images, convert them into engaging 5-second Shorts with music, schedule uploads, and monitor performance—all with minimal effort. 🚀 Save hours and dominate the short-form content game!

## 🎨 Logo Concept

```
   ____ ___ _          
  / __ `__ | |         
 / / / / / | |__   ____
/_/ /_/ /_/|____| /___/
~ Powering Viral Content Creation ~
```

## 📖 Table of Contents

- [Why VibeForge?](#why-vibeforge)
- [Workflow Overview](#workflow-overview)
- [Project Structure](#project-structure)
- [Quick Start](#quick-start)
- [Step 1: Bulk Content Generation](#step-1-bulk-content-generation)
- [Step 2: Download Images](#step-2-download-images)
- [Step 3: Generate Shorts](#step-3-generate-shorts)
- [Step 4: Automated Uploads](#step-4-automated-uploads)
- [Step 5: Analytics Dashboard](#step-5-analytics-dashboard)
- [Tech Stack](#tech-stack)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## 🌟 Why VibeForge?

The **VibeForge Pipeline** is your ticket to effortless content creation:
- **Automate Everything**: From image generation to uploads, save hours of manual work.
- **Scale with Ease**: Manage multiple channels (AI Models, BrainRot, GenZ, etc.) seamlessly.
- **Track Performance**: Monitor views, watch time, and subscriber growth on a sleek Vercel dashboard.
- **Go Viral**: Create engaging, platform-ready Shorts with cinematic visuals and music.

## 🛠️ Workflow Overview

The pipeline follows a streamlined process to transform ideas into viral Shorts:

```
[Gemini] --> [Image Generation] --> [Puppeteer Downloader] --> [Video Rendering] --> [YouTube Upload] --> [Analytics Dashboard]
   |               |                    |                        |                   |                   |
   Prompt         90-100 Images      Downloads to           5s Shorts with      Scheduled Uploads   Vercel Dashboard
 Automation        per Hour          Channel Folders         Music             via GitHub Actions   (Views, Subs)
```

![Pipeline](https://github.com/user-attachments/assets/edbfc9ba-c755-4359-9b1b-f80268f64600)


## 📂 Project Structure

```
.github/workflows/
├── ai_models_upload.yml
├── brainrot_upload.yml
├── brainrotmemes_upload.yml
├── genz_upload.yml
├── illusions_upload.yml
├── motivational_upload.yml
├── daily_upload.yml
├── dashboard_update.yml
.vnev/
AI_Models/
ChatBotAutomation/
├── gemini_automation/
├── gemini-downloader/
Python-Scripts/
assests/
backend/
brainRot_automation/
brainRotMemes_automation/
genz_automation/
illusions_automation/
motivational_automation/
youtube_automation/
youtube_music/
.gitignore
README.md
Requirements.txt
dashboard_data.json
file.py
package-lock.json
package.json
```

- **ChatBotAutomation**: `gemini_automation` (bulk image generation), `gemini-downloader` (image scraping).
- **youtube_music**: Copyright-free music library.
- **Channel-specific folders**: Store ready-to-upload Shorts (e.g., `brainRot_automation/Content`).
- **.github/workflows**: Automates uploads and dashboard updates.

## ⚡ Quick Start

Get up and running in minutes:
1. Clone the repo: `git clone https://github.com/your-username/vibeforge-pipeline.git`
2. Set up Python: `python -m venv .vnev && source .vnev/bin/activate && pip install -r Requirements.txt`
3. Install Node.js dependencies: `npm install`
4. Configure YouTube API credentials in GitHub Secrets (see [Step 4](#step-4-automated-uploads)).
5. Run `node ChatBotAutomation/gemini-downloader/gemini.js` to download images.
6. Run `python Python-Scripts/file.py` to generate Shorts.
7. Check the [Vercel Dashboard](https://automation-pipeline.vercel.app/) for analytics.

## 📸 Step 1: Bulk Content Generation

### Description
Generate 90–100 vertical 9:16 images/hour with text overlays using Gemini and JavaScript automation.

### Usage
1. Navigate to `ChatBotAutomation/gemini_automation`.
2. Update `script.js`:
   ```javascript
   let generationIndex = 0, delay = 30000, totalGenerations = 400;
   function getPrompt() {
     return `Create a 9:16 cinematic image with hyper-vivid style...
     Include bold yellow text: "YOUR TEXT" ...`;
   }
   function submitPrompt() { /* Automation logic */ }
   submit-analytics();
   ```
3. Run in a browser console on the Gemini interface.
4. Use multiple personal Gmail accounts to scale generation.

> **Tip**: Personal Gmail accounts ensure the “Share” button appears.

## 🌐 Step 2: Download Images

### Description
Scrape Gemini share links to download images using a stealth Puppeteer script.

### Usage
1. Get a Gemini share link via the “Share” button.
2. Navigate to `ChatBotAutomation/gemini-downloader`.
3. Update `gemini.js`:
   ```javascript
   const URL = 'YOUR_GEMINI_SHARE_LINK_HERE';
   ```
4. Run: `node gemini.js`
5. Images save to `ChatBotAutomation/gemini-downloader/downloads_<channel>`.

### Features
- Auto-scrolls and extracts `.jpg`/`.png` URLs.
- Retry handling and detailed logging.

## 🎬 Step 3: Generate Shorts

### Description
Convert images into 5-second Shorts with music and transitions.

### Usage
1. Navigate to `Python-Scripts`.
2. Run: `python file.py`
3. Example script:
   ```python
   from moviepy.editor import ImageClip, AudioFileClip
   clip = ImageClip(image_path, duration=5).resize(width=1080)
   audio_clip = AudioFileClip(music_path).subclip(0, 5).volumex(0.2)
   final_clip = clip.set_audio(audio_clip)
   final_clip.write_videofile("short.mp4", fps=30, codec="libx264")
   ```

### Output
- Saved to `<channel>_automation/Content`.
- Format: 1080x1920, 30fps, platform-ready.
- Includes fade-in/out and random music from `youtube_music`.

## ⏰ Step 4: Automated Uploads

### Description
GitHub Actions schedules uploads for six channels and a general daily upload.

### Workflow Schedules
- **AI Models**: Every alternate day, 4 AM IST (`30 22 */2 * *`).
- **BrainRot**: Every alternate day, 9 PM IST (`30 15 */2 * *`).
- **BrainRotMemes**: Every alternate day, 7 PM IST (`30 13 */2 * *`).
- **GenZ**: Every alternate day, 5 AM IST (`30 23 */2 * *`).
- **Illusions**: Every alternate day, 7 AM IST (`30 1 */2 * *`).
- **Motivational**: Daily, 1 AM IST (`30 19 * * *`).
- **General Upload**: Daily, 11 PM IST (`30 17 * * *`).

### Setup
1. Add base64-encoded secrets to GitHub:
   - `CLIENT_SECRET_<CHANNEL>_B64`, `TOKEN_<CHANNEL>_B64` for each channel.
   - `MOTIVATIONAL_SECRET`, `MOTIVATIONAL_PICKLE`, `YT_REFRESH_TOKEN_JSON`.
2. Ensure upload scripts (e.g., `ai_models_upload.py`) are in channel folders.

## 📊 Step 5: Analytics Dashboard

### Description
Monitor all channels on a Vercel-hosted dashboard: [Live Demo](https://automation-pipeline.vercel.app/).

### Features
- **Metrics**: Views, minutes watched, subscribers gained/lost (7-day aggregates).
- **UI**: Responsive table with light/dark mode toggle.
- **Update Schedule**: Daily at 2 AM IST (`30 20 * * *`).
- **Data**: `dashboard_data.json` updated via `backend/fetch_analytics.py`.

### Dashboard Snippet
```html
<table id="dashboard">
    <thead>
        <tr>
            <th>Channel</th>
            <th>Date</th>
            <th>Views</th>
            <th>Minutes Watched</th>
            <th>Subs Gained</th>
            <th>Subs Lost</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody></tbody>
</table>
```

## 🔧 Tech Stack

- **Python**: `moviepy`, `os`, `random`, `google-api-python-client`.
- **Node.js + Puppeteer**: For Gemini scraping.
- **JavaScript**: Browser-based Gemini automation.
- **YouTube API**: Uploads and analytics.
- **GitHub Actions**: Scheduled workflows.
- **Vercel**: Dashboard hosting.
- **YouTube Music Library**: Copyright-free audio.

## ✅ Best Practices

- **Batch Size**: Limit Gemini generations to 90–100 images.
- **Multiple Accounts**: Use personal Gemini accounts for scale.
- **Naming**: Keep channel and output names consistent.
- **Music Refresh**: Update `youtube_music` regularly.
- **Security**: Store API credentials in GitHub Secrets.

## 🛠️ Troubleshooting

- **Gemini “Share” Button Missing**: Use a personal Gmail account.
- **Upload Failures**: Verify API credentials and quotas in Google Cloud Console.
- **Dashboard Errors**: Check `fetch_analytics.py` logs for API issues.
- **Rate Limits**: Reduce batch sizes or add delays in scripts.

## 🚀 Roadmap

- Add Instagram and TikTok upload automation.
- Enhance dashboard with real-time charts using Chart.js.
- Implement AI-driven prompt optimization for Gemini.
- Support multi-language text overlays.

## 🤝 Contributing

Join the VibeForge community! To contribute:
1. Fork the repo.
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit: `git commit -m 'Add your feature'`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request.

## 📜 License

MIT License. See [LICENSE](LICENSE) for details.

## ✨ Acknowledgments

- Powered by Gemini, YouTube API, and the open-source community.

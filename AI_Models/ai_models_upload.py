import os
import pickle
import random
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload

# Load credentials
with open("token_ai_models.pickle", "rb") as token_file:
    creds = pickle.load(token_file)

youtube = build("youtube", "v3", credentials=creds)

BASE_DIR = os.path.dirname(__file__)
VIDEO_DIR = os.path.join(BASE_DIR, "Youtube", "Res")
INDEX_FILE = os.path.join(BASE_DIR, "ai_models_last_index.txt")

# Get next video
files = sorted(
    [f for f in os.listdir(VIDEO_DIR) if f.endswith(".mp4")],
    key=lambda x: int(''.join(filter(str.isdigit, x)) or 0)
)
total = len(files)
index = 0
if os.path.exists(INDEX_FILE):
    with open(INDEX_FILE, "r") as f:
        index = int(f.read().strip())
next_video = files[index % total]
with open(INDEX_FILE, "w") as f:
    f.write(str((index + 1) % total))

video_path = os.path.join(VIDEO_DIR, next_video)
base_name = os.path.splitext(next_video)[0]

# Dynamic unique title generation
titles = [
    "AI Models That Look Too Real To Believe",
    "Next-Gen Virtual Fashion Shots by AI",
    "Unseen AI Model Looks You Must Watch",
    "Insanely Beautiful AI Model Showcase",
    "Futuristic Fashion Rendered by AI",
    "AI Models That Feel Straight Out of Vogue",
    "The Future of Beauty: AI Fashion Models",
    "Gorgeous AI Avatars You Won’t Forget",
    "Virtual Beauties Created by Artificial Intelligence",
    "AI Model Looks That Could Rule Runways",
    "Bing AI Models That Look Unreal",
    "Mesmerizing AI Fashion for the Future",
    "AI Models So Real They Fool the Eye",
    "Hyper-Realistic AI Fashion Transformations",
    "Stunning AI Avatars With Perfect Aesthetics",
    "Futuristic Fashion Looks by Bing AI",
    "AI Models With Jaw-Dropping Style",
    "Next-Level AI Beauties You Need to See",
    "AI Fashion That Will Leave You Speechless",
    "Unreal AI Model Portraits in HD",
    "Viral-Worthy AI Fashion Creations",
    "AI Models Styled for the Future",
    "AI Fashion So Perfect It Looks Human",
    "The Most Aesthetic AI Model Shots",
    "Incredible AI Model Fashion Concepts",
    "AI-Generated Looks That Redefine Style",
    "Beautiful Virtual Models by AI Tools",
    "AI Fashion Week on Your Screen",
    "AI Creations That Look Like Supermodels",
    "Glamorous Virtual Models by Bing AI",
    "AI Fashion Looks You Can’t Ignore",
    "Elegant and Futuristic AI Beauties",
    "AI Models With Hyper-Real Expressions",
    "Mind-Blowing AI Fashion Inspirations",
    "Trending AI Looks for Fashion Lovers",
    "AI Models Created With Perfect Detail",
    "Unseen Virtual Beauties Made by AI",
    "AI-Generated Fashion Shots for You",
    "Next-Gen AI Models Taking Over Fashion",
    "AI Fashion Concepts That Inspire Creativity",
    "Virtual AI Beauties That Look Human",
    "AI Models That Belong on Magazine Covers",
    "Futuristic AI Fashion Aesthetics",
    "Eye-Catching AI Creations You Must See",
    "Beautiful AI Models Rendered Flawlessly",
    "HD AI Fashion Showcase for Your Feed",
    "AI Fashion Shots That Could Go Viral",
    "Insane AI-Generated Beauty Concepts",
    "Virtual Models That Break Reality",
    "AI Fashion Styles for the Digital Era",
    "Hyper-Real AI Avatars in Fashion Mode",
    "AI Model Shots Styled to Perfection",
    "Futuristic AI Beauty You Won’t Believe",
    "AI Creations That Define Digital Fashion",
    "Unbelievable AI Fashion Photography",
    "Beautiful AI Models in Stunning Outfits",
    "AI Models Too Perfect to Be True",
    "Captivating AI Fashion Scenes in HD",
    "Aesthetic Virtual Beauties Made by AI",
    "AI Fashion Inspiration for the Future",
    "Unreal AI Models That Shock Reality",
    "AI-Generated Runway Looks That Stun",
    "Mesmerizing Virtual Beauties by Bing",
    "Digital AI Models That Inspire Style",
    "AI Fashion Shots for the Modern Era",
    "Incredible AI Beauties in HD",
    "Virtual Models That Look Ultra-Real",
    "AI Looks You’ve Never Seen Before",
    "Next-Level AI Fashion Creations",
    "AI Model Showcase You Can’t Miss",
    "Futuristic Virtual Beauties in Fashion",
    "AI Creations That Redefine Aesthetics",
    "AI Beauties Styled for Perfection",
    "Elegant AI Models in Unreal Scenes",
    "AI Fashion Photography That Stands Out",
    "Glamorous AI Beauties in HD",
    "AI Looks That Deserve Millions of Views",
    "Next-Gen Fashion Shots by AI Tools",
    "AI Beauties That Inspire Digital Art",
    "Unreal AI Models in Cinematic Shots",
    "AI-Generated Beauties for Fashion Fans",
    "Futuristic AI Fashion Shots You’ll Love",
    "Beautiful AI Models in Digital Fashion",
    "AI Looks That Could Break the Internet",
    "Unreal AI Beauties for Your Inspiration",
    "AI Models With Flawless Digital Details",
    "Mesmerizing AI Styles You’ll Adore",
    "AI Fashion That Pushes Boundaries",
    "Next-Gen Digital Beauties by Bing AI",
    "Stunning AI Fashion Models in 4K",
    "Hyper-Realistic AI Beauties Captured",
    "AI Looks That Feel Alive",
    "Unreal Digital Fashion by AI",
    "AI Models That Look Like Real People",
    "Incredible AI Fashion for Your Feed",
    "Virtual AI Beauties With Unreal Looks",
    "Trending AI Fashion Shots 2025",
    "AI Models That Could Fool Anyone",
    "Elegant AI Beauties You’ll Admire",
    "Unrealistic Yet Gorgeous AI Fashion",
    "Futuristic AI Beauties Styled Perfectly",
    "AI Creations That Feel Like Magic",
    "Stunning AI Beauties That Inspire You",
    "AI Models Ready for Digital Runways",
    "AI Looks That Are Too Perfect",
    "Virtual Fashion Beauties You Need to See",
    "Unreal AI Beauties in Next-Level Shots",
    "AI Fashion That Will Amaze You",
    "Beautiful Digital Models Made by AI",
    "AI Looks That Shock With Realism",
    "Incredible Virtual Beauties by AI",
    "AI Fashion Shots That Trend Instantly",
    "Eye-Catching AI Looks That Inspire",
    "Glamorous AI Models for Your Feed",
    "Unreal Virtual Beauties Rendered Perfectly"
]

title = f"{random.choice(titles)} | AI Models #{base_name}"

# Long SEO-optimized description
description = f"""
{title}

Experience the world of hyper-realistic, stunning AI-generated models, crafted using Bing Sora to deliver the best in AI aesthetics, virtual fashion, and digital creativity. Each video showcases unreal transformations and styles created with advanced AI tools, curated for your inspiration and creativity.

These AI models were generated by Bing through the Sora model pipeline, ensuring unique and eye-catching visuals to elevate your content feed. Whether you're a creator seeking new ideas, a fashion enthusiast, or someone fascinated by the future of AI artistry, these videos will captivate your imagination.

✨ Credits:
- Videos generated using Bing through the Sora AI model.
- Music synced for a seamless Shorts experience.

📌 Tags:
#AImodels #VirtualModels #FashionAI #Shorts #Bing #Sora #AestheticAI #AIArt #FutureOfFashion #AIShorts #Trending

Subscribe for more AI-powered visual inspirations and stunning content!
"""

# Upload
request_body = {
    "snippet": {
        "title": title,
        "description": description.strip(),
        "tags": [
            "AI models", "Virtual models", "AI fashion", "AI art",
            "Bing Sora", "Shorts", "Trending", "Future fashion",
            "Aesthetic AI", "Hyper realistic models"
        ],
        "categoryId": "22"
    },
    "status": {
        "privacyStatus": "public"
    }
}

media = MediaFileUpload(video_path, mimetype="video/mp4", resumable=True)
request = youtube.videos().insert(part="snippet,status", body=request_body, media_body=media)
response = request.execute()

print(f"✅ Upload successful: https://youtube.com/watch?v={response['id']}")

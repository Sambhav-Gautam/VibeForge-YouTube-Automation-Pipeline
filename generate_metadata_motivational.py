import os

# === CONFIG ===
VIDEOS_DIR = "youtube_quotes"

# === UTILS ===
def generate_title_description(filename):
    base_title = os.path.splitext(filename)[0].replace('_', ' ').title()
    title = f"{base_title} | Daily Motivation"
    description = (
        f"🔥 Stay motivated with today's quote: {base_title}.\n\n"
        "✨ Remember to like, comment, and subscribe for daily motivational shorts.\n"
        "#motivation #shorts #quotes"
    )
    return title, description

# === MAIN ===
def main():
    # Clean existing *_motivational_title.txt and *_motivational_description.txt files
    for file in os.listdir(VIDEOS_DIR):
        if file.endswith("_motivational_title.txt") or file.endswith("_motivational_description.txt"):
            os.remove(os.path.join(VIDEOS_DIR, file))

    # Generate fresh titles and descriptions
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

            print(f"✅ Generated title and description for: {file}")

if __name__ == "__main__":
    main()

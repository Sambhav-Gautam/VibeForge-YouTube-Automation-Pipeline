import os
from PIL import Image
from tqdm import tqdm

# === Configuration ===
scale_factor = 2  # 2x upscale, adjust to 3 or 4 if desired
input_dir = "."  # current directory
output_dir = "upscaled"
os.makedirs(output_dir, exist_ok=True)

for img_name in tqdm(os.listdir(input_dir)):
    if not img_name.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
        continue

    img_path = os.path.join(input_dir, img_name)
    img = Image.open(img_path).convert('RGB')

    # Calculate new size
    new_size = (img.width * scale_factor, img.height * scale_factor)

    # Resize with high-quality LANCZOS filter
    upscaled_img = img.resize(new_size, Image.LANCZOS)

    upscaled_img.save(os.path.join(output_dir, img_name))

print("✅ All images upscaled without AI using Pillow.")

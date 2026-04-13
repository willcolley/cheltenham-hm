#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont
import os

os.makedirs('icons', exist_ok=True)

for size in [192, 512]:
    img = Image.new('RGB', (size, size), '#0a0a0a')
    draw = ImageDraw.Draw(img)
    
    # Blue circle background
    margin = size // 8
    draw.ellipse([margin, margin, size-margin, size-margin], fill='#4a9eff')
    
    # Running figure (simple text symbol)
    font_size = size // 3
    try:
        font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', font_size)
    except:
        font = ImageFont.load_default()
    
    text = 'HM'
    bbox = draw.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    x = (size - tw) // 2
    y = (size - th) // 2
    draw.text((x, y), text, fill='#ffffff', font=font)
    
    img.save(f'icons/icon-{size}.png')
    print(f'Created icon-{size}.png')

print('Icons created!')

import sys
from PIL import Image

def recolor_image(input_path, output_path):
    # Open image and convert to RGBA
    img = Image.open(input_path).convert('RGBA')
    data = img.getdata()
    
    # Target color (#FF5A36 or similar orange hues)
    # the target is roughly red=255, green=90, blue=54
    # The replacement color is Forest Green (#2D5016 / 45, 80, 22)
    
    new_data = []
    for item in data:
        r, g, b, a = item
        
        # Simple heuristic to find the orange-red hues. 
        # Typically R is high, G is med/low, B is low.
        if r > 150 and g < 150 and b < 100 and a > 0:
            # We found a pixel that is part of the orange curve
            # Replace it with Forest Green, preserving alpha
            new_data.append((45, 80, 22, a))
            
        elif r > 200 and g > 200 and b > 200:
            # Keep white/transparent background pixels alone
            new_data.append(item)
            
        elif r > 200 and g > 150 and b > 150 and a > 0:
             # This is for the light pale orange fill areas inside the curve
             # We want to map this to a pale green instead. 
             # Let's say light green: #EBF2EE (235, 242, 238) roughly matches
             new_data.append((235, 242, 238, a))
             
        else:
            # Keep all other colored pixels unchanged (e.g. gray text)
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python recolor.py <input> <output>")
        sys.exit(1)
    recolor_image(sys.argv[1], sys.argv[2])

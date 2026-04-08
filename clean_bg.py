from PIL import Image

img_path = 'public/avatar-3d.png'
out_path = 'public/avatar-3d-clean.png'

try:
    img = Image.open(img_path).convert('RGBA')
    width, height = img.size
    pixels = img.load()

    def is_bg(c):
        r, g, b, a = c
        if a < 100: return True
        if r > 160 and g > 160 and b > 160 and abs(r-g)<30 and abs(g-b)<30:
            return True
        return False

    visited = set()
    queue = []
    
    for x in range(width):
        queue.append((x, 0))
        queue.append((x, height-1))
        visited.add((x, 0))
        visited.add((x, height-1))
    for y in range(height):
        queue.append((0, y))
        queue.append((width-1, y))
        visited.add((0, y))
        visited.add((width-1, y))
        
    # BFS
    head = 0
    while head < len(queue):
        x, y = queue[head]
        head += 1
        
        if is_bg(pixels[x, y]):
            pixels[x, y] = (255, 255, 255, 0)
            
            for dx, dy in [(0,1), (1,0), (0,-1), (-1,0)]:
                nx, ny = x+dx, y+dy
                if 0 <= nx < width and 0 <= ny < height:
                    if (nx, ny) not in visited:
                        visited.add((nx, ny))
                        queue.append((nx, ny))

    img.save(out_path, 'PNG')
    print('Converted avatar-3d.png to transparent PNG using Flood Fill')
except Exception as e:
    print('Error:', e)

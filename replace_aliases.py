import os

def process_file(filepath):
    # calculate depth from src
    rel_path = os.path.relpath(filepath, 'c:/Users/Indiamart/OneDrive/Desktop/GITHUB/portfolio/src')
    depth = rel_path.count(os.sep)
    
    prefix = './' if depth == 0 else '../' * depth
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if '@/' in content:
        new_content = content.replace('@/', prefix)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

src_dir = 'c:/Users/Indiamart/OneDrive/Desktop/GITHUB/portfolio/src'
for root, _, files in os.walk(src_dir):
    for f in files:
        if f.endswith('.tsx') or f.endswith('.ts'):
            process_file(os.path.join(root, f))

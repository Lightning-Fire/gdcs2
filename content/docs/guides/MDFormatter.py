# This is a script that updates the style of the .md files used in the guides.
# TODO:
# Add relative links to other guide pages
# Implement editor button emotes (e.g., replace ":ZoomIn:" with the actual zoom in button)

import os
import re
import glob
import json
import copy
import markdown # type: ignore

def format_media(lines):
    i = 0
    isChanged = False
    relines = []

    for img1 in range(len(lines)):
        html = lines[img1]

        # replace embed gdrive link with shortcode
        html2 = re.sub(r'<div ?(style="width: fit-content; height: fit-content")?><iframe src=https://drive.google.com/file/d/', '{{< img src="https://lh3.googleusercontent.com/d/', html)
        html2 = re.sub(r'(/pre)?view(\?usp=drivesdk)?></iframe></div>', '" >}}', html2)

        # replace plaintext gdrive link with shortcode
        html2 = re.sub(r'https://drive.google.com/file/d/', '{{< img src="https://lh3.googleusercontent.com/d/', html)
        html2 = re.sub(r'(?<=googleusercontent.com/d/[a-zA-Z0-9\-\_]{33})/(pre)?view\?usp=(drive_link|sharing)', '" >}} \n', html2)
        html2 = re.sub(r'(?<=googleusercontent.com/d/[a-zA-Z0-9\-\_]{33})\s?\n', '" >}} \n', html2)

        # add extra 0 to all weights
        # html2 = re.sub(r'(?<=weight: [0-9]{3})', '0', html2)

        html2 = re.sub(r'> • ', '- ', html2)

        # replace incorrect number formatting
        html2 = re.sub(r'\*\*(?=[0-9]+:)', '# ', html2)
        # html2 = re.sub(r'- \*\*(?=[0-9]+:)', '## ', html2)
        # html2 = re.sub(r'(?<=\*\*)\*\*\n', '\n', html2)

        # replace plaintext youtube links with shortcode
        html2 = re.sub(r'(?<=.be/[a-zA-Z0-9\-\_]{11})\W', ' >}} ', html2)
        html2 = re.sub(r'^((?:https?:)?//)?((?:www|m)\.)?((?:youtube(?:-nocookie)?\.com|youtu.be))(/(?:[\w\-]+\?v=|embed/|live/|v/)?)', '{{< youtube ', html2)
        html2 = re.sub(r'(?<={{< youtube [a-zA-Z0-9\-\_]{11}")\W(?! >}})', ' >}} ', html2)

        # replace any bugs
        html2 = re.sub(r'( >}}){2,}', ' >}} ', html2)
        html2 = re.sub(r'(?<=.) {2,}', ' ', html2)

        if (html2 != html):
            isChanged = True

        relines.append(html2)

    return {'values': relines, 'changed': isChanged}

def reformat_md(input_file_path, output_md_path):
    # Detect when another md file is named (just traverse the list of files for names)
    # and create relative links to other files

    # Clean up any weird characters / artifacts as well

    print(f"--- Starting format check for file: {input_file_path} ---")
    try:
        guide = re.sub(".md", "", input_file_path)
        folder = re.search(r".+\\", guide).group(0)
        folder = re.sub(r"\\", "", folder)

        guide = re.sub(r".+\\", "", guide)

        f = open(input_file_path, "r", encoding="utf-8")
        lines = f.readlines()

        # newlines = format_yt(lines)
        # newlines = reformat_tldr(newlines)
        newlines = format_media(lines)
        # newlines = fix_empty_spaces(newlines)
        # newlines = make_frontmatter(newlines, guide, json, folder)

        if newlines['changed'] == True:
            content = ''.join(newlines['values'])

            final_content = content

            with open(output_md_path, "w", encoding='utf-8') as outfile:
                    outfile.write(final_content)

            print(f"--- Successfully converted '{input_file_path}'. Output saved to '{output_md_path}'. ---")
        else:
            print(f"--- Skipped '{input_file_path}' as nothing changed in the file. ---")
    
    except FileNotFoundError as f:
        print(f"Error: The file '{input_file_path}' was not found. Please check the file path.")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
    
    return

if __name__ == "__main__":

    # everything else

    abspath = os.path.abspath(__file__)
    dname = os.path.dirname(abspath)
    os.chdir(dname)

    print(os.getcwd())

    # if a md file exists, find it and start converting

    # glob.glob("*.csv") + 
    convGuides = glob.glob("**/*.md", recursive=True)
    # print(convGuides)

    if (len(convGuides) == 0):
        print("No md files found")
    else:
        print("Md files found - converting")

    for guide in convGuides:
        if guide.find("clean.md") > -1: continue
        if guide.find("_index.md") > -1: continue

        newGuide = guide
        # newGuide = re.sub(r"(?<!clean)\.md", '_clean.md', guide)
        # use above if you want it to be non-destructive

        # print(guide)
        # print(newGuide)

        reformat_md(guide, newGuide)

[[How to do timelapse micrography]]

If you do not have access to adobe after effects, using python is a suitable alternative. The disadvantage here is that you need to manipulate code to get the text the way you want it on the video. However, it is easier to use in my opinion once you have figured out how to run python scripts.

The default text color is white. The default text location is in the upper left corner. You can edit the text font, color, and location within the script if desired.

```bash
conda install mamba
mamba create -n timelapse opencv michael_wild::opencv-contrib numpy tqdm
conda activate timelapse
```

```python
import cv2
import numpy as np
from PIL import Image, ImageDraw, ImageFont
import sys
from tqdm import tqdm

  
def overlay_timecode_on_video(video_fps, frame_interval, input_filename, output_filename, font_path='Arial.ttf'):

# Open the video file

cap = cv2.VideoCapture(input_filename)

# Get the width and height of the frames

width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))

height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))

size = (width, height)

# Get the total number of frames

total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

# Create the video writer with X264 codec for better compression

out = cv2.VideoWriter(output_filename, cv2.VideoWriter_fourcc(*'X264'), video_fps, size)

# Load font for timecode

font = ImageFont.truetype(font_path, 48)

frame_count = 0

# Initialize the progress bar

with tqdm(total=total_frames, desc="Processing Frames") as pbar:

while cap.isOpened():

ret, frame = cap.read()

if not ret:

break

# Calculate the elapsed time in seconds

elapsed_time = frame_count * frame_interval

# Convert the elapsed time to a timecode string with days, hours, and minutes

days = int(elapsed_time / 86400)

hours = int((elapsed_time % 86400) / 3600)

minutes = int((elapsed_time % 3600) / 60)

timecode = f"{days}d\n{hours}h\n{minutes}m"

# Convert the frame to PIL image

img = Image.fromarray(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))

draw = ImageDraw.Draw(img)

# Draw the timecode on the image

# Change the fill value to change the color of the text

# (10, 10) is the upper left corner of the video

draw.text((10, 10), timecode, font=font, fill=(255, 255, 255))

# Convert the image back to OpenCV format and write to video

img_cv = cv2.cvtColor(np.array(img), cv2.COLOR_RGB2BGR)

out.write(img_cv)

frame_count += 1

# Update the progress bar

pbar.update(1)

cap.release()

out.release()

print("Video with timecode overlay created successfully.")

  

if __name__ == "__main__":

if len(sys.argv) != 5:

print("Usage: python script.py <video_fps> <frame_interval> <input_filename> <output_filename>")

sys.exit(1)

video_fps = float(sys.argv[1])

frame_interval = float(sys.argv[2])

input_filename = sys.argv[3]

output_filename = sys.argv[4]

overlay_timecode_on_video(video_fps, frame_interval, input_filename, output_filename)
```

Use case:

```bash
python timelapse.py 30 15 input.mp4 output_with_timecode.mp4
```
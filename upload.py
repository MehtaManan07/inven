import subprocess
import re

# Execute the gdrive upload command
result = subprocess.run(
    ["gdrive", "files", "upload", "android/app/build/outputs/apk/release/app-release.apk"], capture_output=True, text=True
)

# Extract the ViewUrl from the output
output = result.stdout
url_match = re.search(
    r"ViewUrl:\s(https:\/\/drive\.google\.com\/file\/d\/[A-Za-z0-9_-]+\/view\?usp=drivesdk)",
    output,
)

if url_match:
    file_url = url_match.group(1)
    print(f"File URL: {file_url}")
else:
    print("ViewUrl not found in the output.")

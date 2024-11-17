# Video Markdown & Thumbnail Tool
> ⚠️ **TOOL FOR ADMINISTRATORS**
> 
> This tool is designed for administrators to create and manage video information in Markdown format (*.md) and to download thumbnail images from YouTube.

## Add New Videos
1. Fill out the form with the desired information.
2. Download the files:
	- Click the download button to get the Markdown file.
	- Right-click on the thumbnail and select "Save Image As..."
3. Update your local Git repository.
4. Copy the files into the desired folder (e.g., `videos/_clips`) of your local project.
5. Commit and push the changes.

## Form notes
- The name of the files follows the `YYYY-MM-DD-slugified-title` format.
- The `datePublished` value is automatically copied to the `dateUpdated` field.
- The YouTube link is used to extract the video ID and display the correct thumbnail (eg. `https://img.youtube.com/vi/y-ISDmhrclQ/maxresdefault.jpg`).
- The quick tags buttons allow you to add tags to the field; the list of available tags can be edited [here](../vhelper.html#L390).

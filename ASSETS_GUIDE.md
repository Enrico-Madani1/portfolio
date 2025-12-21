# Portfolio Assets Management Guide

This guide explains how to add and manage your own images, PDFs, and other files in your portfolio.

## Folder Structure

Create the following folders in your project's `public` directory:

```
public/
├── images/
│   ├── headshot.jpg              # Your profile photo
│   ├── award-photo.jpg           # Award ceremony photos
│   └── projects/                 # Project images
│       ├── ai-chatbot.jpg
│       ├── selective-dp.jpg
│       └── ...
├── papers/
│   ├── selective-dp-sgd.pdf      # Research papers
│   ├── ai-collaborator.pdf
│   ├── missing-middle-housing.pdf
│   └── ...
├── posters/
│   ├── selective-dp-poster.pdf   # Research posters (PDF)
│   ├── selective-dp-poster.png   # Poster images (PNG/JPG)
│   └── ai-chatbot-poster.png
└── videos/
    └── demos/                    # Optional: local video files
```

## How to Add Files

### Step 1: Create the Public Folder Structure

If you don't have a `public` folder yet, create it at the root of your project:

```bash
# In your terminal
mkdir -p public/images/projects
mkdir -p public/papers
mkdir -p public/posters
mkdir -p public/videos/demos
```

### Step 2: Add Your Files

Simply drag and drop your files into the appropriate folders:

**Images:**
- Headshot → `public/images/headshot.jpg`
- Award photo → `public/images/award-photo.jpg`
- Project images → `public/images/projects/project-name.jpg`

**PDFs:**
- Research papers → `public/papers/paper-name.pdf`
- Posters → `public/posters/poster-name.pdf`

**Posters (as images):**
- High-res poster images → `public/posters/poster-name.png`

### Step 3: Reference Files in Your Code

Files in the `public` folder can be referenced directly by their path:

```typescript
// In your components:
image: "/images/headshot.jpg"
posterImage: "/posters/selective-dp-poster.png"
paperUrl: "/papers/selective-dp-sgd.pdf"
```

## File Naming Best Practices

1. **Use lowercase with hyphens** (kebab-case):
   - ✅ `selective-dp-sgd.pdf`
   - ❌ `Selective DP SGD.pdf`

2. **Be descriptive but concise**:
   - ✅ `ai-chatbot-poster.png`
   - ❌ `poster1.png`

3. **Use appropriate extensions**:
   - Photos: `.jpg` or `.png`
   - Documents: `.pdf`
   - Videos: `.mp4` or `.webm`

## Example: Adding the Selective DP Project Assets

1. **Add poster image:**
   - Save file as `public/posters/selective-dp-poster.png`
   - Update in `projects.ts`: `posterImage: "/posters/selective-dp-poster.png"`

2. **Add research paper:**
   - Save file as `public/papers/selective-dp-sgd.pdf`
   - Update in `projects.ts`: `paperUrl: "/papers/selective-dp-sgd.pdf"`

3. **Add award photo:**
   - Save file as `public/images/award-photo.jpg`
   - Use in AboutSection or as project image

## Current Asset Configuration

The portfolio is currently configured to use:

### Images:
- **Headshot**: `/images/headshot.jpg`
- **Award Photo**: `/images/award-photo.jpg`

### Projects:
See `/src/app/data/projects.ts` for all project asset references.

Each project can have:
- `image`: Main project image
- `posterImage`: Research poster as image
- `posterUrl`: Link to poster PDF
- `paperUrl`: Link to research paper PDF
- `youtubeUrl`: YouTube video link
- `githubUrl`: GitHub repository link

## Tips

1. **Optimize images** before uploading:
   - Compress JPGs to reduce file size
   - Keep reasonable dimensions (max 2000px width)
   - Use JPG for photos, PNG for graphics with text

2. **Keep PDFs manageable**:
   - Compress PDFs if they're very large
   - Aim for under 10MB per file

3. **Organize by project**:
   - Create subfolders in `images/projects/` for each major project
   - Keep related assets together

## Troubleshooting

**File not loading?**
- Check the file path matches exactly (case-sensitive)
- Verify file is in the `public` folder
- Check browser console for 404 errors

**Image too large?**
- Compress the image
- Reduce dimensions
- Convert to appropriate format (JPG for photos)

---

Remember: Any file in the `public` folder is accessible at `yoursite.com/filename.ext`

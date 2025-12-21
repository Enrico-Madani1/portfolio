# How to Add Your Own Images and PDFs

This guide shows you how to add your own images, PDFs, and other files to your portfolio for easy deployment.

## Quick Start

### 1. Create the Public Folder Structure

When you export/deploy this portfolio, create these folders:

```
public/
├── images/
│   ├── headshot.jpg
│   ├── award-photo.jpg
│   └── projects/
├── papers/
│   ├── selective-dp-sgd.pdf
│   └── ai-collaborator-paper.pdf
├── posters/
│   ├── selective-dp-poster.png
│   └── selective-dp-poster.pdf
└── cv/
    └── Enrico_Madani_CV.pdf
```

### 2. Add Your Files

Simply copy your files into the appropriate folders:
- **Photos** → `public/images/`
- **Research Papers** → `public/papers/`
- **Posters** → `public/posters/`
- **CV/Resume** → `public/cv/`

### 3. Update File References

In your code, reference files using their public path:

```typescript
// Example in projects.ts
posterImage: "/posters/selective-dp-poster.png"
paperUrl: "/papers/selective-dp-sgd.pdf"
```

## Current Image Setup

Right now, your portfolio uses these images:

1. **Headshot** - Used in HeroSection
   - Current: figma:asset (temporary)
   - Future: `/images/headshot.jpg`

2. **Award Photo** - Used in AboutSection
   - Current: figma:asset (temporary)
   - Future: `/images/award-photo.jpg`

3. **Project Posters** - Used in ProjectDetail pages
   - Current: figma:asset (temporary)
   - Future: `/posters/project-name.png`

## Migration Steps (When You Deploy)

### Step 1: Export Your Images

1. Save your headshot as `headshot.jpg`
2. Save your award photo as `award-photo.jpg`
3. Save project posters with descriptive names like `selective-dp-poster.png`

### Step 2: Create Public Folder

In your deployed project:

```bash
mkdir -p public/images/projects
mkdir -p public/papers
mkdir -p public/posters
mkdir -p public/cv
```

### Step 3: Copy Files

```bash
# Copy headshot
cp /path/to/headshot.jpg public/images/

# Copy award photo
cp /path/to/award-photo.jpg public/images/

# Copy papers
cp /path/to/selective-dp-sgd.pdf public/papers/

# Copy posters
cp /path/to/selective-dp-poster.png public/posters/
```

### Step 4: Update Code References

Replace the `figma:asset` imports with public paths:

**HeroSection.tsx:**
```typescript
// Change from:
import headshotImage from "figma:asset/...";

// To:
const headshotImage = "/images/headshot.jpg";

// Or use direct path in JSX:
<img src="/images/headshot.jpg" alt="Enrico Madani" />
```

**AboutSection.tsx:**
```typescript
// Change from:
import awardPhotoImage from "figma:asset/...";

// To:
const awardPhotoImage = "/images/award-photo.jpg";
```

**projects.ts:**
```typescript
// Change from:
posterImage: "figma:asset/..."

// To:
posterImage: "/posters/selective-dp-poster.png"
paperUrl: "/papers/selective-dp-sgd.pdf"
```

## File Naming Conventions

Use these naming patterns for consistency:

### Images:
- `headshot.jpg` - Your profile photo
- `award-photo.jpg` - Award ceremony photo
- `project-name-main.jpg` - Main project image

### Papers (PDFs):
- `project-name-paper.pdf` - Research paper
- `project-name-supplemental.pdf` - Supplemental materials

### Posters:
- `project-name-poster.png` - High-res poster image
- `project-name-poster.pdf` - Poster as PDF

### CV:
- `Enrico_Madani_CV.pdf` - Your CV/resume

## Example: Complete Setup for Selective DP Project

```
public/
├── images/
│   └── projects/
│       └── selective-dp-main.jpg
├── papers/
│   └── selective-dp-sgd.pdf
└── posters/
    ├── selective-dp-poster.png  (for web display)
    └── selective-dp-poster.pdf  (for download)
```

In `projects.ts`:
```typescript
{
  id: "selective-dp-sgd",
  title: "Selective Differential Privacy for Fair ML",
  image: "/images/projects/selective-dp-main.jpg",
  posterImage: "/posters/selective-dp-poster.png",
  posterUrl: "/posters/selective-dp-poster.pdf",
  paperUrl: "/papers/selective-dp-sgd.pdf",
  // ... other fields
}
```

## Adding New Projects

When you add a new project:

1. **Add images:**
   ```bash
   cp project-image.jpg public/images/projects/
   ```

2. **Add documents:**
   ```bash
   cp project-paper.pdf public/papers/
   cp project-poster.png public/posters/
   ```

3. **Update projects.ts:**
   ```typescript
   {
     id: "new-project",
     image: "/images/projects/project-image.jpg",
     posterImage: "/posters/project-poster.png",
     paperUrl: "/papers/project-paper.pdf",
     // ...
   }
   ```

## Tips

### Image Optimization
- Compress JPGs before uploading
- Keep file sizes under 500KB for web images
- Use appropriate dimensions (max 2000px width)

### PDF Optimization
- Keep PDFs under 10MB
- Use compressed/web-optimized PDFs
- Consider providing both high-res and web versions

### Organization
- Use consistent naming across all files
- Keep related files together
- Document what each file is for

### Version Control
- Don't commit large files to git (use .gitignore)
- Consider using Git LFS for large PDFs
- Keep originals backed up separately

## Testing

After adding files, test that they load:

1. Open your site locally
2. Check browser console for 404 errors
3. Test all download links
4. Verify images display correctly

## Common Issues

**Image not displaying?**
- Check file path is correct (case-sensitive!)
- Verify file is in `public` folder
- Check file extension matches (.jpg vs .jpeg)

**PDF not downloading?**
- Ensure file exists in `public/papers` or `public/posters`
- Check link href matches exact filename
- Test direct URL: `yoursite.com/papers/filename.pdf`

---

Remember: The `public` folder is served directly. Any file in `public/example.pdf` 
is accessible at `yoursite.com/example.pdf`

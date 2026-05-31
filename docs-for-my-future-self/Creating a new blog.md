Wake up.

Run:
```bash
touch content/blogs/my-new-post.mdx
mkdir public/blog-assets/my-new-post
```
to create a new blog post at `prakhartri.me/blog/my-new-post`

Add all your screenshots or whatever visual assets for the blog in `public/blog-assets/my-new-post/`

### Frontmatter

```yaml
title: "How I Built X"
date: "2026-06-01"
excerpt: "A deep dive into the architecture."
coverImage: "/blog-assets/my-new-post/-cover.png"
tags: ["Next.js", "Architecture"]
```

- `coverImage` path starts with `/blog-assets/` and not `/public/`

### Inline Images
use this syntax: `![alt text](/blog-assets/my-new-post/image.png)`

### Videos
host them to cloudinary and get a link.
then add:
```html
<video controls className="w-full rounded-xl border border-gray-800 my-8">
  <source src="https://res.cloudinary.com/your-cloud-name/video/upload/v12345/my-video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```
write standard markdown for everything else

### Publish
test once with `npm run dev`

then publish with 
```bash
git add .
git commit -m "added my-new-post"
git push
```

Go back to sleep. 
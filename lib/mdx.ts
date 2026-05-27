import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content/blogs');

export interface BlogPostMeta {
  title: string;
  date: string; // ISO format or any parsable date
  excerpt: string;
  tags: string[];
  slug: string;
  coverImage?: string;
}

export function getPostBySlug(slug: string) {
  const decodedSlug = decodeURIComponent(slug);
  const fullPath = path.join(contentDir, `${decodedSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    meta: { ...data, slug } as BlogPostMeta,
    content,
  };
}

export function getAllPostsMeta(): BlogPostMeta[] {
  if (!fs.existsSync(contentDir)) return [];
  
  const files = fs.readdirSync(contentDir);
  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const fullPath = path.join(contentDir, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      return { ...data, slug } as BlogPostMeta;
    });

  // Filter out posts with future dates
  const now = new Date().getTime();
  const filteredPosts = posts.filter((post) => {
    const postDate = new Date(post.date).getTime();
    return postDate <= now;
  });

  // Sort by date descending (newest first)
  return filteredPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

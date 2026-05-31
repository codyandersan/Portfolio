import { getPostBySlug, getAllPostsMeta } from '@/lib/mdx';
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import Image from 'next/image';
import Link from 'next/link';
import Pre from '@/components/mdx/Pre';
import BackToTop from '@/components/BackToTop';

export async function generateStaticParams() {
  const posts = getAllPostsMeta();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const { meta } = getPostBySlug(resolvedParams.slug);

  if (!meta) return {};

  return { 
    title: `${meta.title} | Prakhar Aditya Tripathi`, 
    description: meta.excerpt,
    openGraph: {
      title: meta.title,
      description: meta.excerpt,
      type: 'article',
      url: `/blog/${resolvedParams.slug}`,
      images: [
        {
          url: meta.coverImage || '/og.png',
          width: 1200,
          height: 630,
          alt: meta.title,
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.excerpt,
      images: meta.coverImage ? [meta.coverImage] : ['/og.png'],
    }
  };
}

// Custom MDX components
const mdxComponents = {
  Image,
  pre: Pre,
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { meta, content } = getPostBySlug(resolvedParams.slug);

  const prettyCodeOptions = {
    theme: 'github-dark-dimmed',
    keepBackground: false,
  };

  return (
    <div id="top" className="min-h-screen bg-black text-gray-300 p-8 pt-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="text-sky-400 hover:underline mb-8 inline-flex items-center gap-2">
          &larr; Back to Blog
        </Link>
        
        <header className="mb-12 border-b border-gray-800 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {meta.title}
          </h1>
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
              <time dateTime={meta.date}>
                {new Date(meta.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>&bull;</span>
              <span>{meta.readingTime} min read</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {meta.tags?.map((tag) => (
                <span key={tag} className="bg-gray-900 border border-gray-800 text-sky-400 px-3 py-1 rounded-full text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Global style to force pretty-code background to #0D1117 as requested */}
        <style dangerouslySetInnerHTML={{ __html: `
          pre[data-rehype-pretty-code-figure] {
            background-color: #0D1117 !important;
            padding: 1.5rem;
            border-radius: 0.75rem;
            overflow-x: auto;
            border: 1px solid #1f2937;
          }
          code[data-line-numbers] {
            counter-reset: line;
          }
          code[data-line-numbers] > [data-line]::before {
            counter-increment: line;
            content: counter(line);
            display: inline-block;
            width: 1rem;
            margin-right: 1.5rem;
            text-align: right;
            color: #6b7280;
          }
        `}} />

        <article className="prose prose-invert prose-headings:text-white prose-p:text-gray-300 prose-a:text-sky-400 max-w-none prose-pre:bg-[#0D1117] prose-pre:m-0 prose-pre:rounded-xl [&_pre]:px-4 [&_pre]:py-4 [&_code]:block [&_code]:w-fit [&_code]:min-w-full [&_code]:pr-4">
          <MDXRemote
            source={content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                rehypePlugins: [[rehypePrettyCode, prettyCodeOptions] as any],
              },
            }}
          />
        </article>
      </div>
      
      <BackToTop />
    </div>
  );
}

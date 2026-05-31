import Link from 'next/link';
import Image from 'next/image';
import { getAllPostsMeta } from '@/lib/mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Prakhar Aditya Tripathi',
  description: 'Collection of tech write-ups and random things I learn along the way.',
  openGraph: {
    title: 'Blog | Prakhar Aditya Tripathi',
    description: 'Collection of tech write-ups and random things I learn along the way.',
    url: '/blog',
    siteName: 'Prakhar Aditya Tripathi',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function BlogFeed() {
  const posts = getAllPostsMeta();

  return (
    <div className="min-h-screen bg-black text-gray-300 p-8 pt-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white mb-2">Blog</h1>
          <p className="text-gray-400 text-base sm:text-lg mb-6">Collection of tech write-ups and random things I learn along the way.</p>
          <hr className="border-gray-800/60" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="relative group flex flex-col border border-gray-800 bg-[#050505] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-4px_rgba(56,189,248,0.1)] hover:border-gray-700">
              {post.coverImage ? (
                <div className="relative w-full aspect-video">
                  <Image src={post.coverImage} alt={post.title} fill className="w-full object-cover rounded-t-2xl" priority />
                </div>
              ) : (
                <div className="w-full aspect-video bg-[#0D1117] rounded-t-2xl flex-shrink-0" />
              )}
              
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-white mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-sky-400 transition-colors before:absolute before:inset-0">
                    {post.title}
                  </Link>
                </h2>
                
                <div className="text-xs text-gray-400 mb-3">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                
                <p className="mb-4 text-sm leading-relaxed text-gray-300 line-clamp-2">{post.excerpt}</p>
                
                <div className="flex gap-2 flex-wrap mt-auto">
                  {post.tags?.map((tag) => (
                    <span key={tag} className="relative z-10 text-[10px] sm:text-xs bg-gray-900 border border-gray-800 text-sky-400 px-2.5 py-1 rounded-full font-medium hover:bg-gray-800 hover:text-sky-300 transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
          {posts.length === 0 && (
            <p className="text-gray-400">No blog posts found.</p>
          )}
        </div>
        
        <div className="mt-16 flex items-center italic justify-center gap-3">
          <span className="text-gray-400 font-medium">More soon!</span>
        </div>
      </div>
    </div>
  );
}
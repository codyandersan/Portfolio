import Link from 'next/link';
import Image from 'next/image';
import { getAllPostsMeta } from '@/lib/mdx';

export const metadata = {
  title: 'Blog',
  description: 'Read the latest blog posts.',
};

export default function BlogFeed() {
  const posts = getAllPostsMeta();

  return (
    <div className="min-h-screen bg-black text-gray-300 p-8 pt-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-10">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="relative group flex flex-col border border-gray-800 hover:border-gray-700 bg-[#050505] transition-colors rounded-2xl overflow-hidden">
              {post.coverImage ? (
                <div className="relative w-full h-32 sm:h-40">
                  <Image src={post.coverImage} alt={post.title} fill className="w-full object-cover rounded-t-2xl" priority />
                </div>
              ) : (
                <div className="w-full h-32 sm:h-40 bg-[#0D1117] rounded-t-2xl flex-shrink-0" />
              )}
              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-white mb-3">
                  <Link href={`/blog/${post.slug}`} className="hover:text-sky-400 transition-colors before:absolute before:inset-0">
                    {post.title}
                  </Link>
                </h2>
                <div className="text-sm text-gray-400 mb-5">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                <p className="mb-6 leading-relaxed text-gray-300 line-clamp-2">{post.excerpt}</p>
                <div className="flex gap-2 flex-wrap mt-auto">
                  {post.tags?.map((tag) => (
                    <span key={tag} className="relative z-10 text-xs bg-gray-900 border border-gray-800 text-sky-400 px-3 py-1.5 rounded-full font-medium">
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
        
        <div className="mt-16 mb-8 flex items-center justify-center gap-3">
          <span className="text-gray-400 font-medium">More soon!</span>
        </div>
      </div>
    </div>
  );
}

// src/app/blog/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDays, Clock, Tag, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/lib/data/blog';
import JsonLd, { breadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Property Insights & Guides – Mashobra, Shimla Real Estate Blog',
  description:
    'Read expert property guides, buying tips and location insights for Mashobra, Shimla and Himachal Pradesh real estate. Informed property decisions start here.',
  alternates: { canonical: 'https://mashobrashimla.com/blog' },
};

const categories = ['All', 'Property Guide', 'Legal & Documentation', 'Market Analysis', "Buyer's Guide", 'Location Guide'];

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: 'https://mashobrashimla.com' },
        { name: 'Blog', url: 'https://mashobrashimla.com/blog' },
      ])} />

      <div className="bg-[#1E3A5F] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-4">
            <nav className="flex items-center gap-1 text-sm text-white/60">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span className="text-white">Blog</span>
            </nav>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
            Property Insights &amp; Guides
          </h1>
          <p className="text-white/70 mt-2">
            Expert property guides, buying tips and location insights for Mashobra, Shimla and Himachal Pradesh.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white border-b border-[#E2E8F0] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button key={cat} className="flex-shrink-0 px-4 py-1.5 border border-[#E2E8F0] rounded-full text-sm text-[#172033] hover:bg-[#1E3A5F] hover:text-white hover:border-[#1E3A5F] transition-colors">
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-12 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Featured Post */}
          <Link href={`/blog/${featured.slug}`} className="group block bg-white rounded-xl border border-[#E2E8F0] overflow-hidden hover:shadow-lg transition-shadow mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative aspect-[16/9] lg:aspect-auto">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <span className="absolute top-4 left-4 bg-[#E07A2F] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Featured
                </span>
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <span className="flex items-center gap-1.5 text-xs text-[#E07A2F] font-medium mb-2">
                  <Tag size={12} />{featured.category}
                </span>
                <h2 className="font-bold text-[#172033] text-xl sm:text-2xl mb-3 group-hover:text-[#1E3A5F] transition-colors" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                  {featured.title}
                </h2>
                <p className="text-[#64748B] text-sm leading-relaxed mb-5">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-[#64748B] mb-5">
                  <span className="flex items-center gap-1.5"><CalendarDays size={12} />{featured.publishedAt}</span>
                  <span className="flex items-center gap-1.5"><Clock size={12} />{featured.readTime}</span>
                </div>
                <span className="flex items-center gap-1.5 text-[#1E3A5F] font-semibold text-sm">
                  Read Article <ArrowRight size={15} />
                </span>
              </div>
            </div>
          </Link>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group bg-white rounded-xl border border-[#E2E8F0] overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs text-[#E07A2F] font-medium">{post.category}</span>
                  <h3 className="font-semibold text-[#172033] mt-1 mb-2 line-clamp-2 group-hover:text-[#1E3A5F] transition-colors" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                    {post.title}
                  </h3>
                  <p className="text-xs text-[#64748B] line-clamp-2 mb-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-[#64748B]">
                    <span className="flex items-center gap-1"><CalendarDays size={11} />{post.publishedAt}</span>
                    <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


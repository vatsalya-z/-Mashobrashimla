// src/app/blog/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, Clock, Tag, ArrowRight, Share2 } from 'lucide-react';
import { blogPosts, getBlogBySlug, getRelatedBlogs } from '@/lib/data/blog';
import EnquiryForm from '@/components/forms/EnquiryForm';
import JsonLd, { breadcrumbSchema, articleSchema, faqSchema } from '@/components/seo/JsonLd';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.seoTitle || `${post.title} | The Ridge Mashobra Blog`,
    description: post.seoDescription || post.excerpt,
    alternates: { canonical: `https://mashobrashimla.com/blog/${slug}` },
    openGraph: {
      type: 'article',
      images: [{ url: `https://mashobrashimla.com${post.image}` }],
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const related = getRelatedBlogs(slug, post.tags);

  // Render markdown-like content
  function renderContent(content: string) {
    const lines = content.split('\n');
    return lines.map((line, i) => {
      if (line.startsWith('## ')) return <h2 key={i} className="text-xl font-bold text-[#172033] mt-8 mb-3" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>{line.replace('## ', '')}</h2>;
      if (line.startsWith('### ')) return <h3 key={i} className="text-lg font-semibold text-[#172033] mt-6 mb-2">{line.replace('### ', '')}</h3>;
      if (line.startsWith('**') && line.endsWith('**')) return <p key={i} className="font-semibold text-[#172033] mt-3">{line.replace(/\*\*/g, '')}</p>;
      if (line.startsWith('- ')) return <li key={i} className="ml-4 text-[#64748B] text-sm leading-relaxed list-disc">{line.replace('- ', '')}</li>;
      if (line.match(/^\d+\. /)) return <li key={i} className="ml-4 text-[#64748B] text-sm leading-relaxed list-decimal">{line.replace(/^\d+\. /, '')}</li>;
      if (line.startsWith('*') && line.endsWith('*')) return <p key={i} className="text-sm text-[#64748B] italic border-l-4 border-[#E07A2F] pl-4 my-4">{line.replace(/\*/g, '')}</p>;
      if (line.trim() === '') return <div key={i} className="h-2" />;
      return <p key={i} className="text-[#64748B] leading-relaxed text-sm">{line}</p>;
    });
  }

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: 'https://mashobrashimla.com' },
            { name: 'Blog', url: 'https://mashobrashimla.com/blog' },
            { name: post.title, url: `https://mashobrashimla.com/blog/${slug}` },
          ]),
          articleSchema({
            title: post.seoTitle || post.title,
            description: post.seoDescription || post.excerpt,
            image: `https://mashobrashimla.com${post.image}`,
            publishedAt: post.publishedAt,
            author: post.author,
            url: `https://mashobrashimla.com/blog/${slug}`,
          }),
          ...(post.faqs ? [faqSchema(post.faqs)] : []),
        ]}
      />

      {/* Hero Image */}
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <Image src={post.image} alt={post.title} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#172033]/70 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Article */}
          <article className="lg:col-span-2">
            {/* Meta */}
            <div className="flex flex-wrap gap-3 items-center text-sm text-[#64748B] mb-4">
              <nav className="flex items-center gap-1 text-xs text-[#64748B]">
                <Link href="/" className="hover:text-[#1E3A5F]">Home</Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-[#1E3A5F]">Blog</Link>
                <span>/</span>
                <span className="text-[#172033]">{post.title}</span>
              </nav>
            </div>

            <div className="flex flex-wrap gap-4 text-xs text-[#64748B] mb-4">
              <span className="flex items-center gap-1.5 text-[#E07A2F] font-medium"><Tag size={12} />{post.category}</span>
              <span className="flex items-center gap-1.5"><CalendarDays size={12} />{post.publishedAt}</span>
              <span className="flex items-center gap-1.5"><Clock size={12} />{post.readTime}</span>
              <span>By {post.author}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-[#172033] mb-6" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
              {post.title}
            </h1>

            {/* Content */}
            <div className="space-y-2 mb-8">
              {renderContent(post.content)}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span key={tag} className="bg-[#F1F5F9] text-[#64748B] text-xs px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* FAQs */}
            {post.faqs && post.faqs.length > 0 && (
              <div className="mb-8">
                <h2 className="font-bold text-[#172033] text-xl mb-4" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {post.faqs.map((faq) => (
                    <div key={faq.question} className="bg-[#F1F5F9] rounded-xl p-5">
                      <h3 className="font-semibold text-[#172033] mb-2 text-sm">{faq.question}</h3>
                      <p className="text-sm text-[#64748B] leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related */}
            {related.length > 0 && (
              <div>
                <h2 className="font-bold text-[#172033] text-xl mb-4" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                  Related Articles
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {related.map((r) => (
                    <Link key={r.id} href={`/blog/${r.slug}`} className="group flex gap-3 bg-[#F1F5F9] rounded-lg p-3 hover:bg-white hover:shadow-sm transition-all">
                      <div className="relative w-16 h-16 rounded overflow-hidden flex-shrink-0">
                        <Image src={r.image} alt={r.title} fill className="object-cover" sizes="64px" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-[#172033] line-clamp-2 group-hover:text-[#1E3A5F] transition-colors">{r.title}</h3>
                        <span className="text-xs text-[#64748B]">{r.readTime}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start space-y-5">
            <div className="bg-white rounded-xl border border-[#E2E8F0] p-6">
              <h3 className="font-bold text-[#172033] mb-4" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                Enquire About Properties
              </h3>
              <EnquiryForm source="blog" compact />
            </div>
            <div className="bg-[#1E3A5F] text-white rounded-xl p-6">
              <h3 className="font-bold mb-3" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>Explore Properties</h3>
              <div className="space-y-2">
                {[
                  { label: 'The Ridge Mashobra', href: '/projects/the-ridge-mashobra' },
                  { label: 'Luxury Villas Mashobra', href: '/luxury-villas-mashobra' },
                  { label: '3 BHK Villas', href: '/3-bhk-villas-mashobra' },
                  { label: '4 BHK Villas', href: '/4-bhk-villas-mashobra' },
                ].map((l) => (
                  <Link key={l.href} href={l.href} className="flex items-center justify-between text-sm text-white/80 hover:text-white py-1 border-b border-white/10 transition-colors">
                    {l.label}<ArrowRight size={12} />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}


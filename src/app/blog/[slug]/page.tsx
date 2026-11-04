// src/app/blog/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaArrowRight, 
  FaCalendarAlt, 
  FaClock, 
  FaUser, 
  FaTag, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaHome,
  FaShieldAlt,
  FaCheckCircle
} from 'react-icons/fa';
import { blogPosts, getBlogBySlug, getRelatedBlogs } from '@/lib/data/blog';
import { locations } from '@/lib/data/locations';
import EnquiryForm from '@/components/forms/EnquiryForm';
import FAQAccordion from '@/components/ui/FAQAccordion';
import EnquireModalButton from '@/components/ui/EnquireModalButton';
import JsonLd, { breadcrumbSchema, articleSchema, faqSchema } from '@/components/seo/JsonLd';
import { FadeInUp } from '@/components/motion/MotionComponents';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: 'Article Not Found' };

  const rawTitle = post.seoTitle || post.title;
  const pageTitle = rawTitle.includes('The Ridge Mashobra') ? rawTitle : `${rawTitle} | The Ridge Mashobra`;

  return {
    title: pageTitle,
    description: post.seoDescription || post.excerpt,
    alternates: { canonical: `https://mashobrashimla.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: `https://mashobrashimla.com${post.image}`, width: 1200, height: 630 }],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const related = getRelatedBlogs(post.slug, post.tags);

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
            title: post.title,
            description: post.excerpt,
            image: `https://mashobrashimla.com${post.image}`,
            publishedAt: post.publishedAt,
            author: post.author,
            url: `https://mashobrashimla.com/blog/${slug}`,
          }),
          ...(post.faqs && post.faqs.length > 0 ? [faqSchema(post.faqs)] : []),
        ]}
      />

      {/* 1. ARTICLE HEADER / HERO */}
      {/* 1. HERO SECTION */}
      <section className="relative w-full bg-[#1E3A5F] text-white py-16 sm:py-20 overflow-hidden">
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
          {/* Breadcrumb */}
          <nav className="inline-flex items-center gap-2 text-xs text-white/70 mb-4 bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-xs">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-[#E07A2F] font-semibold truncate max-w-[200px] sm:max-w-xs">{post.title}</span>
          </nav>

          <div className="mb-3">
            <span className="inline-block bg-[#E07A2F] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
          </div>

          <h1
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight"
            style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
          >
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/80">
            <span className="flex items-center gap-1.5">
              <FaUser className="text-[#E07A2F]" />
              <span>{post.author}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <FaCalendarAlt className="text-[#E07A2F]" />
              <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <FaClock className="text-[#E07A2F]" />
              <span>{post.readTime}</span>
            </span>
          </div>
        </div>
      </section>

      {/* 2. FEATURED IMAGE */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1200px"
          />
        </div>
      </div>

      {/* 3. MAIN CONTENT & SIDEBAR */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            {/* Left Column: Article Body */}
            <article className="lg:col-span-2">
              {/* Excerpt Lead */}
              <div className="bg-[#F8FAFC] border-l-4 border-[#E07A2F] p-4 sm:p-5 rounded-r-xl mb-8">
                <p className="text-base sm:text-lg font-medium text-[#1E3A5F] italic leading-relaxed">
                  &ldquo;{post.excerpt}&rdquo;
                </p>
              </div>

              {/* Formatted Article Body */}
              <div className="prose prose-slate max-w-none text-[#334155] leading-relaxed text-sm sm:text-base space-y-6">
                {post.content.split('\n\n').map((paragraph, index) => {
                  const trimmed = paragraph.trim();
                  // Check if header
                  if (
                    trimmed.length < 90 &&
                    !trimmed.endsWith('.') &&
                    !trimmed.startsWith('-') &&
                    !trimmed.startsWith('1.')
                  ) {
                    return (
                      <h2
                        key={index}
                        className="text-xl sm:text-2xl font-bold text-[#172033] mt-8 mb-3"
                        style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
                      >
                        {trimmed}
                      </h2>
                    );
                  }

                  // Check if bullet point list
                  if (trimmed.startsWith('-') || trimmed.startsWith('1.')) {
                    return (
                      <ul key={index} className="list-disc pl-5 space-y-2 text-[#475569]">
                        {trimmed.split('\n').map((item, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {item.replace(/^[-\d.]\s*/, '')}
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  return (
                    <p key={index} className="text-[#475569] leading-relaxed">
                      {trimmed}
                    </p>
                  );
                })}
              </div>

              

             
            </article>

            {/* Right Column: Sticky Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              {/* Project Spotlight Card */}
              <div className="bg-gradient-to-br from-[#1E3A5F] to-[#152a45] text-white rounded-2xl p-6 shadow-md">
                <span className="text-[#E07A2F] text-xs font-bold uppercase tracking-wider block mb-1">
                  Featured Development
                </span>
                <h4 className="font-bold text-lg text-white mb-2" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                  The Ridge Mashobra
                </h4>
                <p className="text-xs text-white/80 leading-relaxed mb-4">
                  Exclusive 3 &amp; 4 BHK luxury mountain villas nestled in ancient Deodar cedar forests at 2,100 metres elevation.
                </p>
                <Link
                  href="/the-ridge-mashobra"
                  className="inline-flex items-center gap-2 bg-[#E07A2F] hover:bg-[#c96b22] text-white font-bold text-xs px-4 py-2.5 rounded-lg transition-colors w-full justify-center shadow-xs"
                >
                  <span>Explore Project Details</span>
                  <FaArrowRight className="text-[10px]" />
                </Link>
              </div>

              {/* Explore Locations Widget */}
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6">
                <h4 className="font-bold text-[#172033] text-sm mb-3 uppercase tracking-wider" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                  Explore Locations
                </h4>
                <div className="space-y-2.5">
                  {locations.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/locations/${loc.slug}`}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-[#E2E8F0] hover:border-[#1E3A5F] hover:text-[#1E3A5F] text-xs font-semibold text-[#172033] transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-[#E07A2F]" />
                        <span>{loc.name}</span>
                      </span>
                      <span className="text-[11px] text-[#64748B]">{loc.elevation}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Enquiry Box */}
              <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-xs">
                <h4 className="font-bold text-[#172033] text-base mb-1" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                  Interested in Mountain Property?
                </h4>
                <p className="text-xs text-[#64748B] mb-4">
                  Speak with our property consultants to explore villas and residential plots in Mashobra.
                </p>
                <EnquiryForm source={`blog-sidebar-${post.slug}`} compact />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 4. RELATED ARTICLES */}
      {related.length > 0 && (
        <section className="py-14 sm:py-16 bg-[#F1F5F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <FadeInUp>
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-[#E07A2F] text-sm font-semibold uppercase tracking-wider">Keep Reading</span>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-[#172033] mt-2 mb-2"
                  style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
                >
                  Related Articles &amp; Insights
                </h2>
              </div>
            </FadeInUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/blog/${item.slug}`}
                  className="group bg-white rounded-xl border border-[#E2E8F0] overflow-hidden hover:shadow-xl transition-all duration-300 block flex flex-col"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1 justify-between">
                    <div>
                      <span className="text-xs font-semibold text-[#E07A2F]">{item.category}</span>
                      <h3 className="font-semibold text-[#172033] text-sm sm:text-base mt-1 mb-2 line-clamp-2 group-hover:text-[#1E3A5F] transition-colors" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#64748B] line-clamp-2 leading-relaxed">
                        {item.excerpt}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#E2E8F0] flex items-center gap-1.5 text-xs font-semibold text-[#1E3A5F] group-hover:text-[#E07A2F] transition-colors">
                      <span>Read Guide</span>
                      <FaArrowRight className="text-[10px]" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. BOTTOM LEAD CTA */}
      <section className="py-16 lg:py-20 bg-[#1E3A5F] text-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
            >
              Ready to Explore Mountain Living?
            </h2>
            <p className="text-white/80 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Connect with our property specialists for verified project documentation, pricing schedules, and site visit appointments.
            </p>

            {/* Quick Guarantees Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-8 text-white/90 text-xs sm:text-sm">
              <div className="bg-white/10 rounded-xl p-3 flex items-center justify-center gap-2 border border-white/10 backdrop-blur-xs">
                <FaShieldAlt className="text-[#E07A2F] flex-shrink-0" />
                <span>Verified Land Titles</span>
              </div>
              <div className="bg-white/10 rounded-xl p-3 flex items-center justify-center gap-2 border border-white/10 backdrop-blur-xs">
                <FaCheckCircle className="text-[#E07A2F] flex-shrink-0" />
                <span>Personalized Site Visits</span>
              </div>
              <div className="bg-white/10 rounded-xl p-3 flex items-center justify-center gap-2 border border-white/10 backdrop-blur-xs">
                <FaHome className="text-[#E07A2F] flex-shrink-0" />
                <span>Direct Price Transparency</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <EnquireModalButton
                source={`blog-bottom-${post.slug}`}
                title="Enquire About Mountain Properties"
                subtitle="Share your preferred configuration and budget to receive personalized property brochures."
                className="flex items-center gap-2 bg-[#E07A2F] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-[#c96b22] hover:scale-102 transition-all cursor-pointer shadow-lg"
              >
                <span>Enquire Now</span>
                <FaArrowRight className="text-xs" />
              </EnquireModalButton>
              <a
                href="tel:+91"
                className="flex items-center gap-2 border border-white/30 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all backdrop-blur-xs"
              >
                <FaPhoneAlt className="text-xs" />
                <span>Call Our Consultants</span>
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}


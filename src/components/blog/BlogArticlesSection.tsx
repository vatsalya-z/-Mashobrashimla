'use client';

import { useState, useMemo, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CalendarDays, 
  Clock, 
  Tag, 
  ArrowRight, 
  Search, 
  X, 
  Sparkles,
  BookOpen,
  Filter,
  HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { BlogPost } from '@/types';
import { 
  FadeInUp, 
  StaggerContainer, 
  StaggerItem, 
  AnimatedCard 
} from '@/components/motion/MotionComponents';
import EnquireModalButton from '@/components/ui/EnquireModalButton';

interface BlogArticlesSectionProps {
  posts: BlogPost[];
  categories: string[];
}

export default function BlogArticlesSection({
  posts,
  categories,
}: BlogArticlesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Close modal with Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setReadingPost(null);
    }
  }, []);

  // Lock body scroll when in-page reading modal is open
  useEffect(() => {
    if (readingPost) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [readingPost, handleKeyDown]);

  // Calculate article counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: posts.length };
    posts.forEach((post) => {
      counts[post.category] = (counts[post.category] || 0) + 1;
    });
    return counts;
  }, [posts]);

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category.toLowerCase() === selectedCategory.toLowerCase();

      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesSearch =
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        (post.tags && post.tags.some((tag) => tag.toLowerCase().includes(query)));

      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  const isDefaultView = selectedCategory === 'All' && !searchQuery.trim();
  const featuredPost = isDefaultView && filteredPosts.length > 0 ? filteredPosts[0] : null;
  const gridPosts = featuredPost ? filteredPosts.slice(1) : filteredPosts;

  const handleClearFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
  };

  // Formatter for markdown-like text content inside in-page reader
  const renderFormattedContent = (content: string, postTitle: string) => {
    const lines = content.split('\n');
    return lines.map((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) {
        return <div key={i} className="h-3 sm:h-4" />;
      }

      // Skip redundant main heading if it matches post title
      if (
        trimmed.toLowerCase() === postTitle.toLowerCase() ||
        trimmed.toLowerCase().includes(postTitle.toLowerCase().substring(0, 25))
      ) {
        return null;
      }

      if (trimmed.startsWith('## ')) {
        return (
          <h2
            key={i}
            className="text-xl sm:text-2xl font-bold text-[#172033] mt-8 mb-3"
            style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
          >
            {trimmed.replace('## ', '')}
          </h2>
        );
      }
      if (trimmed.startsWith('### ')) {
        return (
          <h3
            key={i}
            className="text-lg sm:text-xl font-bold text-[#172033] mt-6 mb-2.5"
            style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
          >
            {trimmed.replace('### ', '')}
          </h3>
        );
      }
      if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
        return (
          <p key={i} className="font-bold text-[#172033] mt-4 mb-2 text-base">
            {trimmed.replace(/\*\*/g, '')}
          </p>
        );
      }
      if (trimmed.startsWith('- ')) {
        return (
          <li key={i} className="ml-5 text-[#64748B] text-sm sm:text-base leading-relaxed list-disc mb-1.5">
            {trimmed.replace('- ', '')}
          </li>
        );
      }
      if (trimmed.match(/^\d+\. /)) {
        return (
          <li key={i} className="ml-5 text-[#64748B] text-sm sm:text-base leading-relaxed list-decimal mb-1.5">
            {trimmed.replace(/^\d+\. /, '')}
          </li>
        );
      }
      if (trimmed.startsWith('*') && trimmed.endsWith('*')) {
        return (
          <p key={i} className="text-sm sm:text-base text-[#64748B] italic border-l-4 border-[#E07A2F] pl-4 my-4 bg-[#F8FAFC] py-2.5 rounded-r-lg">
            {trimmed.replace(/\*/g, '')}
          </p>
        );
      }

      // Detect standalone short subheadings without punctuation
      if (
        trimmed.length > 3 &&
        trimmed.length < 55 &&
        !trimmed.includes('.') &&
        !trimmed.includes(',') &&
        !trimmed.includes(';') &&
        !trimmed.includes(':') &&
        !trimmed.startsWith('-')
      ) {
        return (
          <h3
            key={i}
            className="text-lg sm:text-xl font-bold text-[#172033] mt-6 mb-2.5"
            style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
          >
            {trimmed}
          </h3>
        );
      }

      return (
        <p key={i} className="text-[#64748B] leading-relaxed text-sm sm:text-base mb-3.5">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <section id="articles-list" className="py-12 sm:py-16 lg:py-24 bg-[#F8FAFC] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">        
        {gridPosts.length > 0 ? (
          <div>
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8">
              {gridPosts.map((post) => (
                <StaggerItem key={post.id} className="h-full">
                  <AnimatedCard className="h-full">
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => setReadingPost(post)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setReadingPost(post);
                        }
                      }}
                      className="group bg-white rounded-xl sm:rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#1E3A5F]/30 transition-all duration-300 block h-full flex flex-col justify-between cursor-pointer"
                    >
                      <div>
                        {/* Thumbnail Image */}
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-slate-100">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          
                          {/* Category Badge Overlay */}
                          <div className="absolute top-2 left-2 sm:top-3.5 sm:left-3.5 z-10">
                            <span className="inline-flex items-center gap-1 text-[9px] sm:text-[11px] font-bold text-white bg-[#172033]/85 backdrop-blur-md px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-white/20 shadow-xs">
                              {post.category}
                            </span>
                          </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-2.5 sm:p-5 lg:p-6">
                          <div className="flex items-center justify-between text-[10px] sm:text-xs text-[#64748B] mb-1.5 sm:mb-2.5">
                            <span className="flex items-center gap-1 sm:gap-1.5">
                              <CalendarDays size={11} className="text-[#E07A2F] flex-shrink-0" />
                              <span className="truncate max-w-[65px] sm:max-w-none">{post.publishedAt}</span>
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={11} className="flex-shrink-0" />
                              <span>{post.readTime}</span>
                            </span>
                          </div>

                          <h4
                            className="font-bold text-[#172033] text-xs sm:text-base lg:text-lg mb-1 sm:mb-2.5 line-clamp-2 group-hover:text-[#1E3A5F] transition-colors leading-snug"
                            style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
                          >
                            {post.title}
                          </h4>

                          <p className="text-[#64748B] text-[11px] sm:text-xs lg:text-sm line-clamp-2 sm:line-clamp-3 leading-snug sm:leading-relaxed mb-2 sm:mb-4">
                            {post.excerpt}
                          </p>
                          
                        </div>
                      </div>

                     
                    </div>
                  </AnimatedCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        ) : (
          /* Empty Search / Filter State */
          <FadeInUp>
            <div className="bg-white rounded-xl sm:rounded-2xl border border-[#E2E8F0] p-8 sm:p-16 text-center max-w-xl mx-auto shadow-sm">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#E07A2F]/10 text-[#E07A2F] flex items-center justify-center mx-auto mb-4">
                <Search size={22} />
              </div>
              <h3
                className="text-lg sm:text-xl font-bold text-[#172033] mb-2"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                No Matching Guides Found
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mb-6 leading-relaxed">
                We couldn&apos;t find any articles matching your search for &ldquo;{searchQuery || selectedCategory}&rdquo;. Try another keyword or browse all categories.
              </p>
              <button
                type="button"
                onClick={handleClearFilters}
                className="inline-flex items-center gap-2 bg-[#1E3A5F] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl hover:bg-[#162d4a] transition-colors cursor-pointer"
              >
                <span>Reset All Filters</span>
              </button>
            </div>
          </FadeInUp>
        )}

      </div>

      {/* ═══════════════════════════════════════════════════════════════
          IN-PAGE FULL ARTICLE READER MODAL (NO REDIRECT, ZERO REFRESH)
      ═══════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {readingPost && (
          <div 
            className="fixed inset-0 z-50 bg-[#172033]/85 backdrop-blur-md flex items-center justify-center p-2.5 sm:p-6 overflow-y-auto"
            onClick={() => setReadingPost(null)}
          >
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white w-full max-w-4xl max-h-[94vh] sm:max-h-[92vh] rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-[#E2E8F0] my-auto"
            >
              {/* Sticky Modal Top Bar */}
              <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md px-4 sm:px-8 py-3 sm:py-4 border-b border-[#E2E8F0] flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap min-w-0">
                  <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs text-[#E07A2F] font-bold bg-[#E07A2F]/10 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-[#E07A2F]/20">
                    <Tag size={11} />
                    {readingPost.category}
                  </span>
                  <span className="hidden sm:inline text-xs text-[#94A3B8]">·</span>
                  <span className="hidden sm:flex items-center gap-1 text-xs text-[#64748B]">
                    <Clock size={12} />
                    {readingPost.readTime}
                  </span>
                  <span className="hidden sm:inline text-xs text-[#94A3B8]">·</span>
                  <span className="hidden sm:flex items-center gap-1 text-xs text-[#64748B]">
                    <CalendarDays size={12} />
                    {readingPost.publishedAt}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setReadingPost(null)}
                    aria-label="Close article"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#172033] hover:text-black flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Scrollable Article Body */}
              <div className="p-4 sm:p-8 lg:p-10 overflow-y-auto flex-1">
                {/* Article Top Image */}
                <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-xl sm:rounded-2xl overflow-hidden mb-5 sm:mb-8 shadow-md">
                  <Image
                    src={readingPost.image}
                    alt={readingPost.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 850px"
                  />
                </div>

                {/* Article Title */}
                <h1
                  className="text-xl sm:text-3xl font-bold text-[#172033] mb-4 leading-snug"
                  style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
                >
                  {readingPost.title}
                </h1>

                {/* Excerpt Lead */}
                <div className="bg-[#F8FAFC] border-l-4 border-[#E07A2F] p-4 rounded-r-xl mb-6">
                  <p className="text-sm sm:text-base font-medium text-[#1E3A5F] italic leading-relaxed">
                    &ldquo;{readingPost.excerpt}&rdquo;
                  </p>
                </div>

                {/* Article Content */}
                <div className="prose prose-slate max-w-none text-[#334155] leading-relaxed text-sm sm:text-base">
                  {renderFormattedContent(readingPost.content, readingPost.title)}
                </div>

                {/* In-Modal Advisory CTA Box */}
                <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#F8FAFC] rounded-xl p-5">
                  <div>
                    <h4 className="font-bold text-[#172033] text-sm sm:text-base" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                      Interested in properties in this area?
                    </h4>
                    <p className="text-xs text-[#64748B] mt-0.5">
                      Connect with our property specialists for verified project brochures and site visits.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <Link
                      href={`/blog/${readingPost.slug}`}
                      className="text-xs text-[#1E3A5F] hover:text-[#E07A2F] font-semibold underline underline-offset-2 flex-shrink-0"
                    >
                      Open Full Page →
                    </Link>
                    <EnquireModalButton
                      source={`blog-modal-${readingPost.slug}`}
                      title={`Enquire: ${readingPost.title}`}
                      className="bg-[#E07A2F] hover:bg-[#c96b22] text-white font-bold text-xs px-5 py-2.5 rounded-lg transition-colors shadow-xs flex-shrink-0 cursor-pointer"
                    >
                      Enquire Now
                    </EnquireModalButton>
                  </div>
                </div>
                
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

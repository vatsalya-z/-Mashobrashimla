import Link from 'next/link';
import { FaHome, FaCompass, FaPhoneAlt } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F8FAFC] px-4 py-20">
      <div className="max-w-xl w-full text-center bg-white rounded-2xl shadow-sm border border-[#E2E8F0] p-8 sm:p-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1E3A5F]/10 text-[#1E3A5F] text-2xl font-bold mb-6">
          404
        </div>
        <h1
          className="text-2xl sm:text-3xl font-extrabold text-[#172033] mb-3"
          style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
        >
          Page Not Found
        </h1>
        <p className="text-[#64748B] text-sm sm:text-base leading-relaxed mb-8">
          The property page or resource you are looking for does not exist or may have been moved. Explore our active property opportunities and verified location guides below.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1E3A5F] text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#162d4a] transition-colors shadow-sm"
          >
            <FaHome className="text-xs" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/properties"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E07A2F] text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#c96b22] transition-colors shadow-sm"
          >
            <FaCompass className="text-xs" />
            <span>Explore Properties</span>
          </Link>
          <Link
            href="/contact-us"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#1E3A5F] font-semibold text-sm px-6 py-3 rounded-xl border border-[#CBD5E1] hover:bg-[#F1F5F9] transition-colors"
          >
            <FaPhoneAlt className="text-xs" />
            <span>Contact Us</span>
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-[#F1F5F9] text-xs text-[#94A3B8]">
          Looking for a specific estate? Call our Mashobra property desk at +91-9999995151.
        </div>
      </div>
    </div>
  );
}


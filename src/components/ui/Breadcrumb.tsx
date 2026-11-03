// src/components/ui/Breadcrumb.tsx
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-[#64748B]">
      <Link href="/" className="hover:text-[#1E3A5F] transition-colors">
        Home
      </Link>
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-1">
          <FaChevronRight className="text-[10px] text-[#94A3B8]" />
          {item.href && index < items.length - 1 ? (
            <Link href={item.href} className="hover:text-[#1E3A5F] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#172033] font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}


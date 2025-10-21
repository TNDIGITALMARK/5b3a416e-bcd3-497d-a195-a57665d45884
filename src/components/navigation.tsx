'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/alerts', label: 'Alerts' },
    { href: '/safety', label: 'Safety Tips' },
  ];

  return (
    <nav className="bg-[hsl(var(--primary))] text-white shadow-md">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">AI Disaster Alert System</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-white/90 ${
                    isActive ? 'text-white border-b-2 border-white pb-1' : 'text-white/80'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

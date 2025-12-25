
"use client"

import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#mentorships', label: 'Mentorships' },
  { href: '#sierra-chart-templates', label: 'Sierra Chart' },
  { href: '#atas-templates', label: 'ATAS' },
  { href: '#mt5-templates', label: 'MT5' },
  { href: '#trading-view', label: 'Trading View' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-border/40 bg-black">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Link href="/#home" onClick={(e) => handleScroll(e, '#home')} className="flex items-center gap-2">
              <Image src="images/dt-logo.jpg" alt="Dark Trader Logo" width={60} height={60} className="h-14 w-auto" />
              <span className="text-xl font-bold text-white">Dark Trader</span>
            </Link>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Dark Trader. All rights reserved.</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm md:justify-start">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={(e) => handleScroll(e, link.href)} className="text-muted-foreground transition-colors hover:text-primary">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

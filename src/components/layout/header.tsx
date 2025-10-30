"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#mentorships', label: 'Mentorships' },
  { href: '#sierra-chart-templates', label: 'Sierra Chart' },
  { href: '#atas-templates', label: 'ATAS' },
  { href: '#mt5-templates', label: 'MT5' },
  { href: '#trading-view', label: 'Trading View'},
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const NavLink = ({ href, label, className }: { href: string; label: string; className?: string; }) => {
    // Single-page sites don't have a concept of an "active" page based on pathname
    // You might want to implement scroll-based active link highlighting in the future
    const isActive = false; 

    return (
      <Link
        href={href}
        onClick={() => setIsOpen(false)}
        className={cn(
          "transition-colors hover:text-primary",
          isActive ? "text-primary font-semibold" : "text-muted-foreground",
          className
        )}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-black/80 backdrop-blur-lg">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/#home" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <Image src="./images/dt-logo.jpg" alt="Dark Trader Logo" width={100} height={100} />
          <span className="text-xl font-bold text-white">Dark Trader</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-black">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                    <Link href="/#home" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                        <Image src="/images/dt-logo.jpg" alt="Dark Trader Logo" width={100} height={100} />
                        <span className="text-xl font-bold text-white">Dark Trader</span>
                    </Link>
                </div>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <NavLink key={link.href} {...link} className="text-lg" />
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

    

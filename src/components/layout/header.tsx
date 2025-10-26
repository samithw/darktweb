
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, TrendingUp, X } from 'lucide-react';
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
          <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYAAAAGACAMAAACN91WyAAADAFBMVEX/////////+/v//f3//v7////+/f/9/f7+/v79/f38/Pz9/f39/f38+/v7+/v7+vr6+fn5+f33+Pj29vf19fX09fXz8/Pz8/Ly8u/x8e/w8PDv7+7u7uzu7e3t7e3t7ers6+rp6unp6efn5+fm5eXl5eXk4+Pk4+Pi4uLh4eHg4ODf39/f3t7e3d3d3d3c29vc2tra2dnZ2NjY19fX19fW1dXV1dXT09PS0tLR0dHQz8/Pz8/Pzs7Ozs3Mzc3LystLS0tKSkpJR0dGRkZFRUVFRENCQkJCQkJAQEA/Pz8+Pj4+PT09PT08PDs7Ozs6Ojo5OTk4ODg3Nzc2NjY1NTU0NDQ0MzMzMjIsLCwqKiooKCgnJycmJiYiIiIhISEgICAfHx8eHh4dHR0cHBwbGxsZGRkYGBgWFhYVFRUUFBQTExMSEhIREREQEBAPDw8ODg4NDQ0MDAwLCwsKCgoJCQkICAgHBwcGBgYFBQUBAQEAwMD/X1//AAAAAnRSTlPM9mN86wAAAXRJREFUeNrt2LENwDAAwDAx/w/N4CAh/M5A3B3r1i+d6A1t//4+AAAAAOBF2gEAAABwBQIAAAAsAQEAAGAJCAAAYAkIAAAAS0AAABYBAQBYBAQAYBEQAIBFQAAAFgEBgEVAAAAsAgIAAIuAIAAAIAgIALAgiAIAgCAgAECCgAAACFIAYIEEAAAQpAIAQAQpAAAAhCgAQIQIAgBAhAgCgAARBAAgCMoCAAjKDwAgh/wAQAghAAgghAAAIYQQAAIQQAAAEIQQIAAAAQQIIgCAAggQAABBggAAQgKAAAgJCAAAQEgAAIEJAAgAJAQAEBKQAACAkABAggACBAiCAAgQIAgAIECAgAIAgIECAAICAIICAAgKAIgAIAgCIAgAIAgFIAgAIAgFIgAIAgEIgAIAgAIggAIAgAIggAIAgAFAgAIAgAFAgAIAgAGAgAIAgAGAgAIAgACggAIAgACggAIAgABAgAIAgABAgAIAgAAgIAAICAAgIAAICAAAQAgACAAACAACAAAAAAAAAAAAAAAAAAAAAID3BRY7AXgXkFmgAAAAAElFTkSuQmCC" alt="Dark Trader Logo" width={40} height={40} />
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
                        <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYAAAAGACAMAAACN91WyAAADAFBMVEX/////////+/v//f3//v7////+/f/9/f7+/v79/f38/Pz9/f39/f38+/v7+/v7+vr6+fn5+f33+Pj29vf19fX09fXz8/Pz8/Ly8u/x8e/w8PDv7+7u7uzu7e3t7e3t7ers6+rp6unp6efn5+fm5eXl5eXk4+Pk4+Pi4uLh4eHg4ODf39/f3t7e3d3d3d3c29vc2tra2dnZ2NjY19fX19fW1dXV1dXT09PS0tLR0dHQz8/Pz8/Pzs7Ozs3Mzc3LystLS0tKSkpJR0dGRkZFRUVFRENCQkJCQkJAQEA/Pz8+Pj4+PT09PT08PDs7Ozs6Ojo5OTk4ODg3Nzc2NjY1NTU0NDQ0MzMzMjIsLCwqKiooKCgnJycmJiYiIiIhISEgICAfHx8eHh4dHR0cHBwbGxsZGRkYGBgWFhYVFRUUFBQTExMSEhIREREQEBAPDw8ODg4NDQ0MDAwLCwsKCgoJCQkICAgHBwcGBgYFBQUBAQEAwMD/X1//AAAAAnRSTlPM9mN86wAAAXRJREFUeNrt2LENwDAAwDAx/w/N4CAh/M5A3B3r1i+d6A1t//4+AAAAAOBF2gEAAABwBQIAAAAsAQEAAGAJCAAAYAkIAAAAS0AAABYBAQBYBAQAYBEQAIBFQAAAFgEBgEVAAAAsAgIAAIuAIAAAIAgIALAgiAIAgCAgAECCgAAACFIAYIEEAAAQpAIAQAQpAAAAhCgAQIQIAgBAhAgCgAARBAAgCMoCAAjKDwAgh/wAQAghAAgghAAAIYQQAAIQQAAAEIQQIAAAAQQIIgCAAggQAABBggAAQgKAAAgJCAAAQEgAAIEJAAgAJAQAEBKQAACAkABAggACBAiCAAgQIAgAIECAgAIAgIECAAICAIICAAgKAIgAIAgCIAgAIAgFIAgAIAgFIgAIAgEIgAIAgAIggAIAgAIggAIAgAFAgAIAgAFAgAIAgAGAgAIAgAGAgAIAgACggAIAgACggAIAgABAgAIAgABAgAIAgAAgIAAICAAgIAAICAAAQAgACAAACAACAAAAAAAAAAAAAAAAAAAAAID3BRY7AXgXkFmgAAAAAElFTkSuQmCC" alt="Dark Trader Logo" width={40} height={40} />
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

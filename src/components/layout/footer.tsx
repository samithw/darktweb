
import Link from 'next/link';
import { TrendingUp, Twitter, Youtube, Instagram } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { href: '#mentorships', label: 'Mentorships' },
  { href: '#sierra-chart-templates', label: 'Sierra Chart' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
    { icon: Twitter, href: '#'},
    { icon: Youtube, href: '#'},
    { icon: Instagram, href: '#'},
]

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-black">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Link href="/#home" className="flex items-center gap-2">
              <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYAAAAGACAMAAACN91WyAAADAFBMVEX/////////+/v//f3//v7////+/f/9/f7+/v79/f38/Pz9/f39/f38+/v7+/v7+vr6+fn5+f33+Pj29vf19fX09fXz8/Pz8/Ly8u/x8e/w8PDv7+7u7uzu7e3t7e3t7ers6+rp6unp6efn5+fm5eXl5eXk4+Pk4+Pi4uLh4eHg4ODf39/f3t7e3d3d3d3c29vc2tra2dnZ2NjY19fX19fW1dXV1dXT09PS0tLR0dHQz8/Pz8/Pzs7Ozs3Mzc3LystLS0tKSkpJR0dGRkZFRUVFRENCQkJCQkJAQEA/Pz8+Pj4+PT09PT08PDs7Ozs6Ojo5OTk4ODg3Nzc2NjY1NTU0NDQ0MzMzMjIsLCwqKiooKCgnJycmJiYiIiIhISEgICAfHx8eHh4dHR0cHBwbGxsZGRkYGBgWFhYVFRUUFBQTExMSEhIREREQEBAPDw8ODg4NDQ0MDAwLCwsKCgoJCQkICAgHBwcGBgYFBQUBAQEAwMD/X1//AAAAAnRSTlPM9mN86wAAAXRJREFUeNrt2LENwDAAwDAx/w/N4CAh/M5A3B3r1i+d6A1t//4+AAAAAOBF2gEAAABwBQIAAAAsAQEAAGAJCAAAYAkIAAAAS0AAABYBAQBYBAQAYBEQAIBFQAAAFgEBgEVAAAAsAgIAAIuAIAAAIAgIALAgiAIAgCAgAECCgAAACFIAYIEEAAAQpAIAQAQpAAAAhCgAQIQIAgBAhAgCgAARBAAgCMoCAAjKDwAgh/wAQAghAAgghAAAIYQQAAIQQAAAEIQQIAAAAQQIIgCAAggQAABBggAAQgKAAAgJCAAAQEgAAIEJAAgAJAQAEBKQAACAkABAggACBAiCAAgQIAgAIECAgAIAgIECAAICAIICAAgKAIgAIAgCIAgAIAgFIAgAIAgFIgAIAgEIgAIAgAIggAIAgAIggAIAgAFAgAIAgAFAgAIAgAGAgAIAgAGAgAIAgACggAIAgACggAIAgABAgAIAgABAgAIAgAAgIAAICAAgIAAICAAAQAgACAAACAACAAAAAAAAAAAAAAAAAAAAAID3BRY7AXgXkFmgAAAAAElFTkSuQmCC" alt="Dark Trader Logo" width={24} height={24} />
              <span className="text-xl font-bold text-white">Dark Trader</span>
            </Link>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Dark Trader. All rights reserved.</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm md:justify-start">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-muted-foreground transition-colors hover:text-primary">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
                <Link key={index} href={social.href} className="text-muted-foreground transition-colors hover:text-primary">
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">Social Link</span>
                </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

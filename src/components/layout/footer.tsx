import Link from 'next/link';
import { Twitter, Youtube, Instagram } from 'lucide-react';
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
              <Image src="/images/dt-logo.jpg" alt="Dark Trader Logo" width={40} height={40} />
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

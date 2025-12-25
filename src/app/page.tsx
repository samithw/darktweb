
"use client"

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import HeroSection from '@/components/page/hero-section';
import MentorshipsSection from '@/components/page/mentorships-section';
import SierraChartSection from '@/components/page/sierra-chart-section';
import AtasSection from '@/components/page/atas-section';
import Mt5Section from '@/components/page/mt5-section';
import TradingViewSection from '@/components/page/trading-view-section';
import AboutSection from '@/components/page/about-section';
import ContactSection from '@/components/page/contact-section';

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    // This handles both direct navigation and link clicks
    const hash = window.location.hash;
    let elementId;

    if (hash) {
      elementId = hash.substring(1);
    } else {
      // Fallback to pathname for clean URLs like /about
      const pathParts = pathname.split('/');
      const lastPart = pathParts[pathParts.length - 1];
      
      // Map path to section ID. 'darktweb' is the repo name, handle root path.
      const pathToIdMap: { [key: string]: string } = {
          '': 'home',
          'darktweb': 'home',
          'mentorships': 'mentorships',
          'sierra-chart-templates': 'sierra-chart-templates',
          'atas-templates': 'atas-templates',
          'mt5-templates': 'mt5-templates',
          'trading-view': 'trading-view',
          'about': 'about',
          'contact': 'contact'
      };
      
      elementId = pathToIdMap[lastPart] || 'home';
    }
    
    if (elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        // Use a timeout to ensure the element is rendered and ready to be scrolled to,
        // especially after a client-side navigation.
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [pathname]);

  return (
    <>
      <HeroSection />
      <MentorshipsSection />
      <SierraChartSection />
      <AtasSection />
      <Mt5Section />
      <TradingViewSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}

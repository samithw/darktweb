
"use client"

import HeroSection from '@/components/page/hero-section';
import MentorshipsSection from '@/components/page/mentorships-section';
import SierraChartSection from '@/components/page/sierra-chart-section';
import AtasSection from '@/components/page/atas-section';
import Mt5Section from '@/components/page/mt5-section';
import TradingViewSection from '@/components/page/trading-view-section';
import AboutSection from '@/components/page/about-section';
import ContactSection from '@/components/page/contact-section';

export default function Home() {
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

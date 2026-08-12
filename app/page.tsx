'use client';

import React from 'react';
import { ScrollProgressBar } from '@/components/widgets/ScrollProgressBar';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { PainPointsChecklist } from '@/components/sections/PainPointsChecklist';
import { MethodologySteps } from '@/components/sections/MethodologySteps';
import { AboutExpert } from '@/components/sections/AboutExpert';
import { ServicesTiers } from '@/components/sections/ServicesTiers';
import { LabPartnerBanner } from '@/components/sections/LabPartnerBanner';
import { SymptomQuiz } from '@/components/sections/SymptomQuiz';
import { Testimonials } from '@/components/sections/Testimonials';
import { DiscountCTA } from '@/components/sections/DiscountCTA';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';
import { TelegramFloatingButton } from '@/components/widgets/TelegramFloatingButton';

export default function Home() {
  return (
    <main className="min-h-screen relative bg-cream-100 text-charcoal overflow-hidden">
      <ScrollProgressBar />
      <Header />
      <Hero />
      <PainPointsChecklist />
      <MethodologySteps />
      <AboutExpert />
      <ServicesTiers />
      <LabPartnerBanner />
      <SymptomQuiz />
      <Testimonials />
      <DiscountCTA />
      <ContactSection />
      <Footer />
      <TelegramFloatingButton />
    </main>
  );
}

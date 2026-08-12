import React from 'react';
import { EXPERT_INFO, CONTACT_DATA } from '@/lib/content';
import { Button } from '@/components/ui/Button';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Send, Calendar, Award, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-cream-100">
      {/* Editorial Decorative Background Elements */}
      <div className="absolute top-12 left-[-10%] w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-[-5%] w-80 h-80 bg-terracotta/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column — Editorial Photo Frame (Anna looking right towards text) */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Outer decorative ring (desktop only to prevent mobile overflow) */}
              <div className="hidden sm:block absolute -inset-4 rounded-3xl border-2 border-gold/30 -rotate-2 pointer-events-none" />
              <div className="hidden sm:block absolute -inset-4 rounded-3xl border border-terracotta/20 rotate-2 pointer-events-none" />

              {/* Floating Badge Card */}
              <div className="absolute top-3 right-3 sm:-top-6 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-card border border-gold/40 max-w-[190px] sm:max-w-[210px] z-20">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-burgundy flex items-center justify-center text-white font-bold text-xs sm:text-sm shrink-0">
                    -30%
                  </div>
                  <div>
                    <p className="text-[11px] sm:text-xs font-bold text-burgundy uppercase leading-snug">Скидка на запись</p>
                    <p className="text-[10px] sm:text-[11px] text-charcoal/70">При получении купона</p>
                  </div>
                </div>
              </div>

              {/* Main Photo Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-cream-200 border-4 border-white aspect-[3/4]">
                <img
                  src={EXPERT_INFO.photoUrl}
                  alt={EXPERT_INFO.name}
                  className="w-full h-full object-cover object-top"
                />
                
                {/* Photo Caption Overlay with Dark Burgundy Frosted Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-burgundy/90 backdrop-blur-md rounded-xl text-white shadow-xl border border-gold/40">
                  <p className="font-editorial-italic text-2xl font-bold leading-tight text-white">
                    {EXPERT_INFO.name}
                  </p>
                  <p className="text-xs tracking-wider uppercase font-bold text-gold mt-0.5">
                    Эксперт по лабораторным показателям
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column — Text & CTAs */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            <SectionLabel>{EXPERT_INFO.positioning}</SectionLabel>

            {/* Primary SEO H1 Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-playfair text-charcoal leading-tight mb-3">
              Нутрициолог и фармацевт <span className="text-burgundy font-editorial-italic">Анна Моложенко</span>
            </h1>

            {/* Emotional Hook Offer */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-playfair text-terracotta mb-5">
              {EXPERT_INFO.heroHeadline}
            </h2>

            {/* Sub-headline Philosophy */}
            <p className="text-base sm:text-lg text-charcoal/90 mb-4 font-medium leading-relaxed">
              <span className="font-editorial-italic text-xl text-burgundy font-semibold mr-2">
                {EXPERT_INFO.philosophyTagline}
              </span>
              — {EXPERT_INFO.philosophySub}
            </p>

            <p className="text-sm sm:text-base text-charcoal/70 mb-8 max-w-xl">
              {EXPERT_INFO.heroTagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a href="#contacts" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                  icon={<Calendar className="w-5 h-5" />}
                >
                  Записаться на консультацию
                </Button>
              </a>
              <a
                href={CONTACT_DATA.telegramChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                  icon={<Send className="w-5 h-5" />}
                >
                  Мой Telegram
                </Button>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-cream-300 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-terracotta/10 text-terracotta">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-xs font-semibold text-charcoal uppercase tracking-wider">
                  Дипломированный фармацевт
                  <span className="block text-[11px] text-terracotta font-normal normal-case">
                    Красный диплом высшего образования
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-gold/15 text-gold-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="text-xs font-semibold text-charcoal uppercase tracking-wider">
                  Сертифицированный нутрициолог
                  <span className="block text-[11px] text-gold-600 font-normal normal-case">
                    Индивидуальный разбор анализов
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

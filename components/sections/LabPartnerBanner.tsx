import React from 'react';
import { CONTACT_DATA } from '@/lib/content';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { Microscope, MapPin, CheckCircle, ExternalLink } from 'lucide-react';

export const LabPartnerBanner: React.FC = () => {
  return (
    <section className="py-16 bg-cream-200 border-y border-cream-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 lg:p-12 border-2 border-gold/30 shadow-card relative overflow-hidden">
          {/* Subtle background icon */}
          <div className="absolute right-[-2%] bottom-[-10%] text-gold/10 pointer-events-none">
            <Microscope className="w-80 h-80" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left side details */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold-600 text-xs font-bold uppercase tracking-wider mb-4 border border-gold/30">
                <Microscope className="w-4 h-4" />
                Официальный партнёр
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-playfair text-burgundy mb-3">
                {CONTACT_DATA.labCheckupName}
              </h2>

              <p className="text-base text-charcoal/80 mb-6 font-medium leading-relaxed">
                Доступен во всех лабораториях сети <strong className="text-terracotta">{CONTACT_DATA.labPartner}</strong> — «Сеть лабораторий для всей семьи». Сдайте готовый комплекс анализов и приходите на профессиональную авторскую расшифровку.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-charcoal/85">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-terracotta shrink-0" />
                  <span>Готовый сбалансированный список показателей</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-terracotta shrink-0" />
                  <span>Без переплат за ненужные анализы</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-terracotta shrink-0" />
                  <span>Приём в любой филиале ЛукаЛаб</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-terracotta shrink-0" />
                  <span>Прямая передача результатов нутрициологу</span>
                </div>
              </div>
            </div>

            {/* Right side CTA card */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-cream-100 border border-cream-300 text-center">
              <span className="font-editorial-italic text-3xl text-burgundy font-bold mb-1">
                LukaLab
              </span>
              <span className="text-xs uppercase tracking-widest text-charcoal-50 font-bold mb-4">
                Сеть лабораторий для всей семьи
              </span>
              <a
                href={CONTACT_DATA.telegramChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  variant="gold"
                  size="md"
                  className="w-full"
                  icon={<ExternalLink className="w-4 h-4" />}
                >
                  Уточнить филиал и записаться
                </Button>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

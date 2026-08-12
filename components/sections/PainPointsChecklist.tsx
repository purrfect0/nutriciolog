import React from 'react';
import { PAIN_POINTS } from '@/lib/content';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Scale, Sparkles, BatteryLow, Moon, HelpCircle } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Scale: <Scale className="w-7 h-7 text-terracotta" />,
  Sparkles: <Sparkles className="w-7 h-7 text-terracotta" />,
  BatteryLow: <BatteryLow className="w-7 h-7 text-terracotta" />,
  Moon: <Moon className="w-7 h-7 text-terracotta" />,
};

export const PainPointsChecklist: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-cream-200 border-y border-cream-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SectionLabel>Симптомы дефицитов</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-charcoal mb-4">
            Что мешает вам чувствовать себя отлично?
          </h2>
          <p className="text-base text-charcoal/70">
            Каждый из этих симптомов — не естественная норма, а четкий сигнал организма о нехватке витаминов, минералов или гормональном дисбалансе.
          </p>
        </div>

        {/* 4 Pain Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PAIN_POINTS.map((item, index) => (
            <div
              key={item.id}
              className="bg-cream-100 rounded-2xl p-6 border border-terracotta/15 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col items-start group"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-full bg-terracotta/10 border border-terracotta/30 flex items-center justify-center mb-5 group-hover:bg-terracotta group-hover:text-white transition-colors duration-300">
                {iconMap[item.icon] || <HelpCircle className="w-7 h-7 text-terracotta" />}
              </div>

              <h3 className="text-xl font-bold font-playfair text-charcoal mb-3 group-hover:text-terracotta transition-colors">
                {item.question}
              </h3>

              <p className="text-sm text-charcoal/75 leading-relaxed">
                {item.description}
              </p>

              <div className="mt-4 pt-4 border-t border-cream-300 w-full text-right">
                <span className="text-xs font-bold text-terracotta uppercase tracking-wider">
                  Шаг 0{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Callout box */}
        <div className="mt-12 text-center">
          <a
            href="#quiz"
            className="inline-flex items-center gap-2 text-sm font-bold text-burgundy hover:text-terracotta underline underline-offset-4 transition-colors"
          >
            Узнать вероятность ваших дефицитов — Пройти быстрый онлайн-тест →
          </a>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { TESTIMONIALS } from '@/lib/content';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Star, MessageSquare, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-cream-200 border-y border-cream-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Отзывы клиентов</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-playfair text-charcoal mb-4">
            Истории восстановления и результатов
          </h2>
          <p className="text-base text-charcoal/70">
            Реальные впечатления людей, прошедших расшифровку анализов и персональные программы оздоровления.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 border border-cream-300 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="relative z-10">
                {/* Rating & Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex text-terracotta">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-terracotta" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-burgundy bg-burgundy/10 px-3 py-1 rounded-full flex items-center gap-1.5 border border-burgundy/15">
                    <MessageSquare className="w-3.5 h-3.5 text-terracotta" />
                    {item.tag}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-sm text-charcoal/85 leading-relaxed mb-6 font-medium italic">
                  «{item.text}»
                </p>
              </div>

              {/* Sleek Result Callout & Client metadata */}
              <div className="relative z-10">
                <div className="flex items-start gap-2 text-xs text-charcoal bg-cream-100 border-l-3 border-terracotta p-3 rounded-r-xl mb-6 border border-cream-300 border-l-terracotta">
                  <span className="font-bold text-terracotta shrink-0">✓ Результат:</span>
                  <span className="font-medium text-charcoal/90">{item.result}</span>
                </div>

                <div className="pt-4 border-t border-cream-300">
                  <h3 className="font-bold font-playfair text-charcoal text-base">
                    {item.name}
                  </h3>
                  <p className="text-xs text-charcoal/60">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

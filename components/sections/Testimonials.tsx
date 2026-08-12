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
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gold/15 group-hover:text-terracotta/20 transition-colors" />

              <div>
                {/* Rating & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-terracotta">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-terracotta" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-burgundy bg-burgundy/10 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <MessageSquare className="w-3 h-3" />
                    {item.tag}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-sm text-charcoal/80 leading-relaxed mb-6 font-medium italic">
                  «{item.text}»
                </p>
              </div>

              {/* Result callout & Client metadata */}
              <div>
                <div className="p-3 rounded-xl bg-cream-100 border border-gold/30 mb-6">
                  <span className="text-xs font-bold text-terracotta block uppercase tracking-wider">
                    Главный результат:
                  </span>
                  <span className="text-xs font-semibold text-charcoal">
                    {item.result}
                  </span>
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

import React from 'react';
import { METHODOLOGY_STEPS, EXPERT_INFO } from '@/lib/content';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { TestTube, ClipboardList, UserCheck, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  TestTube: <TestTube className="w-8 h-8 text-gold" />,
  ClipboardList: <ClipboardList className="w-8 h-8 text-gold" />,
  UserCheck: <UserCheck className="w-8 h-8 text-gold" />,
};

export const MethodologySteps: React.FC = () => {
  return (
    <section id="methodology" className="py-20 bg-cream-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section with philosophy callout */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Методология работы</SectionLabel>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-playfair text-burgundy mb-4">
            {EXPERT_INFO.philosophyTagline}
          </h2>

          <p className="text-lg text-charcoal/80 font-medium">
            3 пошаговых этапа от точной лабораторной диагностики до хорошего самочувствия
          </p>
        </div>

        {/* 3-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-gold/20 via-gold to-gold/20 -translate-y-8 z-0" />

          {METHODOLOGY_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="relative z-10 bg-white rounded-3xl p-8 border border-cream-300 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Step Number Badge */}
              <div className="w-16 h-16 rounded-2xl bg-burgundy text-white flex items-center justify-center font-playfair text-2xl font-bold mb-6 shadow-md group-hover:bg-terracotta transition-colors">
                0{step.number}
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl font-bold font-playfair text-charcoal mb-2">
                {step.title}
              </h3>
              <p className="text-xs uppercase tracking-widest text-gold font-bold mb-4">
                {step.subtitle}
              </p>

              {/* Description */}
              <p className="text-sm text-charcoal/75 leading-relaxed">
                {step.description}
              </p>

              {/* Step Arrow Indicator for 1 & 2 */}
              {idx < METHODOLOGY_STEPS.length - 1 && (
                <div className="md:hidden mt-6 text-gold">
                  <ArrowRight className="w-6 h-6 rotate-90 mx-auto" />
                </div>
              )}
            </div>
          ))}

        </div>

        {/* Action Link below */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 bg-cream-200 border border-gold/40 px-6 py-3 rounded-full text-sm font-semibold text-charcoal">
            <span className="w-2.5 h-2.5 rounded-full bg-terracotta animate-ping" />
            <span>Сдайте чек-ап в лаборатории <strong>ЛукаЛаб</strong> или возьмите свои результаты</span>
          </div>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { SERVICE_TIERS, CONTACT_DATA } from '@/lib/content';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Check, Send, Sparkles } from 'lucide-react';

export const ServicesTiers: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-cream-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Форматы работы</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-playfair text-charcoal mb-4">
            Услуги и Тарифы
          </h2>
          <p className="text-base text-charcoal/70">
            Выберите удобный формат взаимодействия — от бесплатной вводной консультации до полного сопровождения восстановления.
          </p>
        </div>

        {/* 3 Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {SERVICE_TIERS.map((tier) => (
            <Card
              key={tier.id}
              highlighted={tier.popular}
              className={`flex flex-col justify-between relative ${
                tier.popular ? 'md:-translate-y-2' : ''
              }`}
            >
              {/* Popular Badge ribbon */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-terracotta text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    {tier.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Header info */}
                <div className="mb-6 pt-2">
                  {!tier.popular && tier.badge && (
                    <Badge variant="gold" className="mb-3">
                      {tier.badge}
                    </Badge>
                  )}
                  <h3 className="text-2xl font-bold font-playfair text-charcoal mb-1">
                    {tier.title}
                  </h3>
                  <p className="text-xs text-charcoal/60 font-medium">
                    {tier.subtitle}
                  </p>
                </div>

                {/* Price block */}
                <div className="mb-6 p-4 rounded-xl bg-cream-200/80 border border-cream-300">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold font-playfair text-burgundy">
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="text-xs font-semibold text-charcoal/60">
                        / {tier.period}
                      </span>
                    )}
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8 text-sm text-charcoal/80">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="p-0.5 rounded-full bg-terracotta/10 text-terracotta mt-0.5 shrink-0">
                        <Check className="w-4 h-4" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Action Button */}
              <div className="pt-6 border-t border-cream-300">
                <a
                  href={CONTACT_DATA.telegramChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button
                    variant={tier.popular ? 'primary' : 'outline'}
                    size="md"
                    className="w-full"
                    icon={<Send className="w-4 h-4" />}
                  >
                    {tier.ctaText}
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>

        {/* Note on Lab checks */}
        <div className="mt-12 text-center text-xs text-charcoal/60">
          * Стоимость лабораторных анализов оплачивается отдельно напрямую в лаборатории (доступна скидка в сети «ЛукаЛаб»).
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { CONTACT_DATA } from '@/lib/content';
import { Button } from '@/components/ui/Button';
import { Ticket, Send, Check } from 'lucide-react';

export const DiscountCTA: React.FC = () => {
  return (
    <section className="py-16 bg-cream-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Burgundy Coupon Banner */}
        <div className="bg-burgundy rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden border-2 border-gold/40">
          
          {/* Decorative Scissors / Coupon Dashed Border */}
          <div className="absolute inset-2 border border-dashed border-gold/30 rounded-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left side Coupon Details */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold text-burgundy text-xs font-bold uppercase tracking-wider mb-4">
                <Ticket className="w-4 h-4" />
                Специальное предложение с сайта и флаера
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                <span className="font-playfair text-6xl sm:text-7xl font-black text-gold leading-none">
                  -30%
                </span>
                <span className="text-2xl sm:text-3xl font-bold font-playfair text-white uppercase tracking-wide">
                  НА КОНСУЛЬТАЦИЮ ПО ЗДОРОВЬЮ
                </span>
              </div>

              <p className="text-base text-gold-100 mb-6 font-medium">
                Предъявите купон или скажите, что увидели предложение на сайте при записи на консультацию.
              </p>

              <div className="flex flex-wrap gap-4 text-xs font-semibold text-white/90">
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg">
                  <Check className="w-4 h-4 text-gold" />
                  <span>Действует для новых клиентов</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg">
                  <Check className="w-4 h-4 text-gold" />
                  <span>Применимо в Telegram и по телефону</span>
                </div>
              </div>
            </div>

            {/* Right side CTA Button */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <a
                href={CONTACT_DATA.telegramChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="gold"
                  size="lg"
                  className="w-full sm:w-auto font-bold shadow-xl"
                  icon={<Send className="w-5 h-5" />}
                >
                  Записаться со скидкой 30%
                </Button>
              </a>
              <span className="text-xs text-gold-100/70 mt-3 text-center lg:text-right">
                Нажмите для прямой связи с Анной в Telegram
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

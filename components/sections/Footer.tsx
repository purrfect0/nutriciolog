import React from 'react';
import { EXPERT_INFO, CONTACT_DATA } from '@/lib/content';
import { Phone, Send, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-12 border-t-2 border-gold relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3 Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand info */}
          <div className="md:col-span-5">
            <span className="font-editorial-italic text-3xl font-bold text-gold block mb-2">
              {EXPERT_INFO.name}
            </span>
            <p className="text-xs uppercase tracking-widest text-white/70 font-semibold mb-4">
              {EXPERT_INFO.positioning}
            </p>
            <p className="text-sm text-white/60 max-w-sm leading-relaxed mb-6">
              Дипломированный фармацевт (красный диплом) и сертифицированный нутрициолог. Персональный подход к восстановлению здоровья по анализам.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={CONTACT_DATA.telegramChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold hover:text-burgundy flex items-center justify-center transition-colors text-white"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href={`tel:${CONTACT_DATA.phoneRaw}`}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold hover:text-burgundy flex items-center justify-center transition-colors text-white"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold mb-4">
              Навигация
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <a href="#about" className="hover:text-gold transition-colors">
                  Обо мне
                </a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-gold transition-colors">
                  Методология (3 шага)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors">
                  Услуги и Тарифы
                </a>
              </li>
              <li>
                <a href="#quiz" className="hover:text-gold transition-colors">
                  Тест дефицитов
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-gold transition-colors">
                  Отзывы клиентов
                </a>
              </li>
              <li>
                <a href="#contacts" className="hover:text-gold transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact info */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold mb-4">
              Контакты и лаборатория
            </h4>
            <div className="space-y-3 text-sm text-white/70">
              <p>
                <strong className="text-white">Телефон:</strong>{' '}
                <a href={`tel:${CONTACT_DATA.phoneRaw}`} className="hover:text-gold">
                  {CONTACT_DATA.phone}
                </a>
              </p>
              <p>
                <strong className="text-white">Telegram:</strong>{' '}
                <a href={CONTACT_DATA.telegramChannel} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                  {CONTACT_DATA.telegramUsername}
                </a>
              </p>
              <p>
                <strong className="text-white">Партнёр:</strong> Лаборатория {CONTACT_DATA.labPartner}
              </p>
              <p className="text-xs text-white/50 pt-2">
                * Материалы сайта носят информационный характер и не являются прямой медицинской рекомендацией.
              </p>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© {new Date().getFullYear()} {EXPERT_INFO.name}. Все права защищены.</p>
          <p className="flex items-center gap-1">
            Разработано с <Heart className="w-3.5 h-3.5 text-terracotta fill-terracotta" /> для экспертного личного бренда
          </p>
        </div>

      </div>
    </footer>
  );
};

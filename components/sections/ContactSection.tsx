'use client';

import React, { useState } from 'react';
import { CONTACT_DATA, EXPERT_INFO } from '@/lib/content';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { Phone, Send, QrCode, CheckCircle, MessageCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    concern: 'energy',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
  };

  return (
    <section id="contacts" className="py-20 bg-cream-200 border-t border-cream-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Связаться со мной</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-playfair text-charcoal mb-4">
            Запись на консультацию и вопросы
          </h2>
          <p className="text-base text-charcoal/70">
            Напишите в Telegram, позвоните по телефону или заполните форму — я отвечу вам в самое ближайшее время.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column — Contact Direct Details & QR Code */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-cream-300 shadow-soft">
            <h3 className="text-2xl font-bold font-playfair text-burgundy mb-6">
              Прямые контакты
            </h3>

            {/* Phone Click-to-call */}
            <div className="mb-6 pb-6 border-b border-cream-300">
              <span className="text-xs uppercase tracking-widest text-charcoal/60 font-bold block mb-2">
                Телефон для связи / WhatsApp
              </span>
              <a
                href={`tel:${CONTACT_DATA.phoneRaw}`}
                className="inline-flex items-center gap-3 text-xl font-bold text-terracotta hover:text-burgundy transition-colors"
              >
                <div className="p-3 rounded-full bg-terracotta/10 text-terracotta">
                  <Phone className="w-6 h-6" />
                </div>
                <span>{CONTACT_DATA.phone}</span>
              </a>
            </div>

            {/* Telegram Channel */}
            <div className="mb-8 pb-6 border-b border-cream-300">
              <span className="text-xs uppercase tracking-widest text-charcoal/60 font-bold block mb-2">
                Личный Telegram-канал
              </span>
              <p className="text-xs text-charcoal/75 mb-4">
                Полезные материалы, разборы анализов, рекомендации по питанию и БАД.
              </p>
              <a
                href={CONTACT_DATA.telegramChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-burgundy hover:text-terracotta underline"
              >
                <Send className="w-4 h-4 text-terracotta" />
                <span>Перейти в Telegram-канал Анны →</span>
              </a>
            </div>

            {/* QR Code Container */}
            <div className="p-6 rounded-2xl bg-cream-100 border border-gold/30 flex flex-col items-center text-center">
              <div className="w-40 h-40 rounded-xl overflow-hidden shadow-md mb-4 bg-white p-2 border border-cream-300">
                <img
                  src={CONTACT_DATA.telegramChannel.includes('http') ? EXPERT_INFO.qrCodeUrl : EXPERT_INFO.qrCodeUrl}
                  alt="Telegram QR Code"
                  className="w-full h-full object-contain object-bottom"
                />
              </div>
              <span className="font-editorial-italic text-xl font-bold text-burgundy">
                сканируй и подписывайся!
              </span>
              <span className="text-xs text-charcoal/70 mt-1">
                Наведите камеру смартфона для быстрого перехода в канал
              </span>
            </div>
          </div>

          {/* Right Column — Contact Booking Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-cream-300 shadow-soft">
            <h3 className="text-2xl font-bold font-playfair text-charcoal mb-2">
              Форма записи на консультацию
            </h3>
            <p className="text-sm text-charcoal/70 mb-8">
              Заполните поля ниже, и я свяжусь с вами для согласования удобного времени.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Екатерина"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-cream-300 focus:outline-none focus:ring-2 focus:ring-terracotta text-sm bg-cream-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
                    Телефон / Telegram для связи *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="+7 (999) 000-00-00 или @username"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-cream-300 focus:outline-none focus:ring-2 focus:ring-terracotta text-sm bg-cream-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
                    Что вас больше всего беспокоит?
                  </label>
                  <select
                    value={formData.concern}
                    onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-cream-300 focus:outline-none focus:ring-2 focus:ring-terracotta text-sm bg-cream-50"
                  >
                    <option value="energy">Хроническая усталость / нет энергии</option>
                    <option value="weight">Вес не уходит / прыгает</option>
                    <option value="hair">Выпадают волосы / ломкие ногти</option>
                    <option value="sleep">Плохой сон / тревожность</option>
                    <option value="analysis">Нужен разбор готовых анализов</option>
                    <option value="other">Другой вопрос</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
                    Комментарий или вопрос (необязательно)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Например: Сдавала анализы месяц назад, хочу разобрать..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-cream-300 focus:outline-none focus:ring-2 focus:ring-terracotta text-sm bg-cream-50 resize-none"
                  />
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  className="w-full shadow-md"
                  icon={<Send className="w-5 h-5" />}
                >
                  Отправить заявку со скидкой 30%
                </Button>

                <p className="text-[11px] text-charcoal/60 text-center">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
                </p>
              </form>
            ) : (
              /* Success Screen */
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4 border border-green-200">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold font-playfair text-charcoal mb-2">
                  Заявка успешно отправлена!
                </h4>
                <p className="text-sm text-charcoal/70 mb-6 max-w-sm mx-auto">
                  Спасибо, {formData.name}! Анна свяжется с вами по номеру {formData.phone} в течение нескольких часов.
                </p>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => setIsSubmitted(false)}
                >
                  Отправить ещё одну заявку
                </Button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

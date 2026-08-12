'use client';

import React, { useState, useEffect } from 'react';
import { EXPERT_INFO, CONTACT_DATA } from '@/lib/content';
import { Button } from '@/components/ui/Button';
import { Phone, Send, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-cream-100/95 backdrop-blur-md shadow-soft py-3 border-b border-cream-300'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo (z-50 so logo is clickable in mobile menu) */}
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="relative z-50 flex flex-col group"
          >
            <span className="font-editorial-italic text-2xl md:text-3xl font-bold text-burgundy tracking-wide group-hover:text-terracotta transition-colors">
              {EXPERT_INFO.name}
            </span>
            <span className="text-[10px] md:text-xs uppercase tracking-widest text-charcoal-50 font-semibold">
              Нутрициолог · Фармацевт
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-charcoal">
            <a href="#about" className="hover:text-terracotta transition-colors">
              Обо мне
            </a>
            <a href="#methodology" className="hover:text-terracotta transition-colors">
              Методология
            </a>
            <a href="#services" className="hover:text-terracotta transition-colors">
              Услуги и Тарифы
            </a>
            <a href="#quiz" className="hover:text-terracotta transition-colors">
              Тест дефицитов
            </a>
            <a href="#testimonials" className="hover:text-terracotta transition-colors">
              Отзывы
            </a>
            <a href="#contacts" className="hover:text-terracotta transition-colors">
              Контакты
            </a>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${CONTACT_DATA.phoneRaw}`}
              className="flex items-center text-sm font-semibold text-charcoal hover:text-terracotta transition-colors gap-2"
            >
              <Phone className="w-4 h-4 text-terracotta" />
              <span>{CONTACT_DATA.phone}</span>
            </a>
            <a href={CONTACT_DATA.telegramChannel} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="sm" icon={<Send className="w-4 h-4" />}>
                Telegram
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle Button (z-50 so X is always clickable above full-screen overlay) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative z-50 p-2 text-charcoal hover:text-terracotta focus:outline-none"
            aria-label="Открыть меню"
          >
            {mobileMenuOpen ? <X className="w-7 h-7 text-burgundy" /> : <Menu className="w-7 h-7 text-charcoal" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation (Original Frosted Glass Overlay) */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-cream-100/85 backdrop-blur-md p-6 pt-28 flex flex-col justify-between overflow-y-auto min-h-screen">
          <nav className="flex flex-col space-y-6 text-lg font-medium text-charcoal pt-2">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-terracotta transition-colors"
            >
              Обо мне
            </a>
            <a
              href="#methodology"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-terracotta transition-colors"
            >
              Методология
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-terracotta transition-colors"
            >
              Услуги и Тарифы
            </a>
            <a
              href="#quiz"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-terracotta transition-colors"
            >
              Пройти тест
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-terracotta transition-colors"
            >
              Отзывы клиентов
            </a>
            <a
              href="#contacts"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-terracotta transition-colors"
            >
              Контакты
            </a>
          </nav>

          <div className="flex flex-col gap-4 pt-6 border-t border-cream-300 pb-8">
            <a
              href={`tel:${CONTACT_DATA.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-3 bg-cream-200 rounded-full font-semibold text-charcoal"
            >
              <Phone className="w-5 h-5 text-terracotta" />
              <span>{CONTACT_DATA.phone}</span>
            </a>
            <a
              href={CONTACT_DATA.telegramChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button
                variant="primary"
                size="md"
                className="w-full"
                icon={<Send className="w-5 h-5" />}
              >
                Написать в Telegram
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

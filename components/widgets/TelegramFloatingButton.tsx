'use client';

import React from 'react';
import { CONTACT_DATA } from '@/lib/content';
import { Send } from 'lucide-react';

export const TelegramFloatingButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Hover Tooltip */}
      <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 transform group-hover:translate-x-0 translate-x-2">
        <div className="bg-charcoal text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap flex items-center gap-1.5 border border-gold/30">
          <span>Мой Telegram-канал</span>
        </div>
      </div>

      {/* Button with Pulse Animation */}
      <a
        href={CONTACT_DATA.telegramChannel}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-terracotta text-white flex items-center justify-center shadow-xl hover:bg-terracotta-600 transition-transform transform hover:scale-110 animate-pulse-subtle"
        aria-label="Написать в Telegram"
      >
        <Send className="w-6 h-6" />
      </a>
    </div>
  );
};

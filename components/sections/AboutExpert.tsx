import React from 'react';
import { CREDENTIALS, EXPERT_INFO } from '@/lib/content';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { CheckCircle2, Award, BookOpen, HeartPulse, UserCheck } from 'lucide-react';

export const AboutExpert: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-burgundy text-white relative overflow-hidden">
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-terracotta/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column — Portrait Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="absolute -inset-4 rounded-3xl border border-gold/40 rotate-3 pointer-events-none" />
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-gold/30 aspect-[3/4] bg-burgundy-900">
                <img
                  src={EXPERT_INFO.avatarUrl}
                  alt={EXPERT_INFO.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Red Diploma Floating Tag */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-gold text-burgundy font-bold px-5 py-3 rounded-2xl shadow-xl border border-white/20 flex items-center gap-3">
                <Award className="w-6 h-6 shrink-0" />
                <div className="text-xs leading-tight">
                  <span className="block font-black uppercase">Красный диплом</span>
                  <span className="font-medium">Высшее фармацевтическое</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Expert Details & Credentials */}
          <div className="lg:col-span-7">
            <SectionLabel dark>Обо мне</SectionLabel>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-playfair text-white mb-6">
              Здравствуйте! Я — {EXPERT_INFO.name}
            </h2>

            {/* Personal Quote */}
            <div className="mb-8 p-6 rounded-2xl bg-white/5 border border-gold/30 backdrop-blur-sm">
              <p className="font-editorial-italic text-xl sm:text-2xl text-gold-100 leading-relaxed italic mb-3">
                «Моя задача — найти первопричину недомоганий и сниженного ресурса, а не маскировать симптомы. Высшее фармацевтическое образование помогает мне оценивать анализы и схемы приема БАД с максимальной точностью и безопасностью для здоровья.»
              </p>
              <p className="text-xs uppercase tracking-widest text-gold font-bold text-right">
                — Анна Моложенко
              </p>
            </div>

            {/* Credentials Checklist */}
            <div className="space-y-4 mb-8">
              {CREDENTIALS.map((cred) => (
                <div
                  key={cred.id}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                >
                  <div className="p-1 rounded-full bg-gold text-burgundy mt-1 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-gold mb-1">{cred.title}</h3>
                    <p className="text-sm text-white/80 leading-relaxed">{cred.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats summary */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/15 text-center">
              <div>
                <span className="font-playfair text-3xl sm:text-4xl font-bold text-gold">100%</span>
                <span className="block text-xs uppercase tracking-wider text-white/70 mt-1">Индивидуальный подход</span>
              </div>
              <div>
                <span className="font-playfair text-3xl sm:text-4xl font-bold text-gold">0</span>
                <span className="block text-xs uppercase tracking-wider text-white/70 mt-1">Лишних назначений</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="font-playfair text-3xl sm:text-4xl font-bold text-gold">ЛукаЛаб</span>
                <span className="block text-xs uppercase tracking-wider text-white/70 mt-1">Партнёрская сеть</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

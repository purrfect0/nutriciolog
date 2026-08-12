'use client';

import React, { useState } from 'react';
import { QUIZ_QUESTIONS, CONTACT_DATA } from '@/lib/content';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { CheckSquare, Square, AlertCircle, Sparkles, Send, CheckCircle, ArrowRight } from 'lucide-react';

export const SymptomQuiz: React.FC = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [contactMethod, setContactMethod] = useState<'telegram' | 'phone'>('telegram');
  const [userContact, setUserContact] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleSymptom = (id: number) => {
    if (selectedSymptoms.includes(id)) {
      setSelectedSymptoms(selectedSymptoms.filter((s) => s !== id));
    } else {
      setSelectedSymptoms([...selectedSymptoms, id]);
    }
  };

  const calculateRisk = () => {
    const count = selectedSymptoms.length;
    if (count === 0) return { level: 'Низкая', color: 'text-green-600', text: 'У вас не выражены явные симптомы дефицитов, однако плановый чек-ап поможет сохранить здоровье.' };
    if (count <= 3) return { level: 'Умеренная', color: 'text-gold-600', text: 'Обнаружены первые признаки микронутриентных дефицитов. Рекомендуется сдать точечные анализы.' };
    return { level: 'Высокая', color: 'text-terracotta', text: 'Высокая вероятность выраженного дефицита микроэлементов и упадка ресурсов. Рекомендуется срочный разбор анализов!' };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userContact) return;
    setIsSubmitted(true);
  };

  const risk = calculateRisk();
  const progressPercent = Math.min(100, Math.round((selectedSymptoms.length / QUIZ_QUESTIONS.length) * 100));

  return (
    <section id="quiz" className="py-20 bg-cream-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <SectionLabel>Онлайн-диагностика</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-charcoal mb-4">
            Проверьте вероятность дефицитов за 1 минуту
          </h2>
          <p className="text-base text-charcoal/70">
            Отметьте симптомы, которые вы замечали у себя за последний месяц, чтобы получить быструю оценку состояния ресурсов организма.
          </p>
        </div>

        {/* Quiz Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-cream-300 shadow-card">
          
          {!isCompleted ? (
            <div>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-xs font-bold text-charcoal/60 uppercase tracking-wider mb-2">
                  <span>Отмечено: {selectedSymptoms.length} из {QUIZ_QUESTIONS.length}</span>
                  <span>{progressPercent}%</span>
                </div>
                <div className="w-full h-2.5 bg-cream-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-terracotta transition-all duration-300 rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Symptom Checkboxes List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {QUIZ_QUESTIONS.map((q) => {
                  const isChecked = selectedSymptoms.includes(q.id);
                  return (
                    <div
                      key={q.id}
                      onClick={() => toggleSymptom(q.id)}
                      className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex items-start gap-3 select-none ${
                        isChecked
                          ? 'border-terracotta bg-terracotta/5 shadow-sm'
                          : 'border-cream-300 hover:border-terracotta/40 bg-cream-50'
                      }`}
                    >
                      <div className="mt-0.5 shrink-0 text-terracotta">
                        {isChecked ? (
                          <CheckSquare className="w-5 h-5 fill-terracotta text-white" />
                        ) : (
                          <Square className="w-5 h-5 text-charcoal-50" />
                        )}
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-wider font-semibold text-gold font-mono block mb-0.5">
                          {q.category}
                        </span>
                        <span className="text-sm font-medium text-charcoal">
                          {q.symptom}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Complete Action Button */}
              <div className="text-center pt-4 border-t border-cream-300">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => setIsCompleted(true)}
                  className="w-full max-w-full font-bold shadow-md px-3.5 sm:px-8 py-3.5 sm:py-4 text-xs xs:text-sm sm:text-base tracking-tight sm:tracking-normal"
                  icon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />}
                >
                  Узнать результаты и рекомендации
                </Button>
              </div>
            </div>
          ) : (
            <div>
              {/* Quiz Results Screen */}
              {!isSubmitted ? (
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-cream-200 text-terracotta flex items-center justify-center mx-auto mb-4 border border-terracotta/20">
                    <AlertCircle className="w-8 h-8" />
                  </div>

                  <span className="text-xs uppercase tracking-widest text-charcoal/60 font-bold block mb-1">
                    Ваш результат экспресс-теста
                  </span>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold font-playfair mb-3">
                    Вероятность дефицитов: <span className={risk.color}>{risk.level}</span>
                  </h3>

                  <p className="text-sm sm:text-base text-charcoal/80 max-w-xl mx-auto mb-8 leading-relaxed">
                    {risk.text}
                  </p>

                  {/* Submission Form */}
                  <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-cream-100 p-6 rounded-2xl border border-cream-300 text-left">
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
                      Куда прислать рекомендацию по анализам?
                    </label>

                    <div className="flex gap-4 mb-4">
                      <button
                        type="button"
                        onClick={() => setContactMethod('telegram')}
                        className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-colors ${
                          contactMethod === 'telegram'
                            ? 'bg-burgundy text-white'
                            : 'bg-white text-charcoal border border-cream-300'
                        }`}
                      >
                        Telegram
                      </button>
                      <button
                        type="button"
                        onClick={() => setContactMethod('phone')}
                        className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-colors ${
                          contactMethod === 'phone'
                            ? 'bg-burgundy text-white'
                            : 'bg-white text-charcoal border border-cream-300'
                        }`}
                      >
                        Телефон / WhatsApp
                      </button>
                    </div>

                    <input
                      type="text"
                      required
                      placeholder={contactMethod === 'telegram' ? '@username или телефон' : 'Ваш номер телефона'}
                      value={userContact}
                      onChange={(e) => setUserContact(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-cream-300 focus:outline-none focus:ring-2 focus:ring-terracotta text-sm mb-4 bg-white"
                    />

                    <Button variant="primary" size="md" className="w-full" icon={<Send className="w-4 h-4" />}>
                      Получить рекомендацию
                    </Button>
                  </form>

                  <button
                    onClick={() => setIsCompleted(false)}
                    className="mt-4 text-xs font-medium text-charcoal/60 hover:text-terracotta underline"
                  >
                    ← Изменить ответы в тесте
                  </button>
                </div>
              ) : (
                /* Success Screen */
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4 border border-green-200">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-playfair text-charcoal mb-2">
                    Спасибо! Данные приняты
                  </h3>
                  <p className="text-sm text-charcoal/70 mb-6 max-w-md mx-auto">
                    Анна свяжется с вами в течение рабочего дня и пришлёт первичные рекомендации под ваши отмеченные симптомы.
                  </p>
                  <a href={CONTACT_DATA.telegramChannel} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" size="md" icon={<Send className="w-4 h-4" />}>
                      Перейти в Telegram-канал Анны
                    </Button>
                  </a>
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

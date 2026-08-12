import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Анна Моложенко — Нутрициолог, Фармацевт, Эксперт по анализам',
  description:
    'Персональный сайт Анны Моложенко: дипломированный фармацевт (красный диплом) и сертифицированный нутрициолог. Индивидуальный разбор анализов, программы восстановления энергии и метаболизма.',
  keywords: [
    'Анна Моложенко',
    'нутрициолог',
    'фармацевт',
    'разбор анализов',
    'расшифровка анализов',
    'ЛукаЛаб',
    'консультация нутрициолога',
    'выпадение волос',
    'хроническая усталость',
  ],
  authors: [{ name: 'Анна Моложенко' }],
  openGraph: {
    title: 'Анна Моложенко — Нутрициолог & Фармацевт',
    description: 'Индивидуальный разбор анализов и персональный подход к восстановлению здоровья.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Анна Моложенко Нутрициология',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,400;1,600;1,700&family=Nunito:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream-100 text-charcoal antialiased selection:bg-terracotta selection:text-white">
        {children}
      </body>
    </html>
  );
}

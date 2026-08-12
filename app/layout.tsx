import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Анна Моложенко — Нутрициолог, фармацевт | Разбор анализов и подбор БАД',
  description:
    'Дипломированный фармацевт и нутрициолог Анна Моложенко. Комплексный разбор анализов, выявление дефицитов и персональные программы восстановления здоровья.',
  keywords: [
    'Анна Моложенко',
    'нутрициолог',
    'фармацевт',
    'разбор анализов',
    'расшифровка анализов',
    'подбор БАД',
    'ЛукаЛаб',
    'консультация нутрициолога',
    'выпадение волос',
    'хроническая усталость',
  ],
  authors: [{ name: 'Анна Моложенко' }],
  metadataBase: new URL('https://purrfect0.github.io/nutriciolog/'),
  openGraph: {
    title: 'Анна Моложенко — Дипломированный нутрициолог и фармацевт',
    description:
      'Индивидуальный разбор анализов, выявление скрытых дефицитов и пошаговый план восстановления энергии.',
    type: 'website',
    url: 'https://purrfect0.github.io/nutriciolog/',
    images: ['https://purrfect0.github.io/nutriciolog/images/anna-hero.png'],
    locale: 'ru_RU',
    siteName: 'Анна Моложенко Нутрициология',
  },
};

const jsonLdData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': '#person',
      name: 'Анна Моложенко',
      jobTitle: 'Нутрициолог, фармацевт',
      description:
        'Дипломированный фармацевт с красным дипломом и сертифицированный нутрициолог.',
      telephone: '+7-983-249-94-17',
      sameAs: ['https://t.me/molozhenkohealthy'],
    },
    {
      '@type': 'HealthAndBeautyBusiness',
      name: 'Нутрициолог Анна Моложенко',
      description:
        'Персональный разбор анализов, выявление дефицитов и составление программ оздоровления.',
      telephone: '+7-983-249-94-17',
      url: 'https://purrfect0.github.io/nutriciolog/',
      priceRange: '$$',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2250%22 fill=%22%235C2328%22/><text y=%22.65em%22 font-size=%2255%22 x=%2250%22 text-anchor=%22middle%22 fill=%22%23B8934A%22 font-family=%22serif%22 font-style=%22italic%22 font-weight=%22bold%22>АМ</text></svg>"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,400;1,600;1,700&family=Nunito:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="bg-cream-100 text-charcoal antialiased selection:bg-terracotta selection:text-white">
        {children}
      </body>
    </html>
  );
}

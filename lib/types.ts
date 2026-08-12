export interface PainPointItem {
  id: string;
  question: string;
  icon: string;
  description: string;
}

export interface MethodologyStep {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface ServiceTier {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  period?: string;
  badge?: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
  ctaAction: 'telegram' | 'modal' | 'contact';
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  tag: string;
  rating: number;
  text: string;
  result: string;
}

export interface QuizQuestion {
  id: number;
  symptom: string;
  category: string;
  hint?: string;
}

export interface CredentialItem {
  id: string;
  title: string;
  description: string;
  isHighlight?: boolean;
}

export interface ContactInfo {
  phone: string;
  phoneRaw: string;
  telegramChannel: string;
  telegramUsername: string;
  labPartner: string;
  labCheckupName: string;
  discountAmount: string;
}

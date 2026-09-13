export interface QuizOption {
  id: string;
  label: string;
  sublabel?: string;
  iconName?: string;
  points: number; // Stagnation / toxicity score
  badge?: string;
}

export interface QuestionImageCard {
  imageUrl?: string;
  caption?: string;
  badge?: string;
  alt?: string;
}

export interface QuizQuestion {
  id: number;
  step: number;
  category?: string;
  question: string;
  subtitle?: string;
  note?: string;
  imageCard?: QuestionImageCard;
  options: QuizOption[];
  allowsMultiple?: boolean;
}

export interface UserAnswers {
  [questionId: number]: string | string[];
}

export interface DiagnosticData {
  stagnationPercentage: number;
  severityLevel: 'Leve' | 'Moderado' | 'Acentuado' | 'Crítico';
  estimatedFecalWeight: string; // e.g. "3.5 kg a 5.8 kg"
  toxinAccumulationScore: number;
  primaryBlocker: string;
  recoveryEstimatedDays: number;
  recommendation: string;
}

export interface Testimonial {
  id: string;
  name: string;
  age: number;
  city: string;
  daysToRelief: string;
  weightLost: string;
  quote: string;
  avatarUrl: string;
  rating: number;
  verified: boolean;
}

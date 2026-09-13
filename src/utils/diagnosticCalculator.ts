import { UserAnswers, DiagnosticData } from '../types';
import { QUIZ_QUESTIONS } from '../data/quizQuestions';

export function calculateDiagnostic(answers: UserAnswers): DiagnosticData {
  let totalScore = 0;
  let maxPossibleScore = 0;

  QUIZ_QUESTIONS.forEach((q) => {
    const selectedId = answers[q.id];
    // Find max score for this question
    const maxOption = Math.max(...q.options.map((o) => o.points));
    maxPossibleScore += maxOption;

    if (selectedId) {
      const option = q.options.find((o) => o.id === selectedId);
      if (option) {
        totalScore += option.points;
      }
    }
  });

  const percentage = Math.min(
    Math.max(Math.round((totalScore / (maxPossibleScore || 1)) * 100), 45),
    98
  );

  let severityLevel: DiagnosticData['severityLevel'] = 'Moderado';
  let estimatedFecalWeight = '2,4 kg a 3,8 kg';
  let recoveryEstimatedDays = 3;

  if (percentage >= 85) {
    severityLevel = 'Crítico';
    estimatedFecalWeight = '4,2 kg a 6,8 kg';
    recoveryEstimatedDays = 1;
  } else if (percentage >= 70) {
    severityLevel = 'Acentuado';
    estimatedFecalWeight = '3,1 kg a 4,9 kg';
    recoveryEstimatedDays = 2;
  } else if (percentage >= 50) {
    severityLevel = 'Moderado';
    estimatedFecalWeight = '2,0 kg a 3,5 kg';
    recoveryEstimatedDays = 3;
  } else {
    severityLevel = 'Leve';
    estimatedFecalWeight = '1,2 kg a 2,2 kg';
    recoveryEstimatedDays = 4;
  }

  const primaryBlocker =
    percentage >= 75
      ? 'Costra de heces petrificadas y atonía del plexo mientérico por acumulación crónica.'
      : 'Deshidratación osmótica del colon y bloqueo del reflejo gastrocólico matutino.';

  const recommendation =
    'Indicación inmediata para el protocolo matutino Ritual de Limpieza Profunda enfocado en desprendimiento osmótico y reactivación peristáltica natural sin laxantes.';

  return {
    stagnationPercentage: percentage,
    severityLevel,
    estimatedFecalWeight,
    toxinAccumulationScore: Math.round(percentage * 0.94),
    primaryBlocker,
    recoveryEstimatedDays,
    recommendation,
  };
}

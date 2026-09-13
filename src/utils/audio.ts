// Web Audio API based persuasive interactive sound system
export type SoundType = 'persuasive' | 'success' | 'pop' | 'chime' | 'muted';

export interface SoundOption {
  id: SoundType;
  label: string;
  description: string;
}

export const SOUND_OPTIONS: SoundOption[] = [
  {
    id: 'persuasive',
    label: 'Persuasivo ✨',
    description: 'Acorde ascendente afirmativo (Fá5 → Lá5 → Dó6) que transmite validação clínica, acerto e avanço',
  },
  {
    id: 'success',
    label: 'Vitória 🏆',
    description: 'Brilho dinâmico de conquista e recompensa imediata ao avançar',
  },
  {
    id: 'pop',
    label: 'Pop Tátil',
    description: 'Toque de bolha elástico, moderno e envolvente',
  },
  {
    id: 'chime',
    label: 'Sino Zen',
    description: 'Duas notas suaves e relaxantes',
  },
  {
    id: 'muted',
    label: 'Mudo',
    description: 'Sem efeitos sonoros',
  },
];

let audioCtx: AudioContext | null = null;
let currentSoundType: SoundType = 'persuasive'; // Padrão: Persuasivo (Validação VIP)

// Define Persuasivo como padrão ativo
if (typeof window !== 'undefined') {
  const saved = localStorage.getItem('quiz_sound_type') as SoundType | null;
  if (saved === 'persuasive' || saved === 'success' || saved === 'pop' || saved === 'chime' || saved === 'muted') {
    currentSoundType = saved;
  } else {
    currentSoundType = 'persuasive';
    localStorage.setItem('quiz_sound_type', 'persuasive');
  }
}

export const getSoundType = (): SoundType => currentSoundType;

export const setSoundType = (type: SoundType) => {
  currentSoundType = type;
  if (typeof window !== 'undefined') {
    localStorage.setItem('quiz_sound_type', type);
  }
};

const getAudioContext = (): AudioContext | null => {
  try {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return null;

    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  } catch {
    return null;
  }
};

/**
 * 1. SOM PERSUASIVO (Validação VIP & Dopamina Positiva)
 * Acorde maior ascendente com micro-arpeggio milimétrico (Fá5 → Lá5 → Dó6)
 * com sobretom harmônico cristalino e envelope dourado.
 * Transmite certeza, "decisão acertada" e validação do diagnóstico.
 */
const playPersuasiveSound = (ctx: AudioContext, now: number) => {
  const master = ctx.createGain();
  master.gain.setValueAtTime(0.085, now);

  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(3600, now);
  filter.Q.setValueAtTime(1.2, now);

  // Notas da tríade ascendente maior (Fá5 -> Lá5 -> Dó6)
  const notes = [
    { freq: 698.46, delay: 0, dur: 0.16, gainLevel: 0.75 },     // Fá5 (Fundamento / Certeza)
    { freq: 880.00, delay: 0.032, dur: 0.18, gainLevel: 0.85 },  // Lá5 (Terça Maior / Positividade)
    { freq: 1046.50, delay: 0.068, dur: 0.28, gainLevel: 1.0 },  // Dó6 (Quinta / Triunfo)
  ];

  notes.forEach(({ freq, delay, dur, gainLevel }) => {
    // Oscilador corpo quente
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now + delay);

    // Pequeno brilho harmônico no final da tríade
    const overtone = ctx.createOscillator();
    overtone.type = 'triangle';
    overtone.frequency.setValueAtTime(freq * 2, now + delay);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.001, now + delay);
    gain.gain.linearRampToValueAtTime(gainLevel, now + delay + 0.009); // Ataque estalado e confiante
    gain.gain.exponentialRampToValueAtTime(0.001, now + delay + dur);

    const overtoneGain = ctx.createGain();
    overtoneGain.gain.setValueAtTime(0.001, now + delay);
    overtoneGain.gain.linearRampToValueAtTime(gainLevel * 0.18, now + delay + 0.008);
    overtoneGain.gain.exponentialRampToValueAtTime(0.001, now + delay + dur * 0.7);

    osc.connect(gain);
    gain.connect(filter);

    overtone.connect(overtoneGain);
    overtoneGain.connect(filter);

    osc.start(now + delay);
    overtone.start(now + delay);

    osc.stop(now + delay + dur);
    overtone.stop(now + delay + dur);
  });

  filter.connect(master);
  master.connect(ctx.destination);
};

/**
 * 2. DESBLOQUEIO & VITÓRIA (Conquista / Recompensa)
 * Efeito ascendente dinâmico com sensação de avançar de fase.
 */
const playSuccessSound = (ctx: AudioContext, now: number) => {
  const master = ctx.createGain();
  master.gain.setValueAtTime(0.08, now);

  const notes = [
    { freq: 587.33, delay: 0, dur: 0.12 },     // D5
    { freq: 880.00, delay: 0.04, dur: 0.15 },    // A5
    { freq: 1174.66, delay: 0.085, dur: 0.25 }, // D6
  ];

  notes.forEach(({ freq, delay, dur }) => {
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now + delay);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.001, now + delay);
    gain.gain.linearRampToValueAtTime(0.9, now + delay + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.001, now + delay + dur);

    osc.connect(gain);
    gain.connect(master);

    osc.start(now + delay);
    osc.stop(now + delay + dur);
  });

  master.connect(ctx.destination);
};

/**
 * 3. POP TÁTIL (Bubble pop)
 */
const playPopSound = (ctx: AudioContext, now: number) => {
  const master = ctx.createGain();
  master.gain.setValueAtTime(0.08, now);

  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(2400, now);

  const osc = ctx.createOscillator();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(840, now);
  osc.frequency.exponentialRampToValueAtTime(260, now + 0.055);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.001, now);
  gain.gain.linearRampToValueAtTime(1, now + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.075);

  osc.connect(gain);
  gain.connect(filter);
  filter.connect(master);
  master.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.08);
};

/**
 * 4. SINO ZEN (Duas notas relaxantes)
 */
const playChimeSound = (ctx: AudioContext, now: number) => {
  const master = ctx.createGain();
  master.gain.setValueAtTime(0.065, now);

  const notes = [
    { freq: 554.37, delay: 0, dur: 0.15 },
    { freq: 830.61, delay: 0.04, dur: 0.18 },
  ];

  notes.forEach(({ freq, delay, dur }) => {
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now + delay);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.001, now + delay);
    gain.gain.linearRampToValueAtTime(0.9, now + delay + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, now + delay + dur);

    osc.connect(gain);
    gain.connect(master);

    osc.start(now + delay);
    osc.stop(now + delay + dur);
  });

  master.connect(ctx.destination);
};

/**
 * Executa o som atualmente configurado (ou um tipo específico solicitado).
 */
export const playSelectSound = (overrideType?: SoundType) => {
  const type = overrideType || currentSoundType;
  if (type === 'muted') return;

  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  try {
    if (type === 'persuasive') {
      playPersuasiveSound(ctx, now);
    } else if (type === 'success') {
      playSuccessSound(ctx, now);
    } else if (type === 'pop') {
      playPopSound(ctx, now);
    } else if (type === 'chime') {
      playChimeSound(ctx, now);
    }
  } catch (err) {
    console.debug('Nota de áudio:', err);
  }
};

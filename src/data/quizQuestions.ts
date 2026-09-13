import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    step: 1,
    question: '¿Cuánto tiempo llevas lidiando con el **intestino perezoso o trabado**?',
    subtitle: 'Identifica desde cuándo tu sistema digestivo opera con lentitud.',
    options: [
      {
        id: 'poucos_meses',
        label: 'Hace pocos meses',
        sublabel: 'Comenzó recientemente o sucede de forma ocasional.',
        iconName: 'Clock',
        points: 3
      },
      {
        id: '1_a_3_anos',
        label: 'De 1 a 3 años',
        sublabel: 'Ya se volvió un problema frecuente y molesto en mi rutina.',
        iconName: 'Calendar',
        points: 5
      },
      {
        id: '4_a_10_anos',
        label: 'De 4 a 10 años',
        sublabel: 'Problema crónico que afecta mi energía y mi día a día.',
        iconName: 'ShieldAlert',
        points: 7
      },
      {
        id: 'mais_10_anos',
        label: 'Más de 10 años o desde siempre',
        sublabel: 'Mi digestión siempre ha sido lenta y perezosa.',
        iconName: 'Activity',
        points: 9
      }
    ]
  },
  {
    id: 2,
    step: 2,
    question: '¿Cuál es la ==principal molestia== que sientes hoy?',
    subtitle: 'Selecciona el síntoma más marcado en tu rutina actual.',
    options: [
      {
        id: 'barriga_inchada_peso',
        label: 'Barriga inflamada, dura y pesada',
        sublabel: 'Hinchazón constante que aumenta a lo largo del día y aprieta la ropa.',
        iconName: 'TrendingUp',
        points: 7
      },
      {
        id: 'dificuldade_esforco',
        label: 'Dificultad extrema y esfuerzo al intentar evacuar',
        sublabel: 'Heces atoradas que exigen mucha fuerza física y causan dolor.',
        iconName: 'AlertTriangle',
        points: 8
      },
      {
        id: 'gases_e_colicas',
        label: 'Gases atrapados, punzadas y cólicos intestinales',
        sublabel: 'Fermentación continua que genera presión dolorosa en el abdomen.',
        iconName: 'Flame',
        points: 6
      },
      {
        id: 'intestino_paralisado',
        label: 'Días seguidos sin ninguna gana de ir al baño',
        sublabel: 'Sensación de que el intestino está totalmente dormido o paralizado.',
        iconName: 'Clock',
        points: 9
      }
    ]
  },
  {
    id: 3,
    step: 3,
    question: '¿Con qué **frecuencia** logras **evacuar**?',
    subtitle: 'El ritmo biológico saludable requiere al menos una evacuación suave al día.',
    options: [
      {
        id: 'quase_todo_dia',
        label: 'Casi todos los días, pero con mucho esfuerzo y heces pequeñas',
        sublabel: 'Heces resecas que parecen no vaciar nunca el abdomen por completo.',
        iconName: 'CalendarCheck',
        points: 4
      },
      {
        id: '2_a_3_vezes',
        label: 'Solo 2 a 3 veces por semana',
        sublabel: 'Días enteros de abdomen inflamado, pesadez y presión incómoda.',
        iconName: 'Calendar',
        points: 6
      },
      {
        id: '1_vez_ou_menos',
        label: '1 vez por semana o cada 4 a 5 días',
        sublabel: 'Retención severa con materia fecal fermentando continuamente.',
        iconName: 'AlertTriangle',
        points: 8
      },
      {
        id: 'so_com_laxante',
        label: 'Solo voy al baño tomando laxantes o tés fuertes',
        sublabel: 'Dependencia de estímulos químicos y reflejo natural bloqueado.',
        iconName: 'Pill',
        points: 10
      }
    ]
  },
  {
    id: 4,
    step: 4,
    question: '¿Cómo suele ser la **consistencia de tus heces**?',
    subtitle: 'La forma de las heces refleja el grado de deshidratación y retención en el colon.',
    imageCard: {
      imageUrl: '/assets/bristol_etapa_4.webp',
      alt: 'Escala médica de consistencia de heces: Tipo 1 a Tipo 6'
    },
    options: [
      {
        id: 'bolinhas_duras',
        label: 'Bolitas duras y secas (como heces de cabra o conejo)',
        sublabel: 'Exige esfuerzo excesivo, lastima y puede provocar fisuras.',
        iconName: 'CircleDot',
        points: 8
      },
      {
        id: 'grossas_duras',
        label: 'Trozos gruesos, duros y difíciles de expulsar',
        sublabel: 'Masa fecal reseca que raspa el canal anal al salir.',
        iconName: 'Layers',
        points: 7
      },
      {
        id: 'alterna_dura_mole',
        label: 'Alterno entre días trabados y episodios de cólicos con heces blandas',
        sublabel: 'Señal clásica de inflamación y desequilibrio de la flora intestinal.',
        iconName: 'Repeat',
        points: 7
      },
      {
        id: 'esforco_sem_saida',
        label: 'Hago mucha fuerza hasta cansarme, pero casi nada sale',
        sublabel: 'Tapón fecal reseco bloqueando la salida normal.',
        iconName: 'ZapOff',
        points: 9
      }
    ]
  },
  {
    id: 5,
    step: 5,
    question: 'Al salir del baño, ¿sientes que todavía quedaron ==heces atoradas==?',
    subtitle: 'La evacuación incompleta indica que placas antiguas siguen pegadas en el colon.',
    options: [
      {
        id: 'sempre_incompleto',
        label: '¡Sí, casi siempre! Salgo con pesadez y frustración',
        sublabel: 'Incluso forzando, el abdomen sigue hinchado y pesado.',
        iconName: 'BatteryWarning',
        points: 7
      },
      {
        id: 'frequentemente',
        label: 'Con frecuencia siento que solo salió el inicio y el resto se quedó',
        sublabel: 'Los pliegues y curvas del intestino siguen reteniendo residuos.',
        iconName: 'Hourglass',
        points: 6
      },
      {
        id: 'as_vezes',
        label: 'A veces, especialmente en días de más prisa y estrés',
        sublabel: 'Espasmos musculares que bloquean la salida completa.',
        iconName: 'HelpCircle',
        points: 4
      },
      {
        id: 'raramente_alivio',
        label: 'Rara vez me siento ligero(a) y 100% aliviado(a)',
        sublabel: 'No recuerdo la última vez que sentí el abdomen totalmente vacío.',
        iconName: 'Frown',
        points: 8
      }
    ]
  },
  {
    id: 6,
    step: 6,
    question: '¿Cómo se pone ==tu abdomen== a lo largo del día?',
    subtitle: 'Las heces retenidas fermentan continuamente, generando gases tóxicos y presión.',
    imageCard: {
      imageUrl: '/assets/imagem_etapa_6.webp',
      caption: 'Distensión visceral provocada por gases de fermentación y residuos fecales.',
      badge: 'Fisiología Abdominal',
      alt: 'Distensión e inflamación abdominal'
    },
    options: [
      {
        id: 'estufada_tarde',
        label: 'Me levanto bien, pero en la tarde mi abdomen queda enorme e inflado',
        sublabel: 'La barriga se va hinchando progresivamente hasta el final del día.',
        iconName: 'TrendingUp',
        points: 8
      },
      {
        id: 'dura_dia_todo',
        label: 'Mi barriga pasa dura, prominente e inflamada todo el tiempo',
        sublabel: 'Presión constante que llega a incomodar al sentarse y respirar.',
        iconName: 'Shield',
        points: 9
      },
      {
        id: 'gases_pontadas',
        label: 'Mucho dolor puntual y punzadas de gases que no logran salir',
        sublabel: 'Molestia aguda que irradia hacia las costillas y la espalda.',
        iconName: 'Flame',
        points: 7
      },
      {
        id: 'peso_pesado',
        label: 'Sensación crónica de pesadez, como si cargara una bola de boliche',
        sublabel: 'Incomodidad física continua que agota las energías del cuerpo.',
        iconName: 'Weight',
        points: 8
      }
    ]
  },
  {
    id: 7,
    step: 7,
    question: '¿Sientes que parte del peso extra en la báscula son ==heces acumuladas==?',
    subtitle: 'Estudios confirman que un colon estreñido puede retener de 2 kg a 6 kg de materia fecal endurecida.',
    options: [
      {
        id: 'certeza_peso',
        label: '¡Totalmente seguro(a)! Siento varios kilos de heces e inflamación retenidos',
        sublabel: 'Mi cintura aumenta varios centímetros por pura retención fecal.',
        iconName: 'Scale',
        points: 8
      },
      {
        id: 'quando_vai_emagrece',
        label: 'Sí, cuando logro evacuar el abdomen se desinflama y el peso baja al instante',
        sublabel: 'Señal clara de que el exceso en la cintura es materia retenida.',
        iconName: 'Sparkle',
        points: 7
      },
      {
        id: 'como_pouco_inchado',
        label: 'Sospecho que sí, porque como poco y aun así el abdomen no baja',
        sublabel: 'El metabolismo se bloquea por las toxinas reabsorbidas.',
        iconName: 'Eye',
        points: 6
      },
      {
        id: 'quero_descobrir',
        label: 'Quiero descubrir exactamente cuánto peso tóxico estoy acumulando',
        sublabel: 'Interés directo en medir la carga de residuos en el colon.',
        iconName: 'Compass',
        points: 5
      }
    ]
  },
  {
    id: 8,
    step: 8,
    question: '¿El estreñimiento afecta tu ==energía y cansancio diario==?',
    subtitle: 'Heces estancadas por más de 24h provocan que las toxinas vuelvan al torrente sanguíneo.',
    options: [
      {
        id: 'acordo_exausto',
        label: 'Despierto cansado(a) y con sensación de cuerpo pesado todos los días',
        sublabel: 'El organismo pasa la noche sobrecargado tratando de filtrar toxinas.',
        iconName: 'Moon',
        points: 8
      },
      {
        id: 'moleza_pos_refeicao',
        label: 'Siento un desgano y pesadez intensa justo después de comer',
        sublabel: 'El sistema digestivo agota su energía intentando mover la masa trabada.',
        iconName: 'Coffee',
        points: 6
      },
      {
        id: 'desanimo_rotina',
        label: 'Sensación de desánimo constante para tareas simples del día',
        sublabel: 'La absorción de nutrientes vitales y vitaminas se ve comprometida.',
        iconName: 'BatteryLow',
        points: 7
      },
      {
        id: 'dor_de_cabeca',
        label: 'Dolores de cabeza frecuentes, mal sabor de boca y pesadez en los hombros',
        sublabel: 'Reflejo clásico de toxinas acumuladas en el intestino grueso.',
        iconName: 'AlertCircle',
        points: 8
      }
    ]
  },
  {
    id: 9,
    step: 9,
    question: '¿Notas que tu ==humor y paciencia se desploman== cuando estás con el estómago trabado?',
    subtitle: 'Más del 90% de la serotonina (hormona del bienestar) se produce en las paredes del intestino.',
    options: [
      {
        id: 'muito_irritado',
        label: '¡Sí! Me pongo de mal humor, con poca paciencia e irritable',
        sublabel: 'La retención de residuos afecta directamente el equilibrio emocional.',
        iconName: 'Angry',
        points: 8
      },
      {
        id: 'ansiedade_foco',
        label: 'Siento mayor ansiedad, niebla mental y dificultad para concentrarme',
        sublabel: 'La inflamación intestinal envía señales de alerta al cerebro por el nervio vago.',
        iconName: 'Brain',
        points: 7
      },
      {
        id: 'autoestima_chao',
        label: 'Mi autoestima baja y me siento incómodo(a) con mi propio cuerpo',
        sublabel: 'La sensación de inflamación y pesadez destruye la confianza.',
        iconName: 'HeartCrack',
        points: 7
      },
      {
        id: 'evito_sair',
        label: 'A veces evito salir de casa por la incomodidad de la barriga hinchada',
        sublabel: 'Miedo a sentirme mal fuera de casa o vergüenza por lucir inflamado(a).',
        iconName: 'Home',
        points: 8
      }
    ]
  },
  {
    id: 10,
    step: 10,
    question: '¿Has tenido que ==desabotonarte el pantalón== o dejar de usar ciertas prendas?',
    subtitle: 'La distensión provocada por las heces retenidas roba la comodidad al vestir.',
    options: [
      {
        id: 'desabotoar_sempre',
        label: 'Siempre tengo que desabrochar el botón al sentarme en el auto o en el trabajo',
        sublabel: 'La presión en la cintura se vuelve dolorosa y sofocante.',
        iconName: 'Scissors',
        points: 7
      },
      {
        id: 'so_roupas_largas',
        label: 'Solo uso ropa muy holgada, suelta o prendas con elástico',
        sublabel: 'Mi guardarropa se volvió rehén de una inflamación que nunca se va.',
        iconName: 'Shirt',
        points: 8
      },
      {
        id: 'roupas_paradas',
        label: 'Tengo ropa guardada en el clóset que no me cierra por la barriga inflamada',
        sublabel: 'Dificultad provocada no por grasa, sino por la rigidez de la hinchazón.',
        iconName: 'Archive',
        points: 6
      },
      {
        id: 'incomodo_pontual',
        label: 'Solo en días de crisis y estreñimiento más fuerte',
        sublabel: 'Aun así causa gran incomodidad y frustración al vestirse.',
        iconName: 'CheckCircle2',
        points: 4
      }
    ]
  },
  {
    id: 11,
    step: 11,
    question: '¿Qué métodos has intentado usar para **destrabar el intestino**?',
    subtitle: 'Muchos métodos populares solo irritan la mucosa sin desprender las heces viejas.',
    options: [
      {
        id: 'laxantes_farmacia',
        label: 'Laxantes de farmacia (pastillas, gotas o supositorios)',
        sublabel: 'Fuerzan evacuaciones explosivas y vuelven el intestino aún más perezoso.',
        iconName: 'Pill',
        points: 8
      },
      {
        id: 'chas_agressivos',
        label: 'Tés de hierbas (Sen, Cáscara Sagrada o tés laxantes fuertes)',
        sublabel: 'Provocan cólicos severos, deshidratación y agreden la flora bacteriana.',
        iconName: 'Coffee',
        points: 7
      },
      {
        id: 'fibras_e_agua',
        label: 'Aumenté papaya, avena, ciruela y agua, pero la barriga solo se hinchó más',
        sublabel: 'Las fibras en un intestino seco forman una masa aún más rígida y trabada.',
        iconName: 'Apple',
        points: 8
      },
      {
        id: 'quase_tudo',
        label: 'Ya intenté de todo y nada funciona de forma duradera',
        sublabel: 'En cuanto suspendo cualquier cosa, el intestino se vuelve a trabar de inmediato.',
        iconName: 'RotateCcw',
        points: 9
      }
    ]
  },
  {
    id: 12,
    step: 12,
    question: '¿Tienes temor de volverte ==dependiente de medicamentos o tés==?',
    subtitle: 'El uso continuo de estimulantes desgasta las terminaciones nerviosas del colon.',
    options: [
      {
        id: 'panico_dependencia',
        label: '¡Sí, tengo mucho miedo! Mi intestino ya no sabe trabajar por sí solo',
        sublabel: 'Necesito dosis cada vez más altas para conseguir el mismo alivio.',
        iconName: 'ShieldAlert',
        points: 9
      },
      {
        id: 'trauma_colicas',
        label: 'Le temo a los cólicos horribles y al sudor frío que esos remedios causan',
        sublabel: 'Dolores fuertes que hacen sufrir en el baño para lograr evacuar.',
        iconName: 'AlertOctagon',
        points: 8
      },
      {
        id: 'desejo_natural',
        label: 'Quiero con urgencia un método 100% natural que restaure mi digestión',
        sublabel: 'Deseo levantarme, tomar mi café e ir al baño tranquilamente todos los días.',
        iconName: 'Leaf',
        points: 6
      },
      {
        id: 'quero_prevenir',
        label: 'Quiero resolverlo antes de que mi situación empeore todavía más',
        sublabel: 'Evitar tener que recurrir a procedimientos invasivos o lavados.',
        iconName: 'CheckCircle',
        points: 4
      }
    ]
  },
  {
    id: 13,
    step: 13,
    question: '¿Sabías que las heces viejas forman una ==costra pegada en la pared del colon==?',
    subtitle: 'Esa costra endurecida actúa como una barrera que bloquea las contracciones normales.',
    imageCard: {
      imageUrl: '/assets/imagem_etapa_13.webp',
      caption: 'Representación anatómica de la mucosa del colon y acumulación de placas endurecidas.',
      badge: 'Anatomía del Colon',
      alt: 'Mucosa del colon con retención de materia fecal'
    },
    options: [
      {
        id: 'nao_sabia_explica_tudo',
        label: '¡No lo sabía! Pero eso explica la sensación de barriga dura y pesadez constante',
        sublabel: 'Ahora entiendo por qué las fibras comunes y el agua no lograban resolverlo.',
        iconName: 'Lightbulb',
        points: 7
      },
      {
        id: 'ja_ouvi_descolar',
        label: 'Ya lo sospechaba y necesito con urgencia desprender esa materia endurecida',
        sublabel: 'Quiero hacer una limpieza profunda para reiniciar mi sistema digestivo.',
        iconName: 'Sparkles',
        points: 8
      },
      {
        id: 'suspeitava_bloqueio',
        label: 'Tiene todo el sentido, parece como si hubiera un bloqueo físico trabándolo todo',
        sublabel: 'Sensación clara de una barrera mecánica que nada disuelve.',
        iconName: 'Lock',
        points: 7
      },
      {
        id: 'chocado_urgente',
        label: 'Quiero eliminar esa materia tóxica acumulada lo más pronto posible',
        sublabel: 'Listo(a) para desobstruir el colon y desinflamar el abdomen.',
        iconName: 'Flame',
        points: 8
      }
    ]
  },
  {
    id: 14,
    step: 14,
    question: 'Si existiera un **Ritual de 3 minutos** por la mañana para **evacuar suavemente**...',
    subtitle: '100% natural, sin cólicos y sin diarrea, que ablanda la placa fecal y desinflama el abdomen.',
    options: [
      {
        id: 'quero_com_certeza',
        label: '¡Sí! Es exactamente lo que busco para ponerle fin a este problema',
        sublabel: 'Alivio diario, abdomen desinflamado y la libertad de vivir sin dolor.',
        iconName: 'CheckCheck',
        points: 8
      },
      {
        id: 'se_for_sem_colicas',
        label: 'Sí, siempre que sea seguro, sin dolores y sin químicos artificiales',
        sublabel: 'Necesito un mecanismo que respete la fisiología de mi organismo.',
        iconName: 'ShieldCheck',
        points: 7
      },
      {
        id: 'facil_adotar',
        label: 'Por supuesto, un ritual matutino simple de 3 minutos encaja en mi rutina',
        sublabel: 'Práctico y rápido de hacer a primera hora al levantarse de la cama.',
        iconName: 'SunMedium',
        points: 6
      },
      {
        id: 'ansioso_para_conhecer',
        label: 'Quiero ver ahora mismo cómo funciona este mecanismo en la práctica',
        sublabel: 'Estoy listo(a) para conocer mi resultado e iniciar el ritual.',
        iconName: 'Zap',
        points: 8
      }
    ]
  },
  {
    id: 15,
    step: 15,
    question: '¿Cuál es tu **nivel de urgencia** para **eliminar las heces atoradas** y desinflamar?',
    subtitle: 'Al seleccionar tu respuesta, tu evaluación clínica completa se calculará en tiempo real.',
    options: [
      {
        id: 'urgencia_maxima',
        label: 'URGENCIA MÁXIMA: No aguanto un día más con la barriga inflamada y trabada',
        sublabel: 'Quiero mi evaluación inmediata y acceso al Ritual de Limpieza Profunda.',
        iconName: 'Flame',
        points: 10
      },
      {
        id: 'alta_urgencia',
        label: 'ALTA: Quiero resolver esto en los próximos días y recuperar la tranquilidad',
        sublabel: 'Decidido(a) a desobstruir mi digestión de una vez por todas.',
        iconName: 'Target',
        points: 8
      },
      {
        id: 'curioso_comprometido',
        label: 'MODERADA: Quiero revisar los datos calculados y ver la explicación del mecanismo',
        sublabel: 'Quiero entender la ciencia detrás de la limpieza profunda.',
        iconName: 'Compass',
        points: 6
      }
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Marcela Valeria Costa',
    age: 52,
    city: 'Medellín, Colombia',
    daysToRelief: 'Primer día (mañana siguiente)',
    weightLost: '-4,2 kg en la 1ª semana',
    quote: 'Pasaba de 6 a 7 días sin poder ir al baño. Mi barriga parecía una sandía dura y vivía a base de laxantes que me hacían llorar de dolor. Con el Ritual de Limpieza Profunda, en el primer día a las 8 de la mañana mi intestino funcionó solo, suave, ¡sin ningún cólico! Sentí como si me hubieran quitado un peso de 10 años de encima.',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    verified: true
  },
  {
    id: '2',
    name: 'Claudia Méndez Silveira',
    age: 44,
    city: 'Puebla, México',
    daysToRelief: 'Menos de 24 horas',
    weightLost: '-5,8 kg de inflamación y heces',
    quote: 'Tomaba té de sen y eso me destrozó el estómago. Mis pantalones talla 32 no me cerraban de tan inflada que estaba. Cuando entendí el mecanismo para despegar la costra fecal e hice el ritual matutino de 3 minutos, fue impresionante. Eliminé heces oscuras y viejas que ni sabía que estaban ahí. ¡Mi cintura disminuyó 7 centímetros en 10 días!',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    verified: true
  },
  {
    id: '3',
    name: 'Carlos Alberto Ferreira',
    age: 58,
    city: 'Lima, Perú',
    daysToRelief: 'En 2 días',
    weightLost: '-3,9 kg eliminados',
    quote: 'Uno como hombre casi no habla de esto, pero llevaba más de 15 años sufriendo en silencio. Vivía de mal genio, con dolor de cabeza y sin paciencia con mi esposa. Este ritual matutino es una maravilla. Mi digestión ahora parece un reloj suizo: lo tomo en la mañana y 20 minutos después voy al baño sin ningún esfuerzo.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    verified: true
  }
];

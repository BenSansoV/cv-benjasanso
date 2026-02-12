// src/data/projects.js
export const projects = [
  {
    slug: "sql-modelado",
    pillar: "SQL & Data Modeling",
    title: "Modelo estrella + capa semántica en SQL (Video Game Sales)",
    summary:
      "Diseño de esquema estrella y vistas SQL analíticas para BI: tipificación, deduplicación, KPIs por región, rankings y YoY con window functions.",
    stack: ["MySQL", "Star Schema", "SQL Views", "Window Functions"],
    image: "/Portfolio/DiagramaSQL.png",

    highlights: [
      "Grain definido: (game_id, platform_id, year_id, publisher_id)",
      "Dimensiones limpias + tabla fact con métricas por región",
      "Vistas analíticas: Top N, participación, YoY, rankings",
    ],

    caseStudy: {
      tldr: [
        "Star schema: dims (game, platform, genre, publisher, year) + fact_sales con ventas por región.",
        "Semantic layer en SQL: vistas tipificadas + vistas analíticas reutilizables.",
        "Window functions: rankings, participación y YoY por plataforma/año.",
      ],
      context:
        "Caso demostrable usando el dataset video_game_sales. El objetivo fue pasar de un CSV crudo a una base analítica lista para BI, con un modelo estrella y una capa semántica en SQL (vistas) para reducir lógica duplicada en el dashboard.",

      problem: [
        "CSV crudo con tipificación débil (años como texto, nulos, categorías).",
        "Riesgo de duplicar métricas si el grain no queda bien definido (mismo juego en distintas plataformas/años).",
        "Transformaciones repetidas en BI (Power Query/DAX) que dificultan trazabilidad.",
      ],

      approach: [
        "Definir grain operacional para la fact: una fila por combinación (juego, plataforma, año, publisher) con ventas por región.",
        "Crear dimensiones: dim_game, dim_platform, dim_genre, dim_publisher, dim_year.",
        "Construir fact_sales con claves sustitutas y métricas NA/EU/JP/Other/Global.",
        "Exponer semantic layer con vistas: ventas por región, Top N por plataforma, rankings, participación y YoY usando window functions.",
      ],

      deliverables: [
        "Modelo estrella documentado (dim/fact) listo para BI",
        "Vistas SQL tipificadas (casting/normalización)",
        "Vistas analíticas (Top N, rankings, YoY, market share)",
      ],

      results: [
        "KPIs consistentes sin duplicación de lógica entre SQL y BI",
        "Consultas reutilizables (semantic layer) para múltiples dashboards",
        "Base preparada para escalar: nuevas métricas/regiones sin romper reportes",
      ],

      notes:
        "Dataset público (video_game_sales). Case study orientado a decisiones técnicas, no solo visualización.",
    },

    status: "Estudio de caso",
    cta: "Ver caso",
    link: "#",
  },

  {
    slug: "python-etl",
    pillar: "Python & ETL",
    title: "Pipeline ETL multi-fuente (raw → staging → mart)",
    summary:
      "ETL reproducible en Python que integra múltiples archivos, estandariza columnas, normaliza fechas y genera tablas finales listas para BI (con validaciones).",
    stack: ["Python", "Pandas", "Data Quality", "Raw/Staging/Mart"],
    image: "/Portfolio/DiagramaETL.png",

    highlights: [
      "Ingesta multi-fuente (Excel/CSV) + estandarización de schema",
      "Normalización de fechas, nulos, tipos y reglas de negocio",
      "Salida a mart lista para consumo BI + checks de calidad",
    ],

    caseStudy: {
      tldr: [
        "Inputs: múltiples fuentes (clientes/deuda/facturación/pagos) en Excel/CSV.",
        "Transformaciones: estandarización, limpieza, merges y reglas de negocio.",
        "Output: datasets mart listos para BI + validaciones (conteos, nulos, duplicados).",
      ],
      context:
        "Caso demostrable orientado a ingeniería de datos en entorno local: construir una base confiable a partir de fuentes heterogéneas y dejarla lista para modelado y visualización.",
      problem: [
        "Fuentes con formatos distintos (nombres de columnas, fechas, tipos).",
        "Nulos, duplicados y llaves inconsistentes que rompen merges.",
        "Necesidad de una capa ‘mart’ estable para no rehacer limpieza en BI.",
      ],
      approach: [
        "Estructura por capas: raw (copia fiel) → staging (tipificado/limpio) → mart (datasets finales).",
        "Estandarización de columnas: rename, trim, lower, diccionario de mapeo.",
        "Calidad de datos: validaciones de nulos, duplicados, rangos y conteos pre/post transformaciones.",
        "Unificación: merges controlados + llaves normalizadas + reglas de negocio.",
      ],
      deliverables: [
        "Carpetas por capa (raw/staging/mart) + scripts reproducibles",
        "Dataset(s) final(es) para BI con schema estable",
        "Checklist de calidad (logs básicos / prints controlados)",
      ],
      results: [
        "Reducción de trabajo manual y errores recurrentes por limpieza ad-hoc",
        "Dataset final consistente listo para dashboards",
        "Pipeline fácil de extender (nuevas fuentes/columnas sin romper todo)",
      ],
      notes:
        "Este case study prioriza reproducibilidad y control de calidad en un flujo ETL local.",
    },

    status: "Estudio de caso",
    cta: "Ver caso",
    link: "#",
  },

  {
    slug: "powerbi",
    pillar: "Power BI",
    title: "Dashboard ejecutivo: deuda, recaudación y riesgo",
    summary:
      "Panel orientado a decisiones: priorización de gestión, segmentación por mora y lectura de riesgo para accionar estrategias de cobranza y reducción de deuda.",
    stack: ["Power BI", "Modelado de Datos", "DAX", "KPIs"],
    image: "/Portfolio/Dashboard1.png",

    highlights: [
      "Insights accionables: qué segmento explica la deuda y dónde atacar primero",
      "KPIs operacionales + gerenciales: recaudación, aging, riesgo y tendencia",
      "Modelo de datos pensado para consistencia (no “todo en una tabla”)",
    ],

    caseStudy: {
      tldr: [
        "Objetivo: decidir dónde atacar primero la deuda (aging buckets).",
        "Salida: KPIs + distribución por mora + tendencia y contribución por bucket.",
        "Uso: priorización de gestión + monitoreo de recuperación por tramo.",
      ],
      context:
        "El negocio necesitaba visibilidad clara para entender el comportamiento de deuda y recaudación. El desafío no era 'hacer un dashboard', sino habilitar decisiones: dónde está el problema, cómo evoluciona y qué acciones priorizar.",
      problem: [
        "Mucha información disponible pero poca claridad para priorizar acciones.",
        "Segmentación poco estándar (mora/riesgo) que generaba interpretaciones distintas entre áreas.",
        "Dificultad para explicar variaciones (mes a mes) y su causa.",
      ],
      approach: [
        "Diseño orientado a decisiones: 3 preguntas guía (qué pasa, por qué pasa, qué hago ahora).",
        "Modelo de datos consistente (dimensiones + hechos) para medidas confiables.",
        "DAX para KPIs y variaciones: tendencia, aportes por segmento, comparativos.",
        "Visuales con foco: aging buckets, ranking de contribución, evolución temporal y drill-down.",
      ],
      deliverables: [
        "Dashboard ejecutivo con navegación simple (1-2 clicks a insights clave).",
        "Definición de métricas y segmentación estándar (aging/riesgo).",
        "Medidas DAX reutilizables (KPIs, variaciones, participación).",
      ],
      results: [
        "Priorización clara: identificar buckets que explican el mayor % del saldo.",
        "Gestión más eficiente: foco en tramos con mayor impacto vs casos dispersos.",
        "Lectura de tendencia: detectar empeoramiento/mejora por bucket mes a mes.",
      ],
      notes:
        "El foco del case study es el 'insight accionable'. El panel se construye como herramienta para concluir y priorizar, no como fin en sí mismo.",
    },

    status: "Demo disponible",
    cta: "Ver caso",
    link: "#",

    demoLabel: "Ver demo",
    demoLink: "https://lookerstudio.google.com/u/0/reporting/96b43020-59ae-4c6b-9750-a9acce9ad071/page/nH7hF",

  },

  {
    slug: "ml",
    pillar: "Machine Learning",
    title: "Scoring de pago + estimación de tiempo de pago (2 etapas)",
    summary:
      "Modelo de clasificación para probabilidad de pago + regresión para estimar meses al pago. Enfoque práctico: segmentación accionable para priorizar gestión.",
    stack: ["Python", "Pandas", "Scikit-learn", "Clasificación", "Regresión"],
    images: [
      "/Portfolio/Dashboard3.png",
      "/Portfolio/Dashboard3pt2.png",
    ],

    highlights: [
      "Clasificación: pagador / probable / no pagador para priorizar cartera",
      "Regresión: estimación de meses al pago para planificar gestión",
      "Diseñado como sistema de decisión, no solo métrica de accuracy",
    ],

    caseStudy: {
      tldr: [
        "Objetivo: priorizar gestión de cartera según probabilidad y horizonte de pago.",
        "Etapa 1: clasificación para segmentar clientes (pagador / probable / no).",
        "Etapa 2: regresión solo sobre pagadores/probables para estimar tiempo al pago.",
      ],
      context:
        "Cuando hay muchos casos por gestionar, el valor del ML está en ordenar la acción: a quién llamar primero, con qué intensidad y qué esperar en tiempo. Este caso propone un scoring práctico para apoyar priorización y planificación.",
      problem: [
        "Cartera grande: imposible gestionar todo con la misma intensidad.",
        "Reglas manuales funcionan, pero son difíciles de calibrar y mantener.",
        "Necesidad de estimar no solo ‘si paga’, sino ‘cuándo paga’ para operar mejor.",
      ],
      approach: [
        "Feature engineering orientado a negocio (historial, comportamiento, estado, bucket, etc.).",
        "Modelo de clasificación para probabilidad de pago y segmentación accionable.",
        "Modelo de regresión entrenado solo con el grupo que tiene sentido proyectar (pagadores).",
        "Evaluación más allá de métricas: foco en utilidad operacional (priorización y timing).",
      ],
      deliverables: [
        "Notebook reproducible (entrenamiento + evaluación + predicción).",
        "Tabla final con score, segmento y meses esperados al pago.",
        "Base lista para integrarse a BI (segmentos + métricas de control).",
      ],
      results: [
        "Priorización clara: separar gestión intensiva vs seguimiento liviano.",
        "Mejor planificación: estimación de meses al pago para calendarizar acciones.",
        "Modelo pensado para operación: segmentación interpretable y replicable.",
      ],
      notes:
        "Caso presentado como enfoque técnico y operacional (sin exponer datos sensibles).",
    },

    status: "Notebook disponible",
    cta: "Ver caso",
    link: "#",

    demoLabel: "Ver Colab",
    demoLink: "https://colab.research.google.com/drive/1mG29RC6p2kr9vyBi83I_aW6eUeZdqMyq?authuser=2",
  },
];

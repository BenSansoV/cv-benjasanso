// src/data/projects.js
export const projects = [
  {
    slug: "sql-modelado",
    pillar: "SQL & Data Modeling",
    title: "Modelo estrella + capa semántica en SQL (Video Game Sales)",
    summary: [
      `Caso práctico de modelado dimensional en SQL utilizando el dataset video_game_sales.csv (Kaggle). A partir de una tabla cruda sin definición clara de grain ni separación de entidades, 
      se diseñó un esquema estrella con dimensiones normalizadas (juego, plataforma, publisher, año, género) y una tabla fact con métricas de ventas por región. Se implementó además una capa semántica
      basada en vistas SQL analíticas (agregaciones, rankings y cálculos YoY con window functions) para desacoplar la lógica de negocio del BI y asegurar consistencia en el consumo analítico.
      `
    ],
    stack: ["MySQL", "Star Schema", "SQL Views", "Window Functions"],
    image: "/Portfolio/DiagramaSQL.png",

    highlights: [
      "Grain definido: (game_id, platform_id, year_id, publisher_id)",
      "Dimensiones limpias + tabla fact con métricas por región",
      "Vistas analíticas: Top N, participación, YoY, rankings",
    ],
    steps: [
      {
        type: "text",
        title: "1) Punto de partida",
        text: "Partí desde el CSV crudo (video_game_sales) y definí el objetivo: transformar datos planos en una capa analítica consistente para consumo BI."
      },
      {
        type: "image",
        src: "/Portfolio/sql_schema.png",
        alt: "Schema: raw + vistas + capa analítica"
      },
      {
        type: "text",
        title: "2) Capa semántica",
        text: "Implementé una vista analítica para calcular crecimiento interanual (YoY) por plataforma usando LAG() y ranking por año con RANK()."
      },
      {
        type: "image",
        src: "/Portfolio/sql_view_yoy.png",
        alt: "CREATE VIEW YoY con LAG() y RANK()"
      },
      {
        type: "text",
        title: "3) Rankings reutilizables",
        text: "Con la base lista, construí queries/vistas para responder preguntas típicas de negocio: top juegos por plataforma/año, top N por plataforma y comparaciones."
      },
      {
        type: "image",
        src: "/Portfolio/sql_top3_platform_year.png",
        alt: "Top 3 por plataforma y año (RANK)"
      },
      {
        type: "image",
        src: "/Portfolio/sql_topn_platform.png",
        alt: "Top N por plataforma (ROW_NUMBER)"
      }
      // SQL3 opcional
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
      `Estudio de caso de ingeniería de datos enfocado en la construcción de un pipeline ETL local utilizando Python. El objetivo fue integrar múltiples fuentes heterogéneas (Excel/CSV) con 
      información de clientes, deuda, facturación y pagos, y transformarlas en datasets limpios, consistentes y listos para consumo analítico en BI. El pipeline fue diseñado bajo una arquitectura 
      por capas (raw → staging → mart) para garantizar trazabilidad, control de calidad y facilidad de extensión.`,
    stack: ["Python", "Pandas", "Data Quality", "Raw/Staging/Mart"],
    image: "/Portfolio/DiagramaETL.png",

    highlights: [
      "Ingesta multi-fuente (Excel/CSV) + estandarización de schema",
      "Normalización de fechas, nulos, tipos y reglas de negocio",
      "Salida a mart lista para consumo BI + checks de calidad",
    ],

    steps: [
      {
        type: "text",
        title: "1) Punto de partida: fuentes operativas",
        text: "Los datos provenían de múltiples archivos Excel diarios con estructuras variables. El primer objetivo fue asegurar trazabilidad y preservar los archivos originales sin modificación (raw layer)."
      },
      {
        type: "image",
        src: "/Portfolio/etl_data_raw.png",
        alt: "Estructura carpeta raw con múltiples fuentes"
      },
      {
        type: "text",
        title: "2) Limpieza y estandarización (staging)",
        text: "Se implementaron transformaciones para estandarizar columnas, convertir tipos, validar identificadores y eliminar registros inválidos. La lógica de calidad quedó encapsulada en módulos reutilizables."
      },
      {
        type: "image",
        src: "/Portfolio/etl_data_staging.png",
        alt: "Transformación en staging (ejemplo stg_pagos.py)"
      },
      {
        type: "text",
        title: "3) Construcción de capa analítica (mart)",
        text: "Se generaron dimensiones y tablas fact orientadas a negocio, incluyendo métricas de deuda y aging histórico, habilitando análisis temporal y priorización operativa."
      },
      {
        type: "image",
        src: "/Portfolio/etl_data_mart.png",
        alt: "Estructura capa mart con dimensiones y hechos"
      }
    ],

    caseStudy: {
      context:
        "La información operativa provenía de múltiples archivos Excel independientes (clientes, facturas y pagos), con formatos inconsistentes, nombres de columnas variables y ausencia de controles de calidad. Esto dificultaba calcular deuda real, aging y KPIs confiables para la gestión.",

      problem: [
        "Archivos heterogéneos sin estandarización.",
        "Inconsistencias entre facturación y pagos.",
        "Falta de trazabilidad sobre fechas de ingesta.",
        "Imposibilidad de construir indicadores confiables sin lógica repetida."
      ],

      approach: [
        "Diseño de arquitectura en capas: raw → staging → mart.",
        "Separación explícita entre transformación técnica y lógica de negocio.",
        "Estandarización de columnas, tipos y reglas de validación.",
        "Incorporación de controles de calidad (nulos, duplicados, integridad).",
        "Generación de datasets analíticos listos para BI."
      ],

      deliverables: [
        "dim_cliente: dimensión consolidada y limpia.",
        "fact_facturas: tabla transaccional de facturación.",
        "fact_pagos: tabla transaccional de pagos.",
        "mart_deuda: cálculo consolidado de deuda.",
        "mart_aging_historico: evolución temporal de mora.",
        "mart_cliente_resumen: exposición y riesgo por cliente."
      ],

      results: [
        "Base analítica consistente y reutilizable.",
        "Reducción de lógica duplicada en dashboards.",
        "KPIs de deuda y aging calculados de forma trazable.",
        "Estructura preparada para modelos de scoring y BI ejecutivo."
      ],
      notes:
        `Más allá de la implementación técnica, este proyecto permitió comprender que la calidad de los análisis depende directamente de la calidad de la capa de datos. 
        Diseñar una arquitectura estructurada (raw → staging → mart) no solo mejora la organización técnica, sino que reduce riesgos en la toma de decisiones. 
        La principal lección fue que un pipeline no debe centrarse únicamente en transformar datos, sino en garantizar consistencia, trazabilidad y confiabilidad antes de 
        habilitar análisis. Este enfoque permitió construir una base sólida para dashboards ejecutivos y modelos predictivos, evitando duplicación de lógica y errores silenciosos."
      `
    },
    status: "Estudio de caso",
    cta: "Ver caso",
    link: "#",
  },

  {
    slug: "powerbi",
    pillar: "Power BI",
    title: "Dashboard ejecutivo: deuda y riesgo",
    summary:
      `Simulación basada en una experiencia profesional reciente enfocada en el desarrollo de un dashboard ejecutivo en Power BI para monitoreo de deuda y riesgo de clientes. El objetivo 
      no fue únicamente construir un panel visual, sino diseñar una herramienta de decisión que permitiera a la gerencia comprender rápidamente el estado de la cartera, identificar segmentos 
      críticos (aging buckets) y priorizar acciones de gestión.`,
    stack: ["Power BI", "Modelado de Datos", "DAX", "KPIs"],

    highlights: [
      "Insights accionables: qué segmento explica la deuda y dónde atacar primero",
      "KPIs operacionales + gerenciales: recaudación, aging, riesgo y tendencia",
      "Modelo de datos pensado para consistencia (no “todo en una tabla”)",
    ],
    steps: [
      {
        type: "text",
        title: "1) Vista General – Estado de la cartera",
        text: "Se construyó una vista ejecutiva con KPIs macro: deuda total, clientes en deuda y porcentaje de exposición. Esta vista permite entender rápidamente la magnitud del problema y su distribución por producto y medio de pago."
      },
      {
        type: "image",
        src: "/Portfolio/bi_general.png",
        alt: "Vista general de deuda y exposición"
      },

      {
        type: "text",
        title: "2) Diagnóstico – Cartera vencida (≥ 4 meses en mora)",
        text: "Se definió deuda vencida como aquella con 4 o más meses en mora. Esta vista permite visualizar concentración de saldo por antigüedad y dimensionar el riesgo real de incobrabilidad."
      },
      {
        type: "image",
        src: "/Portfolio/bi_diagnostico.png",
        alt: "Diagnóstico de deuda vencida por meses en mora"
      },

      {
        type: "text",
        title: "3) Priorización – Segmentación por riesgo",
        text: "Se clasificó la cartera en tramos (Bajo, Medio, Crítico) y se identificó que el 51% de los clientes con deuda vencida pertenece al tramo crítico. Esta vista transforma datos en decisión: dónde intervenir primero."
      },
      {
        type: "image",
        src: "/Portfolio/bi_priorizacion.png",
        alt: "Priorización de clientes por tramo de mora"
      },

      {
        type: "text",
        title: "Impacto en negocio",
        text: "El dashboard permite priorizar gestión sobre el segmento crítico, optimizar asignación de recursos de cobranza y reducir exposición estructural de la cartera."
      }
    ],

    caseStudy: {
      tldr: [
        "Objetivo: decidir dónde atacar primero la deuda (aging buckets).",
        "Salida: KPIs + distribución por mora + tendencia y contribución por bucket.",
        "Uso: priorización de gestión + monitoreo de recuperación por tramo.",
      ],
      context:
        `
        El negocio requería visibilidad clara sobre el comportamiento de la deuda y su evolución en el tiempo. 
        La información existía, pero estaba fragmentada y no permitía una lectura estratégica inmediata.
        El desafío consistió en transformar datos operacionales en una herramienta ejecutiva capaz de responder tres preguntas clave:
        ¿Dónde está el problema? ¿Cómo evoluciona? ¿Qué acción priorizo?
        `,
      problem: [
        "Falta de visualización consolidada del estado de la cartera.",
        "Dificultad para identificar segmentos críticos.",
        "Análisis manual y reactivo en lugar de proactivo.",
        "Ausencia de indicadores comparables en el tiempo."
      ],
      approach: [
        "Definición de modelo de datos estructurado con dimensiones (cliente, segmento, aging bucket) y tabla de hechos (saldo, riesgo).",
        "Estandarización de buckets de mora para evitar interpretaciones ambiguas entre áreas.",
        "Construcción de medidas DAX para KPIs clave, variaciones temporales y participación por segmento.",
        "Diseño orientado a decisión: ranking de contribución, análisis de tendencia y segmentación dinámica.",
      ],
      deliverables: [
        "Dashboard interactivo con filtros dinámicos.",
        "Visualización de aging bucket por tramo.",
        "Ranking de segmentos con mayor exposición.",
        "Análisis temporal de evolución de deuda."
      ],
      results: [
        "Identificación de segmentos con mayor concentración de riesgo.",
        "Visualización clara de la evolución mensual de la cartera.",
        "Herramienta para priorizar gestión según antigüedad de deuda.",
        "Base estructurada para toma de decisiones ejecutivas."
      ],
      notes:
        "Este proyecto permitió comprender que la visualización efectiva no se trata de mostrar datos, sino de estructurar la información para facilitar decisiones. El diseño del modelo y las medidas DAX fueron tan relevantes como la capa visual. La clave estuvo en responder preguntas estratégicas concretas: dónde está el riesgo, cómo evoluciona y qué acción tomar."
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
      `Estudio de caso de Machine Learning aplicado a priorización de cartera y planificación operativa. El objetivo fue diseñar un sistema de scoring capaz de segmentar 
      clientes según su probabilidad de pago y, adicionalmente, estimar el tiempo esperado al pago para optimizar la gestión y calendarización de acciones.`,
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
        `
        En escenarios con alta carga operativa, no es viable gestionar todos los casos con la misma intensidad. 
        El desafío consistía en transformar datos históricos en una herramienta que permitiera priorizar esfuerzos de cobranza y mejorar la planificación estratégica.
        Más allá de maximizar métricas como accuracy, el foco fue construir un sistema útil para la toma de decisiones reales.
        `,
      problem: [
        "Cartera grande: imposible gestionar todo con la misma intensidad.",
        "Reglas manuales funcionan, pero son difíciles de calibrar y mantener.",
        "Necesidad de estimar no solo ‘si paga’, sino ‘cuándo paga’ para operar mejor.",
      ],
      approach: [
        "Diseño de enfoque en dos etapas para separar clasificación de proyección temporal.",
        "Modelo de clasificación basado en Random Forest para segmentar clientes en pagadores, probables y no pagadores.",
        "Construcción de una matriz de riesgo para priorización operativa.",
        "Modelo de regresión entrenado únicamente sobre el segmento relevante para estimar meses esperados al pago.",
        "Evaluación centrada en utilidad operacional más que en métricas tradicionales aisladas."
      ],
      deliverables: [
        "Notebook reproducible (entrenamiento + evaluación + predicción).",
        "Tabla final con score, segmento y meses esperados al pago.",
        "Base lista para integrarse a BI (segmentos + métricas de control).",
      ],
      results: [
        "Segmentación clara de la cartera para asignación eficiente de recursos.",
        "Capacidad de estimar horizonte de recuperación y planificar seguimiento.",
        "Modelo interpretable y replicable para integración futura con BI.",
        "Enfoque práctico que prioriza impacto operativo sobre complejidad técnica."
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

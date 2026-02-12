export const etlDeuda = {
  slug: "etl-deuda-prosegur",
  title: "Pipeline ETL de deuda y recaudación",
  tagline:
    "Automatización completa desde múltiples fuentes hasta dashboard ejecutivo.",
  category: "Data Engineering",
  stack: ["Python", "Pandas", "MySQL", "Power BI"],
  coverImage: "/Portfolio/DiagramaETL-EN.png",

  sections: [
    {
      title: "Contexto",
      content:
        "El proceso de actualización de KPIs de deuda se realizaba manualmente mediante múltiples archivos Excel provenientes de distintas áreas.",
    },
    {
      title: "Problema",
      content:
        "El proceso demoraba varias horas diarias, existían inconsistencias en fechas, duplicados y diferencias contra reportes financieros.",
    },
    {
      title: "Solución",
      content:
        "Se construyó un pipeline en Python que integraba fuentes, limpiaba datos, normalizaba columnas, generaba métricas y exportaba dataset final listo para Power BI.",
    },
    {
      title: "Resultados",
      content: [
        "Reducción del 90% en tiempo de procesamiento diario.",
        "Mejora del 85% en precisión contra reporte financiero.",
        "Disminución del 35% en deuda vigente mediante monitoreo continuo.",
      ],
    },
  ],
};
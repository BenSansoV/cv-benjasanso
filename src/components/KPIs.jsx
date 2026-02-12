// src/components/KPIs.jsx
import { useEffect, useState } from "react";
import "./KPIs.css";
import { useLanguage } from "../context/LanguageContext";

export default function KPIs() {
  const { t } = useLanguage();

  // Traemos el bloque kpi completo y luego items
  const kpiData = t("kpi");
  const kpis = kpiData?.items ?? [];

  const [counts, setCounts] = useState(() => kpis.map(() => 0));

  useEffect(() => {
    // Reinicia si cambia kpis (o idioma)
    setCounts(kpis.map(() => 0));

    kpis.forEach((kpi, index) => {
      let start = 0;
      const end = Number(kpi.value) || 0;
      const speed = 40;

      const counter = setInterval(() => {
        start += 1;
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = start;
          return updated;
        });

        if (start >= end) clearInterval(counter);
      }, speed);
    });
  }, [kpis]);

  return (
    <section className="kpi-section">
      {kpis.map((kpi, i) => (
        <div key={i} className="kpi-card">
          <span className="kpi-value">{counts[i]}+</span>
          <p className="kpi-label">{kpi.label}</p>
        </div>
      ))}
    </section>
  );
}

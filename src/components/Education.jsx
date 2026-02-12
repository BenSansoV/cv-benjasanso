import "./Education.css";
import { useLanguage } from "../context/LanguageContext";

export default function Education() {
  const { t } = useLanguage();
  const studies = t("education", "studies", []);
  const title = t("education", "title", "Educación");

  return (
    <section className="edu-section" id="educacion">
      <h2 className="edu-title">{title}</h2>

      <div className="edu-grid">
        {studies.map((s, i) => (
          <div key={i} className="edu-card">
            <h3>{s.degree}</h3>
            <p className="edu-place">{s.place}</p>
            <p className="edu-date">{s.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

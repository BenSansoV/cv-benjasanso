// src/components/About.jsx
import "./About.css";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="about-section" id="sobre-mi">
      <div className="about-card">
        <h2>{t("about", "title")}</h2>
        <p>{t("about", "body")}</p>
      </div>
    </section>
  );
}

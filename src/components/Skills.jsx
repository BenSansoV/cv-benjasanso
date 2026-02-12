import "./Skills.css";
import { useLanguage } from "../context/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();

  const title = t("skills", "title", "Habilidades");
  const hardTitle = t("skills", "hardTitle", "Conocimientos");
  const languagesTitle = t("skills", "languagesTitle", "Idiomas");

  const softSkills = t("skills", "softSkills", []);
  const hardSkills = t("skills", "hardSkills", []);
  const languages = t("skills", "languages", []);

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">{title}</h2>

      <div className="skills-table">
        {softSkills.map((h, index) => (
          <div key={index} className="skill-row">
            <span className="skill-name">{h.name}</span>

            <div className="dots">
              {[1, 2, 3, 4, 5].map((n) => (
                <span
                  key={n}
                  className={`dot ${n <= h.level ? "filled" : ""}`}
                ></span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Conocimientos / Hard skills */}
      <h2 className="skills-title">{hardTitle}</h2>
      <div className="bars-container">
        {hardSkills.map((c, i) => (
          <div key={i} className="bar-row">
            <div className="bar-label">
              <span>{c.name}</span>
              <span className="level">{c.level}</span>
            </div>
            <div className="bar">
              <div className="bar-fill" style={{ width: `${c.percent}%` }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Idiomas */}
      <h2 className="skills-title">{languagesTitle}</h2>
      <div className="bars-container">
        {languages.map((l, i) => (
          <div key={i} className="bar-row">
            <div className="bar-label">
              <span>{l.name}</span>
              <span className="level">{l.level}</span>
            </div>
            <div className="bar">
              <div className="bar-fill" style={{ width: `${l.percent}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

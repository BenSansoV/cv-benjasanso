import { useState } from "react";
import "./Experience.css";
import { useLanguage } from "../context/LanguageContext";

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useLanguage();

  const exp = t("experience");
  const jobs = exp?.jobs ?? [];
  const title = exp?.title ?? "Experiencia";

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="exp-section" id="experiencia">
      <h2 className="exp-title">{title}</h2>

      <div className="timeline">
        {jobs.map((job, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h3 className="job-title" onClick={() => toggle(index)}>
                {job.title}
                <span className={`arrow ${openIndex === index ? "open" : ""}`}>
                  ▾
                </span>
              </h3>

              <h4>{job.company}</h4>
              <p className="date">{job.date}</p>

              <div
                className={`job-description ${
                  openIndex === index ? "show" : ""
                }`}
              >
                <ul>
                  {job.description.map((item, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

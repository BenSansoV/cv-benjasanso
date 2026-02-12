import "./Portfolio.css";
import { useState } from "react";
import { projects } from "../data/projects";
import ProjectModal from "./ProjectModal";

export default function Portfolio() {
  const [openSlug, setOpenSlug] = useState(null);

  const openProject = (slug) => setOpenSlug(slug);
  const closeModal = () => setOpenSlug(null);

  const selected = projects.find((p) => p.slug === openSlug);

  return (
    <section className="portfolio-section" id="portafolio">
      <div className="portfolio-header">
        <h2 className="portfolio-title">Proyectos</h2>
        <p className="portfolio-intro">
          4 case studies enfocados en Data Engineering, BI y Analítica. Cada uno
          está pensado para mostrar decisiones técnicas, arquitectura y resultados.
        </p>
      </div>

      <div className="portfolio-grid">
        {projects.map((p) => (
          <article key={p.slug} id={p.slug} className="project-card">
            <div className="project-top">
              <h4 className="project-pill">{p.pillar}</h4>
              <span className="project-status">{p.status}</span>
            </div>

            <h3 className="project-title">{p.title}</h3>
            <p className="project-summary">{p.summary}</p>

            <div className="project-tags">
              {p.stack.map((tag, i) => (
                <span key={i} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            <ul className="project-highlights">
              {p.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            {(p.images?.length || p.image) && (
              <div className="project-image-wrap">
                {(p.images?.length ? p.images : [p.image]).map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${p.title} - ${idx + 1}`}
                    className="project-image"
                    loading="lazy"
                  />
                ))}
              </div>
            )}

            <div className="project-cta">
              {/* ✅ Siempre mostrar "Ver caso" (modal) */}
              <button className="cta-btn" onClick={() => openProject(p.slug)}>
                {p.cta || "Ver caso"} →
              </button>

              {/* ✅ Si hay demoLink, mostrar botón demo */}
              {p.demoLink && (
                <a
                  href={p.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="cta-link"
                >
                  {p.demoLabel || "Ver demo"} ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <ProjectModal open={!!openSlug} onClose={closeModal} project={selected} />
    </section>
  );
}



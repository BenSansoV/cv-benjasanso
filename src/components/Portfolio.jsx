import "./Portfolio.css";
import { projects } from "../data/projects";

export default function Portfolio() {
  return (
    <section className="portfolio-section" id="portafolio">
      <div className="portfolio-header">
        <h2 className="portfolio-title">Proyectos</h2>
        <p className="portfolio-intro">
          4 case studies enfocados en Data Engineering, BI y Analítica. Cada uno
          muestra decisiones técnicas, arquitectura y resultados.
        </p>
      </div>

      <div className="portfolio-linear">
        {projects.map((p) => (
          <article key={p.slug} id={p.slug} className="project-block">
            <header className="project-head">
              <h4 className="project-pillar">{p.pillar}</h4>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-summary">{p.summary}</p>

              <div className="project-tags">
                {p.stack.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </header>

            {/* Imagen hero */}
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

            {/* Highlights */}
            {p.highlights?.length > 0 && (
              <ul className="project-highlights">
                {p.highlights.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
            )}

            {/* Case study */}
            {p.caseStudy && (
              <div className="project-case">
                {p.caseStudy.tldr?.length > 0 && (
                  <SectionList title="TL;DR" items={p.caseStudy.tldr} />
                )}
                {p.caseStudy.context && (
                  <SectionText title="Contexto" text={p.caseStudy.context} />
                )}
                {p.caseStudy.problem?.length > 0 && (
                  <SectionList title="Problema" items={p.caseStudy.problem} />
                )}
                {p.caseStudy.approach?.length > 0 && (
                  <SectionList title="Enfoque técnico" items={p.caseStudy.approach} />
                )}
                {p.caseStudy.deliverables?.length > 0 && (
                  <SectionList title="Entregables" items={p.caseStudy.deliverables} />
                )}
                {p.caseStudy.results?.length > 0 && (
                  <SectionList title="Resultados" items={p.caseStudy.results} />
                )}
                {p.caseStudy.notes && (
                  <SectionText title="Notas" text={p.caseStudy.notes} />
                )}
              </div>
            )}

            {p.steps?.length > 0 && (
              <div className="project-steps">
                <h4 className="project-h4">Implementación (paso a paso)</h4>

                {p.steps.map((s, i) => {
                  if (s.type === "text") {
                    return (
                      <div key={i} className="step step-text">
                        {s.title && <h5 className="step-title">{s.title}</h5>}
                        <p className="step-p">{s.text}</p>
                      </div>
                    );
                  }

                  if (s.type === "image") {
                    return (
                      <figure key={i} className="step step-image">
                        <img src={s.src} alt={s.alt} className="project-step-image" loading="lazy" />
                        {s.alt && <figcaption className="project-cap">{s.alt}</figcaption>}
                      </figure>
                    );
                  }

                  return null;
                })}
              </div>
            )}

            {/* Galería (ej: SQL) */}
            {p.gallery?.length > 0 && (
              <div className="project-gallery">
                <h4 className="project-h4">Evidencia (SQL)</h4>
                {p.gallery.map((img, i) => (
                  <figure key={i} className="project-figure">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="project-gallery-img"
                      loading="lazy"
                    />
                    {img.alt && <figcaption className="project-cap">{img.alt}</figcaption>}
                  </figure>
                ))}
              </div>
            )}

            {/* CTAs */}
            <div className="project-cta project-cta-vertical">
              {p.demoLink && (
                <a href={p.demoLink} target="_blank" rel="noreferrer" className="cta-link">
                  {p.demoLabel || "Ver demo"} ↗
                </a>
              )}
              {p.link && p.link !== "#" && (
                <a href={p.link} target="_blank" rel="noreferrer" className="cta-link">
                  {p.cta || "Abrir"} ↗
                </a>
              )}
            </div>

            <div className="project-divider" />
          </article>
        ))}
      </div>
    </section>
  );
}

function SectionText({ title, text }) {
  return (
    <div className="project-section">
      <h4 className="project-h4">{title}</h4>
      <p className="project-p">{text}</p>
    </div>
  );
}

function SectionList({ title, items }) {
  return (
    <div className="project-section">
      <h4 className="project-h4">{title}</h4>
      <ul className="project-list">
        {items.map((it, i) => <li key={i}>{it}</li>)}
      </ul>
    </div>
  );
}




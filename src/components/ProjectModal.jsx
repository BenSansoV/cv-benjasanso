// src/components/ProjectModal.jsx
import "./ProjectModal.css";

export default function ProjectModal({ open, onClose, project }) {
  if (!open || !project) return null;

  const cs = project.caseStudy;

  return (
    <div className="pm-overlay" onMouseDown={onClose}>
      <div
        className="pm-modal"
        onMouseDown={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="pm-header">
          <div>
            <div className="pm-pill">{project.pillar}</div>
            <h2 className="pm-title">{project.title}</h2>
            <p className="pm-summary">{project.summary}</p>
          </div>

          <button className="pm-close" onClick={onClose} aria-label="Cerrar">
            ✕
          </button>
        </div>

        <div className="pm-tags">
          {project.stack.map((t, i) => (
            <span key={i} className="pm-tag">{t}</span>
          ))}
        </div>

        {cs && (
          <div className="pm-body">
            <ListSection title="TL;DR" items={cs.tldr} />
            <Section title="Contexto" text={cs.context} />
            <ListSection title="Problema" items={cs.problem} />
            <ListSection title="Enfoque técnico" items={cs.approach} />
            <ListSection title="Entregables" items={cs.deliverables} />
            <ListSection title="Resultados" items={cs.results} />
            {cs.notes && <Section title="Notas" text={cs.notes} />}
          </div>
        )}
      </div>
    </div>
  );
}

function Section({ title, text }) {
  if (!text) return null;
  return (
    <div className="pm-section">
      <h3 className="pm-h3">{title}</h3>
      <p className="pm-p">{text}</p>
    </div>
  );
}

function ListSection({ title, items }) {
  if (!items?.length) return null;
  return (
    <div className="pm-section">
      <h3 className="pm-h3">{title}</h3>
      <ul className="pm-list">
        {items.map((it, i) => <li key={i}>{it}</li>)}
      </ul>
    </div>
  );
}

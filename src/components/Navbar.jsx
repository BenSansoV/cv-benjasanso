// src/components/Navbar.jsx
import "./Navbar.css";

export default function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="navbar">
      {/* ✅ Logo/NOMBRE ahora lleva a Proyectos */}
      <div className="nav-left" onClick={() => scrollTo("portafolio")}>
        <span className="nav-logo">BS</span>
        <span className="nav-name">Benjamín Sanso</span>
      </div>

      <nav className="nav-links">
        <button onClick={() => scrollTo("sql-modelado")}>SQL & Modeling</button>
        <button onClick={() => scrollTo("python-etl")}>Python ETL</button>
        <button onClick={() => scrollTo("powerbi")}>Power BI</button>
        <button onClick={() => scrollTo("ml")}>ML</button>
        <button onClick={() => scrollTo("sobre-mi")}>Sobre mí</button>
        <button onClick={() => scrollTo("contacto")}>Contacto</button>
      </nav>
    </header>
  );
}


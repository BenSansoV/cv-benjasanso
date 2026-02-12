import { useState } from "react";
import "./Hero.css";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const { t } = useLanguage();

  const handleMove = (e) => {
    setPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      className="hero-section"
      id="inicio"
      onMouseMove={handleMove}
    >
      <div
        className="hero-card"
        style={{
          background: `radial-gradient(circle at ${pos.x}px ${pos.y}px,
            var(--accent), var(--card) 70%)`,
        }}
      >
        <h1 className="hero-title">Benjamín Sanso</h1>

        <p className="hero-subtitle">
          {t("hero", "subtitle")}
        </p>
      </div>
    </section>
  );
}

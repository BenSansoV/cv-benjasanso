import "./Contact.css";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className="contact-section" id="contacto">
      <h2 className="contact-title">{t("contact", "title")}</h2>

      <div className="contact-card">
        <p>
          <strong>{t("contact", "emailLabel")}:</strong>{" "}
          <a href="mailto:benjamin.sanso.v@gmail.com">
            benjamin.sanso.v@gmail.com
          </a>
        </p>

        <p>
          <strong>{t("contact", "phoneLabel")}:</strong>{" "}
          <a href="tel:+56935262714">+56 9 3526 2714</a>
        </p>

        <p>
          <strong>{t("contact", "linkedinLabel")}:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/benjamin-sanso-vidovich/"
            target="_blank"
            rel="noopener noreferrer"
          >
            /benjamin-sanso-vidovich
          </a>
        </p>

        <div className="contact-buttons">

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/benjamin-sanso-vidovich/"
            target="_blank"
            className="btn-primary"
          >
            {t("contact", "visitLinkedin")}
          </a>

          {/* CV Español */}
          <a
            href="/Benjamin-Sanso-ES.pdf"
            download
            className="btn-secondary"
          >
            {t("contact", "downloadCvEs")}
          </a>

          {/* CV Inglés */}
          <a
            href="/Benjamin-Sanso-EN.pdf"
            download
            className="btn-secondary"
          >
            {t("contact", "downloadCvEn")}
          </a>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import "./CertificatesView.css";

/**
 * RESPONSIBILITY: Display certificates and achievements
 */
const certificates = [
  {
    title: "Fullstack Certificate (Codecademy)",
    type: "image",
    file: "/Fullstack-Certificate.jpg",
    description:
      "Awarded by Codecademy for completing the Fullstack Engineer career path, covering HTML, CSS, JavaScript, React, Node.js, Express, SQL, and deployment best practices.",
  },
  {
    title: "Coursera Certificate (Meta Fullstack Developer)",
    type: "pdf",
    file: "/Coursera.pdf",
    description:
      "Issued by Coursera for successfully finishing a specialized course, demonstrating proficiency in modern web development and project-based learning.",
  },
  {
    title: "Fullstack Open Certificate (Helsinki University)",
    type: "image",
    file: "/certificate-fullstack.png",
    description:
      "Fullstack Open certificate from Helsinki University, awarded for mastering modern web development including React, Redux, Node.js, MongoDB, GraphQL, TypeScript, testing, and CI/CD.",
  },
];

const CertificatesView: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const cert = certificates[currentIdx];

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentIdx((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="view certificates-view">
      <header className="cert-header">
        <h1>Certificates</h1>
      </header>
      <section className="cert-card">
        <h2 className="cert-title">{cert.title}</h2>
        <p className="cert-description">{cert.description}</p>
        <div className="cert-media-wrapper">
          {cert.type === "image" ? (
            <img src={cert.file} alt={cert.title} className="cert-img" />
          ) : (
            <div className="cert-pdf-container">
              <iframe
                src={`${cert.file}#page=1&zoom=71%`}
                title={cert.title}
                className="cert-pdf-iframe"
              />
            </div>
          )}
        </div>
        <div className="cert-nav-btns">
          <button onClick={handlePrev} className="cert-nav-btn">
            Back
          </button>
          <span className="cert-page-counter">
            {currentIdx + 1} / {certificates.length}
          </span>
          <button onClick={handleNext} className="cert-nav-btn">
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default CertificatesView;

import React from "react";
import "./CVView.css";

/**
 * RESPONSIBILITY: Display CV/Resume as embedded PDF
 * Allows viewing and downloading the CV directly on the site
 */
const CVView: React.FC = () => {
  return (
    <div className="view cv-view">
      <header className="cv-header">
        <h1>Curriculum Vitae</h1>
      </header>

      {/* PDF Viewer using iframe */}
      <div className="cv-container">
        <iframe
          src="/CV.pdf#page=1&zoom=100%"
          title="Curriculum Vitae"
          className="pdf-viewer-iframe"
        />
      </div>
    </div>
  );
};

export default CVView;

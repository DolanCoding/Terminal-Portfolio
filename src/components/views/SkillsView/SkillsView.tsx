import React from "react";
import "./SkillsView.css";

/**
 * RESPONSIBILITY: Display technical skills and expertise
 * Shows categorized skills in sections matching portfolio design standards
 */
const SkillsView: React.FC = () => {
  return (
    <div className="view skills-view">
      <header className="skills-header">
        <h1>Technical Skills</h1>
      </header>

      {/* Introduction Section */}
      <section className="skills-intro">
        <p>
          I've built a diverse technical foundation across{" "}
          <span className="highlight">frontend</span>,<span className="highlight">backend</span> and{" "}
          <span className="highlight">DevOps</span> technologies. Each skill has been earned through
          hands-on experience and continuous learning.
        </p>
        <p>
          My approach to development is rooted in clean architecture and the{" "}
          <span className="highlight">Single Responsibility Principle</span>. I believe that
          well-structured code is not just easier to maintain—it's more scalable, testable, and
          enjoyable to work with. I consistently apply these principles across both frontend and
          backend applications.
        </p>
      </section>

      {/* Skills Categories */}
      <div className="skills-container">
        <section className="skill-category-card">
          <h3 className="category-title">🎨 Frontend Development</h3>
          <div className="skill-tags">
            <span className="skill-tag">React</span>
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">JavaScript ES6+</span>
            <span className="skill-tag">Tailwind CSS</span>
            <span className="skill-tag">Responsive Design</span>
          </div>
        </section>

        <section className="skill-category-card">
          <h3 className="category-title">⚙️ Backend Development</h3>
          <div className="skill-tags">
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">Express.js</span>
            <span className="skill-tag">REST APIs</span>
            <span className="skill-tag">Python</span>
          </div>
        </section>

        <section className="skill-category-card">
          <h3 className="category-title">🗄️ Databases & Storage</h3>
          <div className="skill-tags">
            <span className="skill-tag">PostgreSQL</span>
            <span className="skill-tag">MongoDB</span>
            <span className="skill-tag">SQL</span>
          </div>
        </section>

        <section className="skill-category-card">
          <h3 className="category-title">🔧 Tools & DevOps</h3>
          <div className="skill-tags">
            <span className="skill-tag">Git</span>
            <span className="skill-tag">Linux</span>
          </div>
        </section>

        <section className="skill-category-card">
          <h3 className="category-title">🏗️ Architecture & Principles</h3>
          <div className="skill-tags">
            <span className="skill-tag">Single Responsibility</span>
            <span className="skill-tag">Component Architecture</span>
            <span className="skill-tag">Clean Code</span>
            <span className="skill-tag">State Management</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SkillsView;

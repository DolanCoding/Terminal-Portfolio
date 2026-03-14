import React, { useState } from "react";
import "./ProjectsView.css";

const projects = [
  {
    name: "Portfolio Terminal",
    description:
      "A web-based terminal-style portfolio built with React and TypeScript. It mimics a command-line interface and includes custom views routed via a command parser, a keyboard-accessible sidebar, and a searchable command palette. Features include dynamic document embedding, interactive project previews with thumbnail galleries, and responsive styling driven by CSS variables. The project is optimized for developer experience using Vite and focuses on accessibility, performance, and a consistent terminal-themed UI.",
    thumbnails: ["/Portfolio1.png", "/Portfolio2.png", "/Portfolio3.png"],
    tech: [
      {
        name: "React",
        desc: "Used to build the interactive component-based UI and manage component composition (views, modal, and terminal components).",
      },
      {
        name: "TypeScript",
        desc: "Provides static typing for safer code and improved editor tooling.",
      },
      {
        name: "Vite",
        desc: "Dev server and bundler enabling fast builds and HMR during development.",
      },
      { name: "CSS", desc: "Custom styling and the terminal theme implementation." },
    ],
    github: "https://github.com/yourusername/portfolio-terminal",
    live: "https://yourdomain.com/portfolio-terminal",
  },
  {
    name: "Learning By Playing",
    description:
      "A gamified JavaScript learning platform using React, TypeScript, and Express, focused on SRP refactoring patterns and interactive lessons.",
    thumbnails: ["/lbp-thumb1.png", "/lbp-thumb2.png", "/lbp-thumb3.png"],
    tech: [
      {
        name: "React",
        desc: "Used for building lesson and exercise components and composing reusable UI patterns.",
      },
      {
        name: "TypeScript",
        desc: "Type safety across the frontend and shared types for reliability.",
      },
      {
        name: "Express",
        desc: "Used to build frontend components and handle client-side interactions and rendering.",
      },
      {
        name: "Postgres",
        desc: "Relational database storing lessons, user progress, and metadata.",
      },
    ],
    github: "https://github.com/yourusername/learning-by-playing",
  },
  {
    name: "Fullstack Open",
    description:
      "A modern web development course project, covering React, Redux, Node.js, MongoDB, GraphQL, TypeScript, testing, and CI/CD.",
    thumbnails: [
      "/fullstack-open-thumb1.png",
      "/fullstack-open-thumb2.png",
      "/fullstack-open-thumb3.png",
    ],
    tech: [
      { name: "React", desc: "Frontend UI and interactive course components." },
      {
        name: "Redux",
        desc: "Manages global application state such as course progress and exercises.",
      },
      { name: "Node.js", desc: "Server-side runtime powering backend APIs and scripts." },
      { name: "MongoDB", desc: "Document database used for flexible course and user data models." },
      { name: "GraphQL", desc: "API layer allowing efficient and flexible client queries." },
    ],
    github: "https://github.com/yourusername/fullstack-open-project",
  },
];

const ProjectsView: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [thumbnailIdx, setThumbnailIdx] = useState<number | null>(null);
  const project = projects[currentIdx];

  const getFilename = (path: string | null) => {
    if (!path) return `${project.name} - Preview`;
    const parts = path.split("/");
    return parts[parts.length - 1] || path;
  };

  const prevThumbnail = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (thumbnailIdx === null) return;
    const len = project.thumbnails.length;
    setThumbnailIdx(thumbnailIdx === 0 ? len - 1 : thumbnailIdx - 1);
  };

  const nextThumbnail = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (thumbnailIdx === null) return;
    const len = project.thumbnails.length;
    setThumbnailIdx((thumbnailIdx + 1) % len);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentIdx((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="view projects-view">
      <header className="projects-header">
        <h1>Projects</h1>
      </header>
      <section className="project-intro">
        <div className="project-name-row">
          <h2 className="project-name">{project.name}</h2>
          <div className="project-links">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link project-github"
                aria-label={`Open ${project.name} on GitHub`}
              >
                GitHub
              </a>
            ) : null}
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link project-live"
                aria-label={`Open live site for ${project.name}`}
              >
                Live
              </a>
            ) : null}
          </div>
        </div>
        <p className="project-description">{project.description}</p>
      </section>

      <section className="project-thumbnails-section">
        <div className="projects-thumbnails">
          {project.thumbnails.map((thumb, idx) => (
            <img
              key={idx}
              src={thumb}
              alt={`${project.name} thumbnail ${idx + 1}`}
              className="project-thumb"
              onClick={() => setThumbnailIdx(idx)}
            />
          ))}
        </div>
      </section>

      <section className="project-tech-section">
        <div className="project-tech">
          <h3 className="project-tech-title">Tech Stack</h3>
          <div className="project-tech-list">
            {project.tech &&
              project.tech.map((t: any, i: number) => (
                <div key={i} className="tech-item">
                  <div className="tech-name">{t.name}</div>
                  <div className="tech-desc">{t.desc}</div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="project-nav">
        <div className="projects-nav-btns">
          <button onClick={handlePrev} className="projects-nav-btn">
            Back
          </button>
          <button onClick={handleNext} className="projects-nav-btn">
            Next
          </button>
        </div>
      </section>
      {thumbnailIdx !== null ? (
        <div className="project-preview-modal" onClick={() => setThumbnailIdx(null)}>
          <div className="project-preview-window" onClick={(e) => e.stopPropagation()}>
            <div className="project-preview-header">
              <span className="project-preview-title">
                <span className="project-preview-filename">
                  {getFilename(thumbnailIdx !== null ? project.thumbnails[thumbnailIdx] : null)}
                </span>
              </span>
              <div className="project-preview-controls">
                <span className="project-preview-dot green" aria-hidden>
                  +
                </span>
                <button
                  className="project-preview-dot yellow"
                  aria-label="Minimize / close preview"
                  onClick={() => setThumbnailIdx(null)}
                >
                  −
                </button>
                <button
                  className="project-preview-dot red"
                  aria-label="Close preview"
                  onClick={() => setThumbnailIdx(null)}
                >
                  <span>✕</span>
                </button>
              </div>
            </div>

            <div className="project-preview-content">
              <img
                src={project.thumbnails[thumbnailIdx]}
                alt={`${project.name} preview`}
                className="project-preview-img-large"
              />
            </div>
            <div className="project-preview-nav" onClick={(e) => e.stopPropagation()}>
              <button
                className="project-preview-nav-btn"
                onClick={prevThumbnail}
                aria-label="Previous thumbnail"
              >
                ◀
              </button>
              <div className="project-preview-nav-counter">
                {(thumbnailIdx ?? 0) + 1} / {project.thumbnails.length}
              </div>
              <button
                className="project-preview-nav-btn"
                onClick={nextThumbnail}
                aria-label="Next thumbnail"
              >
                ▶
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProjectsView;

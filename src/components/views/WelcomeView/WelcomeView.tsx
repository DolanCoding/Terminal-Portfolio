import React from "react";
import "./WelcomeView.css";
import MatrixRain from "./MatrixRain";
import { getValidCommands } from "../../../utils/commandRouter";

/**
 * RESPONSIBILITY: Display welcome/greeting screen
 * Clean, modern portfolio interface with cyberpunk terminal aesthetic
 */
const commandDescriptions: Record<string, string> = {
  about: "Learn about me and my background",
  skills: "View technical expertise & tools",
  projects: "Portfolio details and projects",
  certificates: "View certificates & achievements",
  welcome: "Return to welcome screen",
  cv: "Download/View my CV",
  contact: "Get in touch and contact information",
};

const WelcomeView: React.FC = () => {
  const commands = getValidCommands();

  const fullText =
    "Explore my projects, skills, and professional experience through this interactive terminal interface. This portfolio is built with React, TypeScript, and Vite. Type a command below to navigate.";

  // typing logic removed — render static content

  return (
    <div className="welcome-view">
      {/* Matrix Rain Animation - Replaces headline */}
      <MatrixRain />

      {/* Introduction Section */}
      <section className="welcome-section">
        <p className="welcome-description">
          Explore my projects, skills, and professional experience through this interactive terminal
          interface. This portfolio is built with <span className="tech-highlight">React</span>,{" "}
          <span className="tech-highlight">TypeScript</span>, and{" "}
          <span className="tech-highlight">Vite</span>. Type a command below to navigate.
        </p>
      </section>

      {/* Commands Section */}
      <section className="welcome-section welcome-commands">
        <h2 className="section-heading">Available Commands</h2>
        <div className="commands-grid">
          {commands.map((cmd, idx) => (
            <div key={idx} className="command-card">
              <span className="command-key">{cmd}</span>
              <span className="command-separator">→</span>
              <span className="command-description">
                {commandDescriptions[cmd] || "No description available"}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="welcome-section">
        <p className="welcome-description">
          In Addition to the default navigation via the sidebar, you can also type any of the above
          commands in the terminal
        </p>
      </section>
      <section className="welcome-section welcome-cta">
        <p>
          Type any command below and press <span className="highlight">Enter</span> to begin
          exploring.
        </p>
      </section>
    </div>
  );
};

export default WelcomeView;

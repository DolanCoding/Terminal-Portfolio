import React, { useState, useRef } from "react";
import Sidebar from "../Sidebar/Sidebar";
import TerminalInput from "../TerminalInput/TerminalInput";
import WelcomeView from "../views/WelcomeView/WelcomeView";
import SkillsView from "../views/SkillsView/SkillsView";
import AboutView from "../views/AboutView/AboutView";
import ProjectsView from "../views/ProjectsView/ProjectsView";
import CertificatesView from "../views/CertificatesView/CertificatesView";
import ContactView from "../views/ContactView/ContactView";
import CVView from "../views/CVView/CVView";
import ErrorView from "../views/ErrorView/ErrorView";
import { routeCommand, ViewState } from "../../utils/commandRouter";
import "./Terminal.css";
import "../views/views.css";

/**
 * RESPONSIBILITY: Main terminal container - layout shell for the application
 * Routes commands to appropriate views and manages the display state
 */
const Terminal: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewState>("welcome");
  const [lastCommand, setLastCommand] = useState<string>("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const displayAreaRef = useRef<HTMLDivElement>(null);

  // Render the appropriate view component based on activeView state
  const renderView = (): React.ReactNode => {
    switch (activeView) {
      case "welcome":
        return <WelcomeView />;
      case "skills":
        return <SkillsView />;
      case "about":
        return <AboutView />;
      case "projects":
        return <ProjectsView />;
      case "certificates":
        return <CertificatesView />;
      case "contact":
        return <ContactView />;
      case "cv":
        return <CVView />;
      case "error":
        return <ErrorView command={lastCommand} />;
      default:
        return <WelcomeView />;
    }
  };

  const handleCommandSubmit = (command: string) => {
    const route = routeCommand(command);

    setActiveView(route.view);
    if (route.command) {
      setLastCommand(route.command);
    }
  };

  const handleSidebarNavigate = (view: string) => {
    setActiveView(view as ViewState);
    setSidebarOpen(false); // Close sidebar automatically
  };

  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="terminal-title">Portfolio Terminal</div>
        <div className="terminal-dots">
          <div className="dot dot-maximize">+</div>
          <div className="dot dot-minimize">−</div>
          <div className="dot dot-close">
            <span>✕</span>
          </div>
        </div>
      </div>

      <Sidebar
        onNavigate={handleSidebarNavigate}
        activeView={activeView}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />
      <div className="terminal-body">
        <div className="terminal-content">
          <div className="terminal-display-area" ref={displayAreaRef}>
            {renderView()}
          </div>
        </div>
        <div className="terminal-input-wrapper">
          <TerminalInput onCommandSubmit={handleCommandSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Terminal;

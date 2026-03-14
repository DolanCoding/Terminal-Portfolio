import React from "react";
import "./Sidebar.css";

const links = [
  { label: "Welcome", view: "welcome" },
  { label: "About", view: "about" },
  { label: "Skills", view: "skills" },
  { label: "Projects", view: "projects" },
  { label: "Certificates", view: "certificates" },
  { label: "CV", view: "cv" },
  { label: "Contact", view: "contact" },
];

interface SidebarProps {
  onNavigate: (view: string) => void;
  activeView: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ onNavigate, activeView, isOpen, setIsOpen }) => {
  const handleClick = (link: (typeof links)[0]) => {
    onNavigate(link.view);
  };

  return (
    <>
      <div className={`sidebar-menu-btn-wrapper ${isOpen ? "btn-open" : "btn-closed"}`}>
        <button className="sidebar-menu-btn" title="Menu" onClick={() => setIsOpen(!isOpen)}>
          &#9776;
        </button>
      </div>
      <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <h2 className="sidebar-title">Commands</h2>
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link.view}>
                <button
                  className={activeView === link.view ? "active" : ""}
                  onClick={() => handleClick(link)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

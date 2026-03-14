import React from "react";
import "./ErrorView.css";
import { ErrorViewProps } from "./types";

/**
 * RESPONSIBILITY: Display error message for unknown command
 * Shows when user enters an invalid command
 */
const ErrorView: React.FC<ErrorViewProps> = ({ command }) => {
  return (
    <div className="view error-view">
      <header className="error-header">
        <h2 className="error-title">⚠️ Command Not Found</h2>
      </header>

      <div className="error-content">
        <div className="error-message">
          <span className="error-cmd">{command}</span>
          <span>: command not found</span>
        </div>

        <div className="error-suggestion">
          <p>
            The command '<strong>{command}</strong>' is not recognized.
          </p>
          <br />
          <p>
            Type <strong>help</strong> to see all available commands.
          </p>
        </div>
      </div>

      <footer className="error-footer">
        <p>Did you mean one of these?</p>
        <div className="suggestion-list">
          <span className="suggestion">help</span>
          <span className="suggestion">about</span>
          <span className="suggestion">skills</span>
          <span className="suggestion">about</span>
          <span className="suggestion">clear</span>
        </div>
      </footer>
    </div>
  );
};

export default ErrorView;

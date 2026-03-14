import React, { useState, useRef } from "react";
import "./TerminalInput.css";
import { TerminalInputProps } from "./types";

/**
 * RESPONSIBILITY: Render input field and handle user text entry
 * Manages only the input UI state, delegates command processing to parent
 */
const TerminalInput: React.FC<TerminalInputProps> = ({ onCommandSubmit }) => {
  const [input, setInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      onCommandSubmit(input);
      setInput("");
      // Keep focus on input for next command
      inputRef.current?.focus();
    }
  };

  React.useEffect(() => {
    // Auto-focus input on mount
    inputRef.current?.focus();
  }, []);

  return (
    <div className="input-line">
      <span className="prompt">visitor@portfolio:~$</span>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        className="terminal-input"
        autoFocus
        spellCheck="false"
      />
    </div>
  );
};

export default TerminalInput;

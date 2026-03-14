/**
 * Command Router - Maps commands to view states
 * RESPONSIBILITY: Validate and route commands to appropriate views
 */

export type ViewState =
  | "welcome"
  | "skills"
  | "projects"
  | "certificates"
  | "about"
  | "contact"
  | "cv"
  | "error";

export interface RouteResult {
  view: ViewState;
  command?: string; // Used for error view
}

const VALID_COMMANDS: Record<string, ViewState> = {
  about: "about",
  skills: "skills",
  projects: "projects",
  certificates: "certificates",
  welcome: "welcome",
  cv: "cv",
  contact: "contact",
};

/**
 * Routes a command to the appropriate view state
 * @param command - The command entered by the user
 * @returns RouteResult with the target view and optional error data
 */
export const routeCommand = (command: string): RouteResult => {
  const normalizedCommand = command.trim().toLowerCase();

  if (normalizedCommand === "") {
    return { view: "welcome" };
  }

  const targetView = VALID_COMMANDS[normalizedCommand];

  if (targetView) {
    return { view: targetView };
  }

  // Unknown command - show error view
  return {
    view: "error",
    command: normalizedCommand,
  };
};

/**
 * Checks if a command is valid
 * @param command - The command to check
 * @returns boolean
 */
export const isValidCommand = (command: string): boolean => {
  const normalized = command.trim().toLowerCase();
  return normalized in VALID_COMMANDS;
};

/**
 * Gets all valid commands
 * @returns Array of valid command strings
 */
export const getValidCommands = (): string[] => {
  return Object.keys(VALID_COMMANDS);
};

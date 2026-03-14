/**
 * Represents a single line in terminal history (command + output)
 */
export interface HistoryEntry {
  command: string;
  output: string;
}

/**
 * Command result with output text
 */
export interface CommandResult {
  output: string;
}

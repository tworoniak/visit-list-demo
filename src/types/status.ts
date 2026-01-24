// export enum NoteStatuses {
//   ERROR = "error",
//   SUCCESS = "success",
//   IN_PROGRESS = "in_progress",
// }

// export enum EncounterStatus {
//   NOT_STARTED = "not_started",
//   IN_PROGRESS = "in_progress",
//   CLOSED = "closed",
//   SENT_TO_EHR = "sent_to_ehr",
//   NOTE_READY = "note_ready",
// }

// export interface StatusConfig {
//   className: string;
//   text: string;
// }

export const NOTE_STATUSES = {
  ERROR: "error",
  SUCCESS: "success",
  IN_PROGRESS: "in_progress",
} as const;

export type NoteStatus = (typeof NOTE_STATUSES)[keyof typeof NOTE_STATUSES];

export const ENCOUNTER_STATUSES = {
  NOT_STARTED: "not_started",
  IN_PROGRESS: "in_progress",
  CLOSED: "closed",
  SENT_TO_EHR: "sent_to_ehr",
  NOTE_READY: "note_ready",
} as const;

export type EncounterStatus =
  (typeof ENCOUNTER_STATUSES)[keyof typeof ENCOUNTER_STATUSES];

export interface StatusConfig {
  className: string;
  text: string;
}

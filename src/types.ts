// export type Visit = {
//   id: string;
//   patient: string[];
//   visit_at: string;
//   status: string;
// };

// types.ts

// export interface ApiResponse {
//   data: Visit[];
// }

// export interface Visit {
//   id: string;
//   visit_at: string; // ISO date string
//   status: VisitStatus;
//   note_status: NoteStatus;
//   is_checked_in: boolean;
//   completed_in_ehr: boolean;
//   patient: Patient;
// }

// export interface Patient {
//   first_name: string;
//   last_name: string;
//   gender: Gender;
//   dob: string; // ISO date string
//   age: string; // e.g. "44yo"
// }

// export type VisitStatus =
//   | "not_started"
//   | "in_progress"
//   | "note_ready"
//   | "closed";

// export type NoteStatus = "not_generated" | "in_progress" | "success" | "error";

// export type Gender = "Male" | "Female";

export interface Patient {
  id: string;
  first_name: string;
  last_name: string;
  gender: string;
  dob: string;
  age: string;
}

export interface Visit {
  id: string;
  visit_at: string;
  status: string;
  is_checked_in: boolean;
  note_status: string;
  completed_in_ehr: boolean;
  patient: Patient;
}

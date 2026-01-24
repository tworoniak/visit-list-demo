import React from "react";
import {
  NOTE_STATUSES,
  ENCOUNTER_STATUSES,
  type StatusConfig,
  //   type NoteStatus,
  //   type EncounterStatus,
} from "../../types/status";

import styles from "./StatusBadge.module.scss";

interface StatusBadgeProps {
  status: string;
  note_status: string;
  is_checked_in: boolean;
  completed_in_ehr: boolean;
  isEhrEnabled?: boolean;
}

const STATUS_CONFIGS: Record<string, StatusConfig> = {
  error: {
    className: "status_badge__status_error",
    text: "Error",
  },
  closed: {
    className: "status_badge__status_completed",
    text: "Completed",
  },
  noteCreated: {
    className: "status_badge__status_note_generated",
    text: "Note Generated",
  },
  inProgress: {
    className: "status_badge__status_in_progress",
    text: "In Progress",
  },
  notStarted: {
    className: "status_badge__status_not_started",
    text: "Not Started",
  },
  recording: {
    className: "status_badge__status_recorded",
    text: "Recording",
  },
  checkedIn: {
    className: "status_badge__status_checked_in",
    text: "Checked In",
  },
  notCheckedIn: {
    className: "status_badge__status_not_checked_in",
    text: "Not Checked In",
  },
  unknown: {
    className: "status_badge__status_unknown",
    text: "Unknown",
  },
};

const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  note_status,
  is_checked_in,
  completed_in_ehr,
  isEhrEnabled = true,
}) => {
  const getStatusBadge = () => {
    if (note_status === NOTE_STATUSES.ERROR) {
      return STATUS_CONFIGS.error;
    } else if (
      (note_status === NOTE_STATUSES.SUCCESS &&
        (status === ENCOUNTER_STATUSES.CLOSED ||
          status === ENCOUNTER_STATUSES.SENT_TO_EHR)) ||
      (isEhrEnabled && status === ENCOUNTER_STATUSES.CLOSED && completed_in_ehr)
    ) {
      return STATUS_CONFIGS.closed;
    } else if (
      note_status === NOTE_STATUSES.SUCCESS &&
      status === ENCOUNTER_STATUSES.NOTE_READY
    ) {
      return STATUS_CONFIGS.noteCreated;
    } else if (note_status === NOTE_STATUSES.IN_PROGRESS) {
      return STATUS_CONFIGS.inProgress;
    } else if (status === ENCOUNTER_STATUSES.NOT_STARTED) {
      if (isEhrEnabled) {
        return is_checked_in
          ? STATUS_CONFIGS.checkedIn
          : STATUS_CONFIGS.notCheckedIn;
      } else {
        return STATUS_CONFIGS.notStarted;
      }
    } else if (status === ENCOUNTER_STATUSES.IN_PROGRESS) {
      return STATUS_CONFIGS.recording;
    } else {
      return STATUS_CONFIGS.unknown;
    }
  };

  const { className, text } = getStatusBadge();

  return (
    <span className={`${styles.status_badge} ${styles[className]}`}>
      {text}
    </span>
  );
};

export default StatusBadge;

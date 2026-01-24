import type { Visit } from "../../types";
import styles from "./VisitItem.module.scss";
import { formatTime, formatDate, formatGender } from "../../utils/formatters";
import StatusBadge from "../StatusBadge/StatusBadge";

interface VisitItemProps {
  visit: Visit;
}

const VisitItem: React.FC<VisitItemProps> = ({ visit }) => {
  return (
    <div className={styles.visit_item}>
      <div className={styles.visit_item__patient}>
        <div className={styles.visit_item__time}>
          {formatTime(visit.visit_at)}
        </div>
        <div className={styles.visit_item__patient_name}>
          {visit.patient.first_name} {visit.patient.last_name}
        </div>
        <div className={styles.visit_item__patient_info}>
          {visit.patient.age} ({formatGender(visit.patient.gender)}) |{" "}
          {formatDate(visit.patient.dob)}
        </div>
      </div>
      <div className={styles.visit_item__status_badge}>
        <StatusBadge
          status={visit.status}
          note_status={visit.note_status}
          is_checked_in={visit.is_checked_in}
          completed_in_ehr={visit.completed_in_ehr}
        />
      </div>
    </div>
  );
};

export default VisitItem;

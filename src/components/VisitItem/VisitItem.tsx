import type { Visit } from "../../types";
import styles from "./VisitItem.module.scss";
import { formatTime } from "../../utilities/formatters";
import StatusBadge from "../StatusBadge/StatusBadge";

const VisitItem = ({ visit }: { visit: Visit }) => {
  // const getCategoryClass = () => {
  //   switch (visit.status) {
  //     case "A":
  //       return styles["visit_item--category-a"];
  //     case "B":
  //       return styles["visit_item--category-b"];
  //     case "C":
  //       return styles["visit_item--category-c"];
  //     case "D":
  //       return styles["visit_item--category-d"];
  //     default:
  //       return "";
  //   }
  // };

  // ${getCategoryClass()}

  return (
    <div className={`${styles.visit_item}`}>
      <div className={styles.visit_item__patient_info}>
        <div className={styles.visit_item__text}>
          {formatTime(visit.visit_at)}
          {/* Visit Date: {new Date(visit.visit_at).toLocaleDateString()} */}
        </div>
        <div className={styles.visit_item__name}>
          {visit.patient.first_name} {visit.patient.last_name}
        </div>
      </div>
      <div className='styles.visit_item__patient_status'>
        <StatusBadge
          status={visit.status}
          note_status={visit.note_status}
          is_checked_in={visit.is_checked_in}
          completed_in_ehr={visit.completed_in_ehr}
        />
        {/* <p className={styles.visit_item__text}>{visit.status}</p> */}
      </div>
    </div>
  );
};

export default VisitItem;

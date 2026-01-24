import { useState } from "react";
import VisitItem from "../VisitItem/VisitItem";
// import FilterInput from "../FilterInput/FilterInput";
import Loader from "../Loader/Loader";
import EmptyStateAnimation from "../EmptyStateAnimation/EmptyStateAnimation";
// import Pagination from "../Pagination/Pagination";
import { useGetVisitsQuery } from "../../store/api/visitApi";
import styles from "./VisitList.module.scss";
import { AnimatePresence, motion } from "motion/react";
import SearchBar from "../SearchBar/SearchBar";

const VisitList: React.FC = () => {
  const { data: visits = [], isLoading, error, refetch } = useGetVisitsQuery();

  console.log(visits);

  const [filter, setFilter] = useState("");

  // const [currentPage, setCurrentPage] = useState(1);
  // const postsPerPage = 4;

  const normalizedFilter = filter.toLowerCase();

  const filteredVisits = visits
    .filter((visit) => {
      const patientName =
        `${visit.patient.first_name} ${visit.patient.last_name}`.toLowerCase();
      return patientName.includes(normalizedFilter);
    })
    .slice()
    .sort((a, b) => b.visit_at.localeCompare(a.visit_at));

  console.log(filteredVisits);

  // const totalPages = Math.ceil(filteredVisits.length / postsPerPage);

  // const indexOfLast = currentPage * postsPerPage;
  // const indexOfFirst = indexOfLast - postsPerPage;
  // const currentVisits = filteredVisits.slice(indexOfFirst, indexOfLast);

  return (
    <div className={styles.visit_list}>
      <h2>Visits</h2>
      {/* <FilterInput
        filter={filter}
        placeholder='Filter patients by name...'
        onChange={setFilter}
      /> */}

      <SearchBar
        value={filter}
        onChange={setFilter}
        placeholder='Filter patients by name...'
      />

      {isLoading && <Loader />}

      {error && (
        <div className={styles.visit_list__error}>
          <p>
            Error:{" "}
            {error && "status" in error
              ? `${error.status}`
              : error && "message" in error
                ? error.message
                : "An error occurred"}
          </p>
          <button
            onClick={() => refetch()}
            className={styles.visit_list__errorbutton}
          >
            Retry
          </button>
        </div>
      )}

      {!isLoading && !error && filteredVisits.length === 0 && (
        <EmptyStateAnimation />
      )}

      <AnimatePresence mode='wait'>
        <motion.div layout className={styles.visit_list__content}>
          {!isLoading &&
            !error &&
            filteredVisits.length > 0 &&
            filteredVisits.map((visit) => (
              <motion.div layout key={visit.id}>
                <VisitItem visit={visit} />
              </motion.div>
            ))}
        </motion.div>
      </AnimatePresence>

      {/* {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      )} */}
    </div>
  );
};

export default VisitList;

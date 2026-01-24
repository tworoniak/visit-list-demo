import React from "react";
import styles from "./SearchBar.module.scss";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
};

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = "Search…",
  label = "Search",
}) => {
  return (
    <div className={styles.search_container}>
      <label style={{ width: "100%" }}>
        <span className={styles.sr_only}>{label}</span>
        <input
          type='search'
          className={styles.search_input}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          aria-label={label}
        />
      </label>
    </div>
  );
};

export default SearchBar;

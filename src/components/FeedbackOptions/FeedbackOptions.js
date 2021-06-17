import React from "react";
import styles from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.rate_list}>
      {options.map((option) => (
        <button
          type="button"
          key={option}
          name={option}
          onClick={onLeaveFeedback}
          className={styles.rate_item}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

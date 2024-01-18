import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <p className={styles.sectionTitle}>Statistics:</p>
      <div className={styles.statSection}>
        <p className={styles.statLabel}>Good:</p>
        <p className={styles.statValue}>{good}</p>
      </div>
      <div className={styles.statSection}>
        <p className={styles.statLabel}>Neutral:</p>
        <p className={styles.statValue}>{neutral}</p>
      </div>
      <div className={styles.statSection}>
        <p className={styles.statLabel}>Bad:</p>
        <p className={styles.statValue}>{bad}</p>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Statistics;

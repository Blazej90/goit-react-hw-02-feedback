import React, { useState } from 'react';
// import Button from './Button/Button';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Sections';
import Notification from './Notification/Notification';
import styles from './App.module.css';

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleButtonClick = category => {
    setState(prevState => ({
      ...prevState,
      [category]: prevState[category] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return state.good + state.neutral + state.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.round((state.good / totalFeedback) * 100);
  };

  const feedbackOptions = Object.keys(state);
  const totalFeedback = countTotalFeedback();

  return (
    <div className={styles.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={handleButtonClick}
        />
      </Section>

      {totalFeedback > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={totalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Section title="Statistics">
          <Notification message="There is no feedback" />
        </Section>
      )}
    </div>
  );
};

export default App;

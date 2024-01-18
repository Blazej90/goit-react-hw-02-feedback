// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     ></div>
//   );
// };
import React, { useState } from 'react';
import Button from './Button';
import Statistics from './Statistics';
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

  return (
    <div className={styles.container}>
      <h1>Please leave feedback</h1>
      <div className={styles.containerButtons}>
        <Button onClick={() => handleButtonClick('good')} label="Good" />
        <Button onClick={() => handleButtonClick('neutral')} label="Neutral" />
        <Button onClick={() => handleButtonClick('bad')} label="Bad" />
      </div>
      <Statistics good={state.good} neutral={state.neutral} bad={state.bad} />
    </div>
  );
};

export default App;

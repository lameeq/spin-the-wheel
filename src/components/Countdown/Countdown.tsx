// Countdown.tsx
import React, { useState, useEffect } from 'react';

interface CountdownProps {
  setSpins: React.Dispatch<React.SetStateAction<number>>;
}

const Countdown: React.FC<CountdownProps> = ({ setSpins }) => {
  const initialRemainingSeconds = 10; // 1 minute in seconds

  const [countdownState, setCountdownState] = useState({
    remainingSeconds: initialRemainingSeconds,
    countingDown: true,
  });

  useEffect(() => {
    if (countdownState.countingDown) {
      const interval = setInterval(() => {
        setCountdownState((prevState) => ({
          remainingSeconds: Math.max(prevState.remainingSeconds - 1, 0),
          countingDown: prevState.remainingSeconds > 0,
        }));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [countdownState.countingDown]);

  const { remainingSeconds, countingDown } = countdownState;
  const hours = String(Math.floor(remainingSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((remainingSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(remainingSeconds % 60).padStart(2, '0');

  const handleClick = () => {
    if (remainingSeconds === 0) {
      setCountdownState({
        remainingSeconds: initialRemainingSeconds,
        countingDown: true,
      });

      // Call the setSpins function to update the spins state
      setSpins((prevSpins) => prevSpins + 5); // You can adjust the amount as needed
    }
  };

  return (
    <div className="countdown" onClick={handleClick}>
      {countingDown
        ? `5 more spins ready in ${hours}:${minutes}:${seconds}`
        : "Spins ready! Click to start again."}
    </div>
  );
};

export default Countdown;

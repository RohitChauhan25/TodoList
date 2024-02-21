import React, { useState, useEffect } from "react";
import {
  Session,
  Time,
  TimerButton,
  TimerContainer,
  TimerSection,
} from "../styles/todoStyle";

const Timer = ({ duration, onFinish, workSessions, setWorkSessions }) => {
  const [timer, setTimer] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);
  const [startTimer, setStartTimer] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 1) {
            clearInterval(intervalId);
            setWorkSessions(workSessions + 1);
          }
          return prevTimer - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, onFinish]);

  const resetTimer = () => {
    setTimer(duration);
    setIsRunning(false);
  };

  return (
    <TimerContainer>
      {startTimer ? <Time>Time left: {timer} seconds</Time> : <Time> </Time>}

      <TimerSection>
        <TimerButton
          onClick={() => {
            setStartTimer(true);
            setIsRunning(!isRunning);
          }}
        >
          {isRunning ? "Pause Timer" : "Start Timer"}
        </TimerButton>
        <TimerButton onClick={resetTimer}>Reset</TimerButton>
      </TimerSection>
    </TimerContainer>
  );
};

export default Timer;

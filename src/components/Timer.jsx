
 import Button from '@material-ui/core/Button';
 import ButtonGroup from '@material-ui/core/Button';
//using hooks
import React from "react";
import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called")
  });

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Pomodoro Timer </h1>

      <div style={{ fontSize: "100px" }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      <p>{isRunning ? "Running" : "Not running"}</p>
      <ButtonGroup variant="contained" aria-label="outlined button group" color="primary">
      <Button onClick={start}>Start</Button>
      <Button onClick={pause}>Pause</Button>
      <Button onClick={resume}>Resume</Button>
      <Button
        onClick={() => {
          // Restarts to 25 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 1500);
          restart(time);
        }}
      >
        Restart
      </Button>
      </ButtonGroup>
    </div>
  );
}

export default function Stopwatch() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}

// import React, { useState, useEffect } from "react";
 import Button from '@material-ui/core/Button';
 import ButtonGroup from '@material-ui/core/Button';

// const Stopwatch = () => {
//   const [hour, setHour] = useState(0);
//   const [min, setMin] = useState(0);
//   const [second, setSecond] = useState(0);
//   const [minisecond, setMiniSecond] = useState(0);
//   const [stop, setStop] = useState(false);

//   const onStart = () => {
//     setStop(false);
//     // setMiniSecond(minisecond + 1);
//   };

//   const onStop = () => {
//     setStop(true);
//   };

//   const onReset = () => {
//     setHour(0);
//     setMin(0);
//     setSecond(0);
//     setMiniSecond(0);
//   };

//   useEffect(() => {
//     let interval = null;

//     if (!stop) {
//       interval = setInterval(() => {
//         if (min > 59) {
//           setHour(hour + 1);
//           setMin(0);
//           clearInterval(interval);
//         }
//         if (second > 59) {
//           setMin(min + 1);
//           setSecond(0);
//           clearInterval(interval);
//         }
//         if (minisecond > 999) {
//           setSecond(second + 1);
//           setMiniSecond(0);
//           clearInterval(interval);
//         }
//         if (minisecond <= 999) {
//           setMiniSecond(minisecond + 1);
//           clearInterval(interval);
//         }
//       }, 40);
//     } else {
//       clearInterval(interval);
//     }
//     return () => {
//       clearInterval(interval);
//     };
//   });

//   return (
//     <div style={{ textAlign: "center", marginTop: "100px", color: "blue" }}>
//       <h1 style={{ color: "black" }}>STOP WATCH</h1>
//       <h6 style={{ color: "red" }}>
//         Hours &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; Mins &nbsp;&nbsp;:
//         &nbsp;&nbsp;&nbsp;Second &nbsp;: &nbsp;MiniSecond
//       </h6>
//       <h1>
//         {hour} &nbsp;: &nbsp;{min} &nbsp;: &nbsp;{second} &nbsp;: &nbsp;
//         {minisecond}&nbsp;
//       </h1>
//       <button  variant="outlined" onClick={onStart}>Start</button>
//       <button  variant="outlined" onClick={onStop}>Stop</button>
//       <button  variant="outlined" onClick={onReset}>Reset</button>
//     </div>
//   );
// };

// export {Stopwatch};

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

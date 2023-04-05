import { useEffect, useState } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(true);

  // useEffect to increment the time every second
  useEffect(() => {
    // notice how we save the ID of the interval
    const id = setInterval(() => {
      setTime((currentTime) => currentTime + 1);
    }, 1000);

    // and we clear the interval in the cleanup function
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h1>The stopwatch is {running ? "" : "not"} running</h1>
      <div>Lap time: {time}</div>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>
      <button onClick={() => console.log("TODO")}>Reset</button>
    </div>
  );
}

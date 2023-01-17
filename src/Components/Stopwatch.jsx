import React, { useState, useEffect } from "react";
import HackTimer from "hacktimer";
import { CircularProgressbar ,CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar/dist";
export const Stopwatch = (props) => {
    const [started, setStarted] = useState(false);
    const [focusTime, setFocusTime] = useState(5);
    const [pauseTime, setPauseTime] = useState(1);
    const [running, setRunning] = useState(false);
    useEffect(() => {
        let interval;
        if (running && started && focusTime < props.sessionLength * 1000 * 60 * 3) {
          interval = setInterval(() => {
            setFocusTime((prevTime) => prevTime + 1000);
            setPauseTime(Math.floor(focusTime / props.breakMultiplier));
          }, 1000);
        } else if (!running && started && pauseTime > 0 && focusTime > 0) {
          interval = setInterval(() => {
            setPauseTime((prevTime) => prevTime - 1000);
            setFocusTime(pauseTime * props.breakMultiplier);
          }, 1000);
        }
        return () => clearInterval(interval);
      }, [running, focusTime, pauseTime]);

      let focusSeconds = ("0" + (Math.floor(focusTime / 1000) % 60)).slice(-2);
      let focusMinutes = ("0" + (Math.floor(focusTime / 60000) % 60)).slice(-2);
      let focusHours = ("0" + Math.floor(focusTime / 3600000) % 60).slice(-2);
      let pauseSeconds = ("0" + (Math.floor(pauseTime / 1000) % 60)).slice(-2);
      let pauseMinutes = ("0" + (Math.floor(pauseTime / 60000) % 60)).slice(-2);
      const switchFocus = () => {
        if (!started) {
          setStarted(true);
        }
        setRunning(!running);
        document.body.style.backgroundColor = running ? "#131f52" : "#E7E7DB";
        document.getElementsByClassName("timer")[0].style.color = running ? "white" : "black";
      };

      useEffect(() => {
        document.title = running ? `${focusHours}:${focusMinutes}:${focusSeconds}` : `${pauseMinutes}:${pauseSeconds}`;
        if (focusTime >= 1000 * props.sessionLength * 60 * 3 && started && running) {
          document.title = `Focus session finished 🎉`;
          alert("Focus session finished")
          setRunning(false);
        }
        if (pauseTime <= 0 && started && !running) {
          setPauseTime(0);
          document.title = "Pause finished!";
          alert("Pause finished");
          setStarted(false);
        }
     }, [focusSeconds, pauseSeconds]);

    return (
      <>
        <div className="stopwatch">
            <div style={{width: "30rem"}}>
              <CircularProgressbarWithChildren
                  value={(focusTime/(1000 * props.sessionLength * 60))*100}
                  styles={buildStyles({
                      textColor: "red",
                      pathColor: "#007991",
                      trailColor: "white",
                      strokeLinecap: "round",
                      pathTransitionDuration: 0.5,
                      strokeWidth: "2",
                      })}>
                  {running ? (focusHours !== "00" ? <span className="timer">{focusHours}:{focusMinutes}:{focusSeconds}</span> : <span className="timer">{focusMinutes}:{focusSeconds}</span>)
                  : <span className="timer">{pauseMinutes}:{pauseSeconds}</span>
                  }
              </CircularProgressbarWithChildren>
            </div>
            {focusTime >= 1000 * props.sessionLength * 60  ?
              <div style={{ width: "calc(30rem + 22%)", position: "relative", top: "calc((-30rem - 12%))", left:"-11%"}}>
              <CircularProgressbar
                value={((focusTime)/(1000 * props.sessionLength * 60))*100 - 100}
                styles={buildStyles({
                  textColor: "red",
                  pathColor: "#007991",
                  trailColor: "transparent",
                  strokeLinecap: "round",
                  pathTransitionDuration: 0.5,
                  })
                }
              />
              </div> : null}
              {focusTime >= 1000 * props.sessionLength * 60 * 2 ?
              <div style={{ width: "calc(30rem + 48%)", position: "relative", top: "calc((-30rem - 24%) * 2)", left:"-24%"}}>
              <CircularProgressbar
                value={((focusTime)/(1000 * props.sessionLength * 60))*100 - 200}
                styles={buildStyles({
                  textColor: "red",
                  pathColor: "#007991",
                  trailColor: "transparent",
                  strokeLinecap: "round",
                  pathTransitionDuration: 0.5,
                  })}
              />
              </div> : null}
        </div>
        <div className="buttons">
          <button onClick={switchFocus}>{running && started ? "Pause" : "Focus"}</button>
          <button onClick={() => setFocusTime(5)}>Reset</button>
        </div>
        </>
    )
}





import React, {useState, useEffect} from 'react';
import './App.css';
import { Stopwatch } from './Components/Stopwatch';
import { InfoBox } from './Components/Infobox';
import ToggleButton from '@mui/material/ToggleButton';
import InfoIcon from '@mui/icons-material/Info';

function App() {
  const [sessionLength, setSessionLength] = useState(30);
  const [breakMultiplier, setBreakMultiplier] = useState(5);
  const [breakMultiplierError, setBreakMultiplierError] = useState(false);
  const [sessionLengthError, setSessionLengthError] = useState(false);
  const [selected, setSelected] = useState(false);

  const handleSessionLength = (e) => {
    if (e.target.value > 0) {
      setSessionLength(e.target.value);
      setSessionLengthError(false);
    } else {
      setSessionLengthError(true);
    }
  }
  const handleBreakMultiplier = (e) => {
    if (e.target.value > 0) {
      setBreakMultiplier(e.target.value);
      setBreakMultiplierError(false);
    } else {
      setBreakMultiplierError(true);
    }
  }
  return (
    <div className="App">
      <div className='info-button'>
        <ToggleButton
          value="check"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          <InfoIcon />
        </ToggleButton>
      </div>
      {selected ? <InfoBox 
      sessionLength={sessionLength}
      handleSessionLength={handleSessionLength}
      breakMultiplier={breakMultiplier}
      handleBreakMultiplier={handleBreakMultiplier}
      breakMultiplierError={breakMultiplierError}
      sessionLengthError={sessionLengthError}
      /> : null}

      <div className='stopwatch-container'>
        <Stopwatch 
        sessionLength={sessionLength}
        breakMultiplier={breakMultiplier}
        />
      </div>
    
    </div>
  );
}

export default App;

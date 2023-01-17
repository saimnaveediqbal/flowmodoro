import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
export const InfoBox = (props) => {
    return (
      <div className="infobox">
        <p className="info">Flowmodoro is technique where you study until you lose focus, at which point you take a break that's up to 1/5th the length of your focus time.
        <br/>
        The focus session ends when 3 rings are filled.
        </p>
        <div className="inputs">
            <TextField 
            id="session-length"
            label="Minutes per ring"
            variant="outlined"
            size="small"
            defaultValue={props.sessionLength}
            onChange={props.handleSessionLength}
            error={props.sessionLengthError}
            helperText={props.sessionLengthError ? "Must be above 1" : null}
            
            />
            <TextField
            id="break-multiplier"
            label="Break multiplier"
            variant="outlined"
            size="small"
            defaultValue={props.breakMultiplier}
            onChange={props.handleBreakMultiplier}
            error={props.breakMultiplierError}
            helperText={props.breakMultiplierError ? "Must be between 1 and 10" : null}
            />
        </div>
    </div>
    )
}




import React from 'react';
import "./Result.css";
import {Button} from "@mui/material/";

export const Result = ({temp, icon, desc, setTemp}) => {
  return (
    <div className='result'>
        <div className='result_box'>
              <h1> Temp: {temp} </h1>
              <p>{desc}</p>
               <img src={icon} alt='logo'/> <br/>
               <Button variant='contained' onClick={() => {setTemp("");
            }}
            >
          Back
        </Button>
        </div>
    </div>
  );
};

export default Result;

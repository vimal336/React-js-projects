import React from 'react';
import {Input} from "@mui/material";
import {Button} from "@mui/material";
import "./input.css";

const Inputer = ({input, setInput,findWeather}) => {

  const handlechange = (event)=>{
    setInput(event.target.value);
  };
  const handleClick = (event)=>{
    event.preventDefault();
    findWeather();
  }

  return (
    <div className='inputBox'>
      <div className='inputBox-field'>

        <h1>Google Weather App</h1>
         <p>Powered by</p>
         <img
         src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png'
         />
         <form>
         <Input placeholder='Enter the city name' onChange={handlechange} value={input}/>
         <br/>
         <Button variant='contained' color="primary" type='submit' onClick={handleClick}>
          Search
        </Button>
        </form>
      </div>
    
    
    </div>
  )
}

export default Inputer;
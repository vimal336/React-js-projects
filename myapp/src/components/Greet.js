// function Greet(props){
    
//     const { msg } = props
//     const text = `hi, ${msg}`;
//     return(
//         <h1>{text}</h1>
//     );
// }

// export default Greet;

// Greet.js
import React from 'react';

function Greet(props) {

    const { msg } = props;
  
  const text = `hii ${msg} `;
  
  return (
    <>
    
   
    <h1>{text}</h1>
    </>
  
  );
}

export default Greet;

import { useState, useEffect } from "react";
import React from "react";

 function UseLayoutEff() {
    const [number, setNumber] = useState(1);

    useEffect(() => {
     
        console.log(number);

    },[number]);

    return (
        <>
        <button onClick={() => setNumber(pn => pn + 1)}>
          Increment
        </button>
        <div>{number}</div>
        </>
    );

};

export default UseLayoutEff;
import { useState, useEffect, useRef } from "react";
import React from "react";

 function UseLayoutEff() {
    const [show, setShow] = useState(false);

    const popup = useRef();
    const button = useRef();

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
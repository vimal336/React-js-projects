import { useState, useEffect, useRef } from "react";
import React from "react";

function UseLayoutEff() {
  const [show, setShow] = useState(false);

  const popup = useRef();
  const button = useRef();

  useEffect(() => {
    if (popup.current == null || button.current == null) return;
    const { bottom } = button.current.getBoundingClientREct();
    popup.current.style.top = `${button + 25}px`;
  }, [show]);

  return (
    <>
      <button ref={button} onClick={()=> setShow(pv => !pv)}>
        Click here
      </button>
      {
        show &&      }
    </>
  );
}

export default UseLayoutEff;

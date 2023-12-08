import { useState, useEffect } from "react";

export default function App() {
    const [number, setNumber] = useState(1);

    useEffect(() => {
     
        console.log(number);

    },[number]);

    return (
        <>
        <button onClick={() => setNumber(pn => pn + 1)}>
          Increment
        </button>
        </>
    )

}
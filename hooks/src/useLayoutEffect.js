import { useState, useEffect } from "react";

export default function App() {
    const [number, setNumber] = useState(1);

    useEffect(() => {
     
        console.log(number);

    },[number])

}
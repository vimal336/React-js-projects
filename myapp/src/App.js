import { Header } from "./components/Header";
import { Component } from "react";



function App() {

    const data = {
        name:"rock",
        age:20,
        job:"teacher",
    }


    return(
        <>
<Header header = "header" value = "hello"/>
<Header value = "value" />
<Component/>
</>
    )

}



export default App;

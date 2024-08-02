import React from "react";
import UseLayoutEff from "./UseLayoutEff";
import { UseReduce } from "./useReduce";
import { UsersCard } from "./UsersCard";
import Quotes from "./Quotes";
import { Useeffecthook } from "./Useeffecthook";
import { Todos } from "./Todos";
import { Axios } from "./Axios";


function App() {
  return (
    <main>
     <h1>hooks</h1> 
     <UseLayoutEff/>
     <UseReduce/> 
     <Useeffecthook/>
     <Todos/>
     <Axios/>
     {/* <UsersCard/>
     <Quotes/> */}
    </main>
  );
}

export default App;

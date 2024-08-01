import React from "react";
import UseLayoutEff from "./UseLayoutEff";
import Useredu from "./useReduce";
import { UsersCard } from "./UsersCard";
import Quotes from "./Quotes";
import { Useeffecthook } from "./Useeffecthook";


function App() {
  return (
    <main>
     <h1>hooks</h1> 
     <UseLayoutEff/>
     <Useredu/> 
     <Useeffecthook/>
     {/* <UsersCard/>
     <Quotes/> */}
    </main>
  );
}

export default App;

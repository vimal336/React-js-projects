import React, { createContext, useState } from "react";
import UseLayoutEff from "./UseLayoutEff";
import { UseReduce } from "./useReduce";
// import { UsersCard } from "./UsersCard";
// import Quotes from "./Quotes";
import { Useeffecthook } from "./Useeffecthook";
import { Todos } from "./Todos";
import { Axios } from "./Axios";
import { User } from "./use_context_hook/User";

export const ThemeContext = createContext();


function App() {
  const [theme, setTheme] = useState("Light");

  const toggleTheme = () =>{
    setTheme((curr)=>(curr === "Light"? "dark" : "Light"));
  }

  return (
    <main>
     <h1>hooks</h1> 
     <UseLayoutEff/>
     <UseReduce/> 
     <Useeffecthook/>
     <Todos/>
     <Axios/>

     <ThemeContext.Provider value={{theme,}}>
     <User/>
     <button onClick={toggleTheme}>Change Theme</button>
     <h1>{theme}</h1>
     </ThemeContext.Provider>

     {/* <UsersCard/>
     <Quotes/> */}
    </main>
  );
}

export default App;

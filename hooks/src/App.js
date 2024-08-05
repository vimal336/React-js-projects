import React, { createContext, useState } from "react";
import UseLayoutEff from "./UseLayoutEff";
import { UseReduce } from "./useReduce";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { UsersCard } from "./UsersCard";
import Quotes from "./Quotes";
import { Useeffecthook } from "./Useeffecthook";
import { Todos } from "./Todos";
import { Axios } from "./Axios";
import { User } from "./use_context_hook/User";
import { UseMemoHook } from "./UseMemoHook";
import Navbar from "./NavBar";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("Light");

  const toggleTheme = () =>{
    setTheme((curr)=>(curr === "Light"? "dark" : "Light"));
  }

  return (
    <main>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="Axios" element={<Axios/>}></Route>
      <Route path="UseReduce" element={<UseReduce/>}></Route>
      <Route path="Axios" element={<Axios/>}></Route>
      <Route path="UseLayoutEff" element={<UseLayoutEff/>}></Route>
      <Route path="Todos" element={<Todos/>}></Route>
      <Route path="UseMemoHook" element={<UseMemoHook/>}></Route>
      <Route path="Quotes" element={<Quotes/>}></Route>
      <Route path="UsersCard" element={<UsersCard/>}></Route>
     </Routes>
     </BrowserRouter>


     {/* <ThemeContext.Provider value={{theme,}}>
     <User/>
     <button onClick={toggleTheme}>Change Theme</button>
     <h1>{theme}</h1>
     </ThemeContext.Provider> */}


    </main>
  );
}

export default App;

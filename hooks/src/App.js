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
import { ErrorNotFound } from "./ErrorNotFound";
import { UserefHook } from "./UserefHook";
import { UseStateHook } from "./UseStateHook";
import { UseCallBack } from "./UseCallBack";

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
     <Route path="/" element={<Axios/>}></Route>
      <Route path="Axios" element={<Axios/>}></Route>
      <Route path="UseReduce" element={<UseReduce/>}></Route>
      <Route path="Axios" element={<Axios/>}></Route>
      <Route path="UseStateHook" element={<UseStateHook/>}></Route>
      <Route path="UseeffectHook" element={<Useeffecthook/>}></Route>
      <Route path="UseLayoutEff" element={<UseLayoutEff/>}></Route>
      <Route path="Todos" element={<Todos/>}></Route>
      <Route path="UseMemoHook" element={<UseMemoHook/>}></Route>
      <Route path="Quotes/:username" element={<Quotes/>}></Route>
      <Route path="UsersCard" element={<UsersCard/>}></Route>
      <Route path="UseRefHook" element={<UserefHook/>}></Route>
      <Route path="UseCallBack" element={<UseCallBack/>}></Route>
      <Route path="*" element={<ErrorNotFound/>}></Route>
     </Routes>
     </BrowserRouter>

{/* 
     <ThemeContext.Provider value={{theme,}}>
     <User/>
     <button onClick={toggleTheme}>Change Theme</button>
     <h1>{theme}</h1>
     </ThemeContext.Provider> */}


    </main>
  );
}

export default App;

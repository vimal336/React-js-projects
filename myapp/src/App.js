import { Header } from "./components/Header";
import { Component } from "react";

function App() {
  const data = {
    name: "rock",
    age: 20,
    job: "teacher",
  };

  return (
    <>
      <Header name= value="hello" />
      <Header value="value" />
      <Component />
    </>
  );
}

export default App;

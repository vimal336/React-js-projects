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
      <Header name={data.name} age={data.name} job={data.job} />
      <Component />
    </>
  );
}

export default App;

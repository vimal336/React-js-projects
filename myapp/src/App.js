import { Header } from "./components/Header";
import { Hooks } from "./components/Hooks";
import { Useeffecthook } from "./components/Useeffecthook";

function App() {

  const data = {
    name: "REACT PROPS",
    age: 20,
    job: "teacher",
  };

  return (
    <>
      <Header name={data.name} age={data.age} job={data.job} />
      <Hooks/>
      <Useeffecthook/>
    </>
  );
}

export default App;

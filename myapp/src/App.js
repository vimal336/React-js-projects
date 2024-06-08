import { Header } from "./components/Header";

function App() {

  const data = {
    name: "rock",
    age: 20,
    job: "teacher",
  };

  return (
    <>
      <Header name={data.name} age={data.age} job={data.job} />
    </>
  );
}

export default App;

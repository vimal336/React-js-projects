import { useState } from "react";
import "./App.css";
import InputArea from "./components/inputArea";
import { ToDoItem } from "./components/ToDoItem";

function App() {
  const [Items, setItems] = useState([]);

  const addItems = (InputText) => {
    setItems((prevItems) => {
      return [...prevItems, InputText];
    });
  };

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do-List</h1>
      </div>
      <InputArea addItems={addItems} />
      <div>
        <ul>
          {Items.map((item, index) => {
            return <ToDoItem key={index} text={item} deleteItem={deleteItem} id={index} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

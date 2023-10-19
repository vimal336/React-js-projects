import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <FlashCards
        question="What language is React based on?"
        answer="Javascript"
        id={1231}
      />
      <FlashCards
        question="What are the building blocks of React apps?"
        answer="Components"
        id={1232}
      />
      <FlashCards
        question="What's the name of the syntax we use to describe a UI in React?"
        answer="Jsx"
        id={1233}
      />
      <FlashCards
        question="How to pass data from parent to child components?"
        answer="Props"
        id={1234}
      />
      <FlashCards
        question="How to give components memory?"
        answer="usestate hook"
        id={1235}
      />
      <FlashCards
        question="What do we call an input element that is completely synchronised with state?"
        answer="controlled elements"
        id={1236}
      />
    </div>
  );
}

// const questions = [
//   {
//     id: 3457,
//     question: "What language is React based on?",
//     answer: "JavaScript",
//   },
//   {
//     id: 7336,
//     question: "What are the building blocks of React apps?",
//     answer: "Components",
//   },
//   {
//     id: 8832,
//     question: "What's the name of the syntax we use to describe a UI in React?",
//     answer: "JSX",
//   },
//   {
//     id: 1297,
//     question: "How to pass data from parent to child components?",
//     answer: "Props",
//   },
//   {
//     id: 9103,
//     question: "How to give components memory?",
//     answer: "useState hook",
//   },
//   {
//     id: 2002,
//     question:
//       "What do we call an input element that is completely synchronised with state?",
//     answer: "Controlled element",
//   },
// ];

function FlashCards(props) {
  const [card, setCard] = useState("");

  const handleAnswer = () => {
    setCard(!card);
  };


  return (
    <div className="flashcards">
      <ul className={`your-element ${card ? 'blue-background' : ''}`}
      onClick={handleAnswer}>
        <div key={props.id}>
          <h3>Question: {props.question}</h3>
        </div>
      </ul>
    </div>
  );
}

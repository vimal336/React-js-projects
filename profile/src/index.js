import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
      for each web dev skill that you have,
      customized with props */}
      <div className="skill-list"> 

        <SkillList skillsList = 'React' emoji = '✌️' backgroundColor="yellow"/>
        <SkillList skillsList = 'HTML+CSS' emoji = '👍' backgroundColor="green"/>
        <SkillList skillsList = 'Javascript' emoji = '💪' backgroundColor="blue" />
        <SkillList skillsList = 'Svelete' emoji = '🤞' backgroundColor="red"/>
      </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="avatar">
      <img className="avatar" src={"images/prof.jfif"} alt={"profile"} />
    </div>
  );
}

function Intro() {
  return (
    <div className="data">
      <h1>Jonas Schmedtman</h1>
      <p> 
      Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cook (and eat), or to just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList(props) {
  return (
  
  <div className="skill">
   
   <div style={{ backgroundColor: props.backgroundColor }} className="skill-list">
   <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skillsList}</span>
      <span>{props.emoji}</span>
    </div>
   </div>

  </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

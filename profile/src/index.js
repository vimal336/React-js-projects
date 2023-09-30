import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <>
        <ul className="skill-list">
          {skills.map((skil) => (
            <SkillList skillsList={skil} key={skil.skill} />
            ))}
        </ul>
        </>
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
      <h1>Vimal S</h1>
      <p>
        Front End web developer and M.sc computer science graduate. When not
        coding or preparing a course, I like to play board games, to cook (and
        eat), or to just travel to my favorite places.
      </p>
    </div>
  );
}

function SkillList({skillsList}) {
  return (
    <div className="skill">
      <div
        style={{ backgroundColor: skillsList.backgroundColor }}
        className="skill-list"
      >
        <li className="skill" style={{ backgroundColor: skillsList.color }}>
          <span>{skillsList.skill}</span>
          <span>
          {skillsList.level[0]? (
        <p>{'hello'}</p>
      ) : (
        <p>{'hi'}</p>
      )}
          </span>
        </li>
      </div>
    </div>
  );
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

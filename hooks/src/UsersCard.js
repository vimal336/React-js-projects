const userData = [
  {
    name : 'Vimal S',
    city : "Villupuram",
    role : 'Front-end Developer',
    skills : ["UI/UX","Front-end Development", "HTML", "CSS"],
    online : "false",
    profile: "images/prof.jfif"
  },
  {

  },
  {

  },

]


function User(props){
   return (
   
   <div className="card-container">
    <span className={props.online ? "pro online" : "pro offline"}>  {props.online?"ONLINE" : "OFFLINE"}</span>
    <img src={props.profile} className="img" alt="man" />
    <h3>{props.name}</h3>
    <h3>{props.place}</h3>
    <p>{props.role}</p>
    <div className ="buttons">
      <button className="primary">Message</button>
      <button className="primary outline">Following</button>
    </div>
    <div className="skills">
      <h6>Skills</h6>
      <ul>
       {props.skills.map((skill, index) => (
         <li key={index}>{skill}</li>
       ))}
      </ul>
    </div>
   </div>
   );
}
export const UsersCard = () => {
  return <>
   
  </>;
};

   
      {/* <User 
      name = "Vimal S"
      role ="Front-End Developer"
      place = "Villupuram"
      skills = {["UI/UX", "HTML", "CSS", "Javascript", "React", "Node"]}
      online = {false}
      profile = "images/prof.jfif"
      />; */}




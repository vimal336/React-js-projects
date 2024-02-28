import propTypes from "prop-types";

const userData = [
  {
    name : 'Vimal S',
    city : "Villupuram",
    role : 'Front-end Developer',
    skills : ["Front-end Development", "HTML", "CSS", "Javascript", "React.js", "Sass","Bootstrap"],
    online : "false",
    profile: "images/prof.jfif"
  },
  // {
  //   name : 'Vimal S',
  //   city : "Villupuram",
  //   role : 'Front-end Developer',
  //   skills : ["UI/UX","Front-end Development", "HTML", "CSS", "Javascript"],
  //   online : "false",
  //   profile: "images/jonas.jpeg"
  // },
  // {
  //   name : 'Vimal S',
  //   city : "Villupuram",
  //   role : 'Front-end Developer',
  //   skills : ["UI/UX","Front-end Development", "HTML", "CSS", "javascript"],
  //   online : "false",
  //   profile: "images/avatar.jpg"
  // },
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
  return ( 
  <>
  {userData.map((user, index)=>(
       <User key={index} 
       name={user.value}
       city={user.city}
       role={user.role}
       skills={user.skills}
       online={user.online}
       profile={user.profile}
       />
    ))}
  </>
  );
};

User.propTypes = {
  name: propTypes.string.isRequired,
  city: propTypes.string.isRequired,
  role: propTypes.string.isRequired,
  
  
}

   
      /* <User 
      name = "Vimal S"
      role ="Front-End Developer"
      place = "Villupuram"
      skills = {["UI/UX", "HTML", "CSS", "Javascript", "React", "Node"]}
      online = {false}
      profile = "images/prof.jfif"
      />; */




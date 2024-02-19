function User(props){
   return (
   
   <div className="card-container">
    <span className="pro"> ONLINE</span>
    <img src="images/prof.jfif" className="img" alt="man" />
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
        <li>UI/UX</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node</li>
      </ul>
    </div>
   </div>
   );
}
export const UsersCard = () => {
  return (
    <div>
      
      <User 
      name = "Vimal S"
      role ="Front-End Developer"
      place = "Villupuram"
      skills =""
      />

      {
        Array.map((skill)=>{
         <li></li>
        })
      }

    </div>
  )
}

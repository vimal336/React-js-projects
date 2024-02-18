function User(props){
   return (
   
   <div className="card-container">
    <span className="pro"> ONLINE</span>
    <img src="images/prof.jfif" className="img" alt="man" />
    <h3>Vimal S</h3>
    <h3>Villupuram</h3>
    <p>front-end developer </p>
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
    <div><User name = "vimal"/></div>
  )
}

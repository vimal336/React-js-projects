function User(){
   return (
   
   <div className="card-container">
    <span className="pro"> ONLINE</span>
    <img src="images/prof.jfif" alt="man" />
    <h3>Vimal S</h3>
    <h3>villupuram</h3>
    <p>front-end developer </p>
    <div>
      <button>Message</button>
      <button>Following</button>
    </div>
    <div>
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
    <div><User/></div>
  )
}

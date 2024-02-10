function User(){
   return (
   
   <div className="card-container">
    <span className="pro"> ONLINE</span>
    <img src="images/prof.jfif" alt="man" />
    <h3>Full name</h3>
    <h3>Salem</h3>
    <p>front-end developer </p>
    <div>
      <button>Message</button>
      <button>Following</button>
    </div>
    <div>
      <h6>Skills</h6>
      <ul>
        <li>UI/UX</li>
        <li>Front-end developer</li>
        <li>web developer</li>
        <li></li>
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

function User(){
   return (
   
   <div className="card-container">
    <span className="pro"> ONLINE</span>
    <img src="images/prof.jfif" alt="man" />
    <h3>Full name</h3>
    <h3>Salem</h3>
    <p>front-end developer </p>
    <div>
      <button></button>
      <button></button>
    </div>
   </div>
   );
}
export const UsersCard = () => {
  return (
    <div><User/></div>
  )
}

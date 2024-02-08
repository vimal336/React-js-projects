function User(){
   return <div className="card-container">
    <span className="pro"> ONLINE</span>
    <img src="images/avatar.jpg" alt="man" />
   </div>
}
export const UsersCard = () => {
  return (
    <div><User/></div>
  )
}

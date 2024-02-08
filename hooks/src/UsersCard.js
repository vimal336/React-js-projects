function User(){
   return <div className="card-container">
    <span className="pro"> ONLINE</span>
    <img src="images/man.png" />
   </div>
}
export const UsersCard = () => {
  return (
    <div><User/></div>
  )
}

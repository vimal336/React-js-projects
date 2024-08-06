const CustomerView = () => {
  return (
    <div>
        <p>Customer List</p>
        <ul style={{listStyle:'none'}}>

            {
            
            customer.map((cust)=>{
                <li>{cust}</li>
            })
            
            }
            <li>
                
            </li>
        </ul>
    </div>
  )
}

export default CustomerView
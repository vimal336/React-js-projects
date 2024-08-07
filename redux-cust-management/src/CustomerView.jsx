import { useSelector } from "react-redux"

const CustomerView = () => {
  const customer = useSelector((state)=> state.customer)
  return (
    <div>
        <p>Customer List</p>
        <ul style={{listStyle:'none'}}>

            {
            
            customer.map((cust)=>{
                <li>{cust}</li>
            })
            
            }
        </ul>
    </div>
  )
}

export default CustomerView
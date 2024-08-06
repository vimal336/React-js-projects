import { useState } from 'react'

const CustomerAdd = () => {
  const [input, setInput] = useState("");
  const [customer, setCustomer] = useState([])
  
  const addCustomer = () =>{
    if(input){
       setCustomer((prev)=>[...prev,input])
       console.log(customer);
    }
  }

  return (
    <div className="customer-add">
        <p>CustomerAdd</p>
        <input type='text' onChange={(e)=> setInput(e.target.value)}/>
        <button onClick={addCustomer}>Add</button>
    </div>
  )
}

export default CustomerAdd
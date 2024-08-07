import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCustomerAction } from './slices/CustomerSlice';

const CustomerAdd = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  //const [customer, setCustomer] = useState([])
  
  const addCustomer = () =>{
    if(input){
       //setCustomer((prev)=>[...prev,input])
       dispatch(addCustomerAction(input))
       setInput("");
    }
    
  }

  return (
    <div className='customer' >
        <h4>ADD CUSTOMER</h4>
        <input type='text' value={input} onChange={(e)=> setInput(e.target.value)}/>
        <button className="customer-add" onClick={addCustomer} >ADD</button>
    </div>
  )
}

export default CustomerAdd
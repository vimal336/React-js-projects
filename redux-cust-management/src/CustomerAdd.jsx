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
    <div className="customer-add">
        <p>CustomerAdd</p>
        <input type='text' value={input} onChange={(e)=> setInput(e.target.value)}/>
        <button onClick={addCustomer}>Add</button>
    </div>
  )
}

export default CustomerAdd
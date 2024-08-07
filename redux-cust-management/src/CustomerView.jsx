import { useSelector } from "react-redux";
import { deleteCustomer } from "./slices/CustomerSlice";
import { useDispatch } from "react-redux";

const CustomerView = () => {
  const customer = useSelector((state) => state.customer);
  console.log(customer)
  const dispatch = useDispatch()

  function deleteHandler(index){
   dispatch(deleteCustomer(index))
  }

  return (
    <div>
      <p>Customer List</p>
      <ul style={{ listStyle: "none" }}>
        {customer.map((cust,index) => (
          <li key={index}>{cust} <button className="customer-delete" onClick={()=> deleteHandler(index)}>Delete</button></li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerView;

import { useSelector } from "react-redux";

const CustomerView = () => {
  const customer = useSelector((state) => state.customer);
  console.log(customer)

  function deleteHandler(){
    
  }
  return (
    <div>
      <p>Customer List</p>
      <ul style={{ listStyle: "none" }}>
        {customer.map((cust,index) => (
          <li key={index}>{cust} <button onClick={()=> deleteHandler(index)}>Delete</button></li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerView;

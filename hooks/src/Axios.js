
import BaseUrl from "./BaseUrl"
import React, {useState} from "react";

export const Axios = () =>{

  const [responseData, setResponseData] = useState(null);

     async function apicall(){
      try {
         const response = await BaseUrl.get("posts/1");
         setResponseData(response.data);
       } catch (error) {
         console.error("Error fetching data:", error);
       }
     }

     return (
        <> <p>Api Data</p>
             <button onClick={apicall}>Click To Fetch data</button>
             <h3>{responseData ? JSON.stringify(responseData) : "No data fetched"}</h3>
        </>
   
    )

}


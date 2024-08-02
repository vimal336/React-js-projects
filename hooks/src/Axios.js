import axios from "axios";
import React from "react";

export const Axios = () =>{

     async function apicall(){
       const response = await axios.get(
         "posts/1"
       );
       console.log(response.data);
     }

     return (
        <> <p>Api Data</p>
             <button onClick={apicall}>api call</button>
        </>
   
    )

}


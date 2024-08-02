import BaseUrl from "./BaseUrl"
import React from "react";

export const Axios = () =>{

     async function apicall(){
      try {
         const response = await BaseUrl.get("posts/1");
         console.log(response.data);
       } catch (error) {
         console.error("Error fetching data:", error);
       }
     }

     return (
        <> <p>Api Data</p>
             <button onClick={apicall}>api call</button>
        </>
   
    )

}


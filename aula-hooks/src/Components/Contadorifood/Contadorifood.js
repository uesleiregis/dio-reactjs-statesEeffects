import {useState} from "react";
import React from "react";

export default function ContadorIfood(){
    
    

    const [value, setValue] = useState(1);
 

   function up(){
        setValue(value+1)
   }

   function down(){
        setValue(value-1)
   }

   

    

    return(
        <>
            <button onClick={()=>{down()}}>-</button>
            
            <h2> {value} </h2>
           
            
            <button onClick={()=>{up()}}>+</button>
        </>
    )
}
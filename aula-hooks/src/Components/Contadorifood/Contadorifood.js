import {useState} from "react";
import React from "react";

export default function ContadorIfood(){
    
    

    const [value, setValue] = useState(1);

    //const [buttonStyle, setButtonStyle] = useState("counter-button-minus-active");
 

    useEffects(()=>{
        document.getElementById("moeda").innerHTML = 2*value;
    },[value])
    // toda vez que o value for alterado, o comando dentro

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
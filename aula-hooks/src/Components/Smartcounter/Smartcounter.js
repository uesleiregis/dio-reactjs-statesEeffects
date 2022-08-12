
// import {useState} from 'react';



// function SmartCounter(){

//     const [quantity, upQuantity] = useState(1);

//     return (
//         <>
//             <h1>1</h1>
//             <button onClick={()=> upQuantity(quantity + 1)} >Aumentar</button>
//         </>      
//     )   
// }

// export default SmartCounter;

import { useState } from "react";

function SmartCounter (){

    const [quantidade, incremento] = useState(1);

    return(
        <>  
            <h1>{quantidade}</h1>
            <button onClick={()=>{incremento(quantidade + 1)}}>Aumentou em {quantidade}</button>
        </>
    )
}

export default SmartCounter;
import { useState } from "react";

function Multiplicador(){

const [temp, multiplicar] = useState(2);

    return(
        <>
            <h3>Multiplica múltiplos de 2 --{">"} resultado = {temp}</h3>
            <button onClick={()=>{multiplicar(temp*2)}} >Resultado da multiplicação: {temp}</button>
        </>
    )
    
}

export default Multiplicador;
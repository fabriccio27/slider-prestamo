import React from "react";

export const BoldButton = ({text}) =>{
    return(
        <button className="bold-btn" onClick={()=>console.log(`Boton de ${text} fue clickeado`)}>{text}</button>
    )
}


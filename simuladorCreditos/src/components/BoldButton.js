import React from "react";

export const BoldButton = ({text, size}) =>{
    const getClasses=()=>{
        let classes = "bold-btn "; 
        classes += size==="bigger"? "col-6 larger-btn":"col-4 smaller-btn";
        return classes;
    }
    return(
        <button className={getClasses()} onClick={()=>console.log(`Boton de ${text} fue clickeado`)}>{text}</button>
    )
}


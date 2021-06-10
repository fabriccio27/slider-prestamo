import 'rc-slider/assets/index.css';
import Slider from "rc-slider";
import React, {useContext} from "react";
import CredContext from "../context/cred-context";

function InputAndSlider(props) {
    const {dispatchA, dispatchAS, sliderVal, amount} = useContext(CredContext);
    

    const marks={};
    marks[props.min]=props.min;
    marks[props.max]=props.max;

  
    const onSlideChange=(value)=>{
        //usar prop "to", segun el valor, usar despachar a que estado
        
        dispatchA({
            type:"CHANGE_AMOUNT",
            amount:value
        });
        dispatchAS({
            type:"CHANGE_SLIDER",
            sliderVal:value
        });
        
    }

    const onInputChange=(e)=>{
        
        dispatchA({
            type:"CHANGE_AMOUNT",
            amount:e.target.value
        });
        dispatchAS({
            type:"CHANGE_SLIDER",
            sliderVal:e.target.value
        });

        
    }
    
    return(
        <div className="slider-container">
            <input type="number" value={amount} placeholder="Input initial value" onChange={onInputChange}/>
            <Slider min={props.min} value={sliderVal} max={props.max} onChange={onSlideChange} marks={marks} /* onChange={onSlideChange} */ /> 
        </div>
    );
};

export default InputAndSlider;
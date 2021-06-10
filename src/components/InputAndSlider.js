import 'rc-slider/assets/index.css';
import Slider from "rc-slider";
import React, {useContext} from "react";
import CredContext from "../context/cred-context";

import {currencyArgentina} from"../locales/arg";

function InputAndSlider(props) {
    const {amountState, dispatchA, timeState, dispatchT} = useContext(CredContext);
    
    const isSlidingTime = props.modify==="time";

    const marks={};
    const marksStyle = {width:50, color:"white", background:'transparent', padding:'0, 1rem', left:'0%'};

    marks[props.min]= {
        style:marksStyle,
        label:isSlidingTime?props.min:props.min.toLocaleString("es-ar", currencyArgentina)
    };
    marks[props.max]={
        style:{...marksStyle, left:'95%'},
        label:isSlidingTime?props.max:props.max.toLocaleString("es-ar", currencyArgentina)
    };

  
    const onSlideChange=(value)=>{
        if (isSlidingTime){
            dispatchT({
                type:"CHANGE_TIME",
                time:value,
                slider:value
            })
        }else{
            dispatchA({
                type:"CHANGE_AMOUNT",
                amount:value,
                slider:value
            });
        }
    };

    const onInputChange=(e)=>{
        if(isSlidingTime){
            dispatchT({
                type:"CHANGE_TIME",
                time:e.target.value,
                slider:e.target.value
            });
        }else{
            dispatchA({
                type:"CHANGE_AMOUNT",
                amount:e.target.value,
                slider:e.target.value
            });

        }

    }
    
    return(
        <div className="slider-container">
            <div className="row">
                <p className="col-6">{isSlidingTime?"PLAZO":"MONTO TOTAL"}</p>
                <input type="number" value={isSlidingTime?timeState.time:amountState.amount} placeholder="Input initial value" onChange={onInputChange} className="col-6"/>
            </div>
            <Slider min={props.min} value={isSlidingTime?timeState.slider:amountState.slider} max={props.max} onChange={onSlideChange} marks={marks} className="slider" /> 
        </div>
    );
};

export default InputAndSlider;
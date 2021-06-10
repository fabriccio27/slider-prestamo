import React, {useReducer} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rc-slider/assets/index.css';
import numeral from "numeral";
import {BoldButton} from "./components/BoldButton";

import amountReducer from "./reducers/amount";
import timeReducer from "./reducers/time";
import InputAndSlider from "./components/InputAndSlider";

import CredContext from "./context/cred-context";


function App() {
  
  const [amountState, dispatchA] = useReducer(amountReducer,{amount:7000,slider:7000}); 
  const [timeState,dispatchT] = useReducer(timeReducer, {time:3, slider:3});  

  return (
    <CredContext.Provider value={{amountState,dispatchA, timeState, dispatchT}}>
      <div className="cred-box">
        <h2>Simulá tu crédito</h2>
        <InputAndSlider min={5000} max={50000} modify={"amount"}/>
        <InputAndSlider min={3} max={24} modify={"time"}/> 
        <div>
          <div className="row justify-content-center fixed-fee">
            <p className="col-6 fixed-fee__label">cuota fija por mes:</p>
            <p className="col-6 fixed-fee__value">{numeral(amountState.amount*1.9798/timeState.time).format('$0,0.00')}</p>
          </div>
          <div className="row">
          
          <BoldButton className="col-8" text={"obtené crédito"}/>
          <BoldButton className="col-4" text={"ver detalle de cuotas"}/>
          </div>
        </div>
      </div>
      
      
    </CredContext.Provider>
  );
}

export default App;
/* <InputAndSlider min={3} max={24}/> */

    /* <h3>Estos no</h3>
      <div className="slider-container">
        <input type="number" value={amount} placeholder="Input initial value" onChange={onInputChange1}/>
        <Slider min={5000} value={slideValue} max={50000} marks={{5000:"$5000",50000:"$50000"}} onChange={onSlideChange1} />
      </div>

      <div className="slider-container">
        <input type="number" value={amount2} placeholder="Input initial value" onChange={onInputChange2}/>
        <Slider min={3} value={slideValue2} max={24} marks={{3:3,24:24}} onChange={onSlideChange2} />
      </div>
      
      <div>
        <h3>Cuota fija:{amount*1.9798/amount2}</h3>
        <button onClick={()=>console.log("Obtener credito")}>OBTENÉ CRÉDITO</button>
        <button onClick={()=>console.log("Ver detalle de cuotas")}>VER DETALLES DE CUOTAS</button>
      </div> */
      
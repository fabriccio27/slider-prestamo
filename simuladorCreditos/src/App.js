import React, {useReducer} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rc-slider/assets/index.css';

import {BoldButton} from "./components/BoldButton";
import amountReducer from "./reducers/amount";
import timeReducer from "./reducers/time";
import InputAndSlider from "./components/InputAndSlider";
import FixedFee from "./components/FixedFee";

import CredContext from "./context/cred-context";


function App() {
  
  const [amountState, dispatchA] = useReducer(amountReducer,{amount:7000,slider:7000, min:5000, max:50000}); 
  const [timeState,dispatchT] = useReducer(timeReducer, {time:3, slider:3, min:3, max:24});  
  document.title="Simulador de Credito";
  return (
    <CredContext.Provider value={{amountState,dispatchA, timeState, dispatchT}}>
      <div className="cred-box">
        <h2>Simulá tu crédito</h2>
        {/* slider para el monto y slider para el plazo */}
        <InputAndSlider min={5000} max={50000} modify={"amount"}/>
        <InputAndSlider min={3} max={24} modify={"time"}/> 
        <div>
          <FixedFee /> {/* aca tengo el resultado */}
          <div className="row justify-content-around">
            <BoldButton text={"obtené crédito"} size={"bigger"}/>
            <BoldButton text={"ver detalle de cuotas"} size={"smaller"}/>
          </div>
        </div>
      </div>
      
    </CredContext.Provider>
  );
}

export default App;

import React, {useReducer} from "react";
import './App.css';
import 'rc-slider/assets/index.css';
import combineReducers from "react-combine-reducers";

import amountReducer from "./reducers/amount";
import sliderReducer from "./reducers/slider";
import InputAndSlider from "./components/InputAndSlider";

import CredContext from "./context/cred-context";


function App() {
  
  //const [rootReducerCombined, initialStateCombined]=combineReducers({reducerOne:amountReducer, reducerTwo:sliderReducer})

  const [amount, dispatchA] = useReducer(amountReducer);
  const [sliderVal,dispatchAS] = useReducer(sliderReducer); 

  return (
    <CredContext.Provider value={{amount, sliderVal, dispatchA, dispatchAS}}>
      <h2>Amount:{amount}</h2><br></br>
      <InputAndSlider min={5000} max={50000}/>
      {/* <InputAndSlider2 min={3} max={24}/> */}
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
      
import React, { useState } from "react";
import './App.css';
import 'rc-slider/assets/index.css';
import Slider from "rc-slider";
import { InputAndSlider } from "./components/InputAndSlider";


function App() {
  const [amount, setAmount] = useState(5000);
  const [slideValue, setSlide] = useState();

  const [amount2, setAmount2] = useState(3);
  const [slideValue2, setSlide2] = useState();

  const onSlideChange1=(value)=>{
    setAmount(value);
    setSlide(value);
  };
  const onInputChange1=(e)=>{
    setAmount(parseInt(e.target.value));
    setSlide(parseInt(e.target.value));
  }
  const onSlideChange2=(value)=>{
    setAmount2(value);
    setSlide2(value);
  };
  const onInputChange2=(e)=>{
    setAmount2(parseInt(e.target.value));
    setSlide2(parseInt(e.target.value));
  }
  //puedo hacer un handler que segun que slider este tocando me cambie un par de state o el otro

  return (
    <div className="content-container">
      <h3>Este es de componente</h3>
      <InputAndSlider min={200} max={600}/>
      <h3>Estos no</h3>
      <div className="slider-container">
        <input type="number" value={amount} placeholder="Input initial value" onChange={onInputChange1}/>
        <Slider min={5000} value={slideValue} max={50000} marks={{5000:5000,50000:50000}} onChange={onSlideChange1} />
      </div>

      <div className="slider-container">
        <input type="number" value={amount2} placeholder="Input initial value" onChange={onInputChange2}/>
        <Slider min={3} value={slideValue2} max={24} marks={{3:3,24:24}} onChange={onSlideChange2} />
      </div>
      
      <div>
        <h3>Cuota fija:{amount*1.9798/amount2}</h3>
        <button onClick={()=>console.log("Obtener credito")}>OBTENÉ CRÉDITO</button>
        <button onClick={()=>console.log("Ver detalle de cuotas")}>VER DETALLES DE CUOTAS</button>
      </div>
      
      
    </div>
  );
}

export default App;

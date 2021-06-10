import 'rc-slider/assets/index.css';
import Slider from "rc-slider";
import React, {useState} from "react";

function InputAndSlider(props) {
    const [amount, setAmount] = useState(props.min);
    const [slideValue, setSlide] = useState(props.min);

    const marks={};
    marks[props.min]=props.min;
    marks[props.max]=props.max;

    const onSlideChange=(value)=>{
        setAmount(value);
        setSlide(value);
      };

    const onInputChange=(e)=>{
        setAmount(parseInt(e.target.value));
        setSlide(parseInt(e.target.value));
    }
    
    return(
        <div className="slider-container">
            <input type="number" value={amount} placeholder="Input initial value" onChange={onInputChange}/>
            <Slider min={props.min} value={slideValue} max={props.max} marks={marks} onChange={onSlideChange} />
        </div>
    );
};

export {InputAndSlider};
/* state = {
    amount:this.props.min,
    slideValue:this.props.min
}

onSlideChange=(value)=>{
    this.setState(()=>{
        return {
            slideValue:value
        }
    })
};
onInputChange=(e)=>{
  this.setState(()=>{
      return {
        slideValue:e.target.value
      }
  })
}
render(){
    return(
        <div>
            <input type="number" value={this.state.amount} placeholder="Input initial value" onChange={this.onInputChange} />
            <Slider step={1} min={this.props.min} value={this.state.slideValue} max={this.props.max} onMouseUp={this.onSlideChange} />
        </div>
    );
}; */
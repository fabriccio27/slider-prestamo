const sliderReducer = (state, action)=>{
    switch(action.type){
        case "CHANGE_SLIDER":
            return action.sliderVal;
        default:
            return state;
    }
};

export default sliderReducer;
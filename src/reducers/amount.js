const amountReducer = (state, action)=>{
    switch(action.type){
        case "CHANGE_AMOUNT":
            return action.amount;
        default:
            return state;
    }

};

export default amountReducer;
const amountReducer = (state={}, action)=>{
    switch(action.type){
        case "CHANGE_AMOUNT":
            return {
                amount:action.amount,
                slider:action.amount
            }
        default:
            return state;
    }
};

export default amountReducer;
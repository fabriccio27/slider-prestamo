//al estar usando hooks, si yo no le digo que copie el state anterior pero sobrescriba esas dos props, voy a perder min y max

const amountReducer = (state={}, action)=>{
    switch(action.type){
        case "CHANGE_AMOUNT":
            return {
                ...state,
                amount:action.amount,
                slider:action.amount
            }
        default:
            return state;
    }
};

export default amountReducer;
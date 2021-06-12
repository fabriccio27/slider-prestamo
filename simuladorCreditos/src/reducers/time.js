const timeReducer = (state={}, action)=>{
    switch(action.type){
        case "CHANGE_TIME":
            return {
                ...state,
                time:action.time,
                slider:action.time
            }
        default:
            return state;
    }
};

export default timeReducer;
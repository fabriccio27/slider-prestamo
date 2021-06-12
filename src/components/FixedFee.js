import React, { useContext } from "react";
import CredContext from "../context/cred-context"


const FixedFee = () =>{
    const {amountState,timeState} = useContext(CredContext);

    const invalidAmountInput = amountState.amount<amountState.min || isNaN(amountState.amount) || amountState.amount>amountState.max;
    const invalidTimeInput = timeState.time<timeState.min || isNaN(timeState.time) || timeState.time>timeState.max;

    const fixedFee = (amountState.amount*1.9798/timeState.time).toLocaleString("en-us",{style:"currency", currency:"USD"});
    const fixedFeeSpan = <span className="fixed-fee__value">{fixedFee}</span>
    const errorSpan = <span className="fixed-fee__error">Ingrese datos validos</span>
    
    return(
        <div className="row justify-content-center">
            <p className="col-5 fixed-fee__label">cuota fija por mes:</p>
            {(invalidAmountInput||invalidTimeInput)?errorSpan:fixedFeeSpan}
        </div>

    );
}

export default FixedFee;
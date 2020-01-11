import React from "react";
import "./Error.css";

function Error(props){
    let divClass = "error-main-div";
    if(props.show){
        divClass="error-main-div error-show"
    }
    return <div className={divClass}>
        {props.message}
    </div>
}

export default Error;
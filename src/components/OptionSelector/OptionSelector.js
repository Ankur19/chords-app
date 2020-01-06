import React from "react";
import "./OptionSelector.css";




function OptionSelector(props){
    //props.currentMode --light or dark
    //props.selectorName --Name of the selector
    //props.selectorOptions --Options of the slector
    //props.currentSelected --currently selected option index
    //props.onOptionClick --function to call on option select

return <div className="options-selector-container">
    <div className="options-selector-name">{props.selectorName}</div>
    <div className="options-selector-current">
        <img className="options-selector-arrow-left" src={process.env.PUBLIC_URL + "/left-arrow.png"} alt="left"></img>
        <span className="options-selector-current-span">{props.currentSelected ===undefined ? props.selectorOptions[0] : props.selectorOptions[props.currentSelected]}</span>
        <img className="options-selector-arrow-right" src={process.env.PUBLIC_URL + "/right-arrow.png"} alt="right"></img>
    </div>
    <div className="options-selector-options"></div>
</div>;

}

export default OptionSelector;
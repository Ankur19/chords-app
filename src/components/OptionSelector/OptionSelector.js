import React from "react";
import "./OptionSelector.css";




function OptionSelector(props){
    //props.currentMode --light or dark
    //props.selectorName --Name of the selector
    //props.selectorOptions --Options of the slector
    //props.currentSelected --currently selected option index
    //props.onOptionChange --function to call on option select
    let previous = -1;
    let next = -1;
    if(props.currentSelected===props.selectorOptions.length - 1){
        next = 0;
    }
    else{
        next = props.currentSelected+1;
    }
    if(props.currentSelected===0){
        previous = props.selectorOptions.length - 1;
    }
    else{
        previous = props.currentSelected-1;
    }

    let optionSpanClass = "options-selector-current-span";
    if(props.selectorOptions[props.currentSelected].split("").length >=3){
        optionSpanClass = "options-selector-current-span selector-span-small";
    }
    let optionSelectorNameClass = "options-selector-name";
    if(props.currentMode==="dark"){
        optionSelectorNameClass += " options-selector-name-dark";
        optionSpanClass+= " options-selector-current-dark";
    }
    return <div className="options-selector-container">
        <div className={optionSelectorNameClass}>{props.selectorName}</div>
        <div className="options-selector-current">
            <img className="options-selector-arrow-left" src={process.env.PUBLIC_URL + "/left-arrow.png"} alt="left" onClick={()=>{props.onOptionChange(previous)}}></img>
            <span className={optionSpanClass}>{props.selectorOptions[props.currentSelected]}</span>
            <img className="options-selector-arrow-right" src={process.env.PUBLIC_URL + "/right-arrow.png"} alt="right" onClick={()=>{props.onOptionChange(next)}}></img>
        </div>
        <div className="options-selector-options"></div>
    </div>;

}

export default OptionSelector;
import React from "react";
import "./OptionSlider.css";

function OptionSlider(props){
    //props.sliderName - name of the option slider
    //props.sliderOptions - 2 to 5 options should have good visuals
    //props.currentSelected - current selected option
    let options = [];
    for(let i=0;i<props.sliderOptions.length;i++){

        
        if(i===props.currentSelected){
            options.push(<div key={i} className="option-slider-container-option"><div className="option-slider-option-name option-slider-option-name-selected" onClick={()=>{props.onOptionChange(i)}}>{props.sliderOptions[i]}</div></div>);
        }
        else{
            options.push(<div key={i} className="option-slider-container-option"><div className="option-slider-option-name" onClick={()=>{props.onOptionChange(i)}}>{props.sliderOptions[i]}</div></div>);
        }
        
    }



    return <div className="option-slider-main-div">
        <div className="option-slider-name">{props.sliderName}</div>
        <div className="option-slider-container">{options}</div>       
    </div>
}

export default OptionSlider
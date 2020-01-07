import React from "react";
import "./OptionSlider.css";

function OptionSlider(props){
    //props.sliderName - name of the option slider
    //props.sliderOptions - 2 to 5 options should have good visuals
    //props.currentSelected - current selected option
    let sliders = [];
    let options = [];
    for(let i=0;i<props.sliderOptions.length;i++){
        sliders.push(<img key={i} src={process.env.PUBLIC_URL + "/two-lines.png"} alt="line"></img>);
        options.push(<div  key={i} >{props.sliderOptions[i]}</div>);
    }



    return <div className="option-slider-main-div">
        <div className="option-slider-name">{props.sliderName}</div>
        <div className="option-slider-content">
            <div className="option-slider-slider-container">{sliders}</div>
            <div className="option-slider-name-container">{options}</div>
        </div>
    </div>
}

export default OptionSlider
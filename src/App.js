import React, {useState} from 'react';
import './App.css';
import ModeSwitch from './components/ModeSwitch/ModeSwitch';
import Body from './components/Body/Body';




function App() {

  const [uiMode, setUiMode] = useState("light");

  function uiModeChangeHandler(clickedState){
    if(uiMode!==clickedState){
      if(clickedState==="light"){
        setUiMode("light");
      }
      else{
        setUiMode("dark");
      }
    }
  };
let appHeaderClass="App-header";
if(uiMode==="dark"){
  appHeaderClass += " app-header-dark";
}
  return (
    <div className="App">
      <div className={appHeaderClass}>
        <header id="App-name">Chord Maker</header>
        <div id="App-mode-switch">
          <ModeSwitch currentMode={uiMode} onModeChange={uiModeChangeHandler}></ModeSwitch>
        </div>
      </div>
      <Body currentMode={uiMode}></Body>
    </div>
  );
};

export default App;

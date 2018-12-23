import React from "react";

class BuildCarEngine extends React.Component {

  enginePicked = (e) => {
    let engine = e.target.value;
      engine = parseInt(engine);
    if(engine === 0){
      this.props.changeEngine(engine, true, false)
    } else if(engine === 500){
      this.props.changeEngine(engine, false, true);
    }
  };

  render(){
    // console.log(this.props);
    return(
      <div>BuildCarEngine
        <div>
          <label> <h3>2.5 4-Cyl. Super Thruster Engine</h3>
            <p>8-Speed Automatic</p>
            <ul>
              <li>Direct Shift 8 Speed Automatic Transmission</li>
              <li>203hp @6600rp,</li>
              <li>184 lb-ft @5000 rpm</li>
              <li> VVt-i D4S self-cleaning injectors</li>
            </ul>
            <div>
              Cost: $0 (Standard)
            </div>
            <input type="radio" name="engine-price" value="0" id="engine-standard" onClick={this.enginePicked}defaultChecked={this.props.engineOneSelected}/>
          </label>
        </div>
        <div>
          <label>
            <h3>2.5 4-Cyl. Super Thruster Engine</h3>
            <p>8-Speed Manual</p>
            <ul>
              <li>Direct Shift 8 Speed Turbo</li>
              <li>203hp @6600rp,</li>
              <li>184 lb-ft @5000 rpm</li>
              <li> VVt-i D4S self-cleaning injectors</li>
            </ul>
            <div> 
              Cost: $500.00 
            </div>
            <input type="radio" name="engine-price" id="engine-manual" value="500" onClick={this.enginePicked} defaultChecked={this.props.engineTwoSelected}/>
          </label>
        </div>
      </div>
    )
  }
}

export default BuildCarEngine;
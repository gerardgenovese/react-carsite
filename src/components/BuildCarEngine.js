import React from "react";
import Footer from "./Footer";

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

      // <div>
      //   <h1 className="buildCar-engine--header">Choose Car Engine</h1>
      //   <div className="buildCar-engine--container">
      //     <div className={this.props.engineOneSelected ? "buildCar-engine--contain engine-selected  car-build__engine" : "buildCar-engine--contain  car-build__engine"}>
      //       <label className="buildCar-engine--label car-build--info"> <h3>2.5 4-Cyl. Super Thruster Engine</h3>
      //         <p>8-Speed Automatic</p>
      //         <ul>
      //           <li>Direct Shift 8 Speed Automatic Transmission</li>
      //           <li>203hp @6600rp,</li>
      //           <li>184 lb-ft @5000 rpm</li>
      //           <li> VVt-i D4S self-cleaning injectors</li>
      //         </ul>
      //         <div>
      //           Cost: $0 (Standard)
      //         </div>
      //         <input className="buildCar-engine--input" type="radio" name="engine-price" value="0" onClick={this.enginePicked}defaultChecked={this.props.engineOneSelected}/>
      //         <span class="car-build__engine--checkmark"></span>

      //       </label>
      //     </div>
      //     <div className={this.props.engineTwoSelected ? "buildCar-engine--contain engine-selected" : "buildCar-engine--contain"}>
      //       <label className="buildCar-engine--label">
      //         <h3>2.5 4-Cyl. Super Thruster Engine</h3>
      //         <p>8-Speed Manual</p>
      //         <ul>
      //           <li>Direct Shift 8 Speed Turbo</li>
      //           <li>203hp @6600rp,</li>
      //           <li>184 lb-ft @5000 rpm</li>
      //           <li> VVt-i D4S self-cleaning injectors</li>
      //         </ul>
      //         <div> 
      //           Cost: $500.00 
      //         </div>
      //         <input className="buildCar-engine--input" type="radio" name="engine-price" value="500" onClick={this.enginePicked} defaultChecked={this.props.engineTwoSelected}/>
      //       </label>
      //     </div>
      //   </div>
      // </div>




      <div>

      <h1 className="buildCar-engine--headerMain">Choose Engine Type</h1>
        <div className="buildCar-engine">
            <label className="buildCar-engine--label"> <h3 className="buildCar-engine--header">2.5 4-Cyl. Super Thruster Engine</h3>
              <p className="buildCar-engine--type">8-Speed Automatic</p>
              <ul className="buildCar-engine--specs">
                <li className="buildCar-engine--spec">Direct Shift 8 Speed Automatic Transmission</li>
                <li className="buildCar-engine--spec">203hp @6600rp,</li>
                <li className="buildCar-engine--spec">184 lb-ft @5000 rpm</li>
                <li className="buildCar-engine--spec"> VVt-i D4S self-cleaning injectors</li>
              </ul>
              <div className="buildCar-engine--cost">
                Cost: $0 (Standard)
              </div>
              <input type="radio" name="engine-price" value="0" id="engine-standard" onClick={this.enginePicked} defaultChecked={this.props.engineOneSelected}/>
              <span className="buildCar-engine--checkmark"></span>
            </label>
            <label className="buildCar-engine--label">
              <h3 className="buildCar-engine--header">2.5 4-Cyl. Super Thruster Engine</h3>
              <p className="buildCar-engine--type">8-Speed Manual</p>
              <ul className="buildCar-engine--specs">
                <li className="buildCar-engine--spec">Direct Shift 8 Speed Turbo</li>
                <li className="buildCar-engine--spec">203hp @6600rp,</li>
                <li className="buildCar-engine--spec">184 lb-ft @5000 rpm</li>
                <li className="buildCar-engine--spec"> VVt-i D4S self-cleaning injectors</li>
              </ul>
              <div className="buildCar-engine--cost"> 
                Cost: $500.00 
              </div>
              <input type="radio" name="engine-price" id ="engine-manual" value="500" onClick={this.enginePicked} defaultChecked={this.props.engineTwoSelected}/>
              <span className="buildCar-engine--checkmark"></span>
            </label>
          </div>

        <Footer />
      </div>
    )
  }
}

export default BuildCarEngine;
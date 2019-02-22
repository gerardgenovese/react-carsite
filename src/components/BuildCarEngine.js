import React from "react";
import Footer from "./Footer";

class BuildCarEngine extends React.Component {

  state={
    loading: true
  };

  componentDidMount(){
    setTimeout(() => {
      this.setState({ loading: false })
    },500);
  };

  //gets the value of the input and parses it so we can add to the total cost of car. The value represents the 2 engine types. 0 for automatic, 500 for manual. We call changeEngine in BuildCarPage and send it the value and the state of each engine, true for the engine that is clicked, false for the other.
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
    const container = { height: "30vh"};
    return(
      <div>
        {
          this.state.loading ? <div style={container}><div className="finance-loading"></div></div> :

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
            </div>
          }

        <Footer />
      </div>
    )
  }
}

export default BuildCarEngine;
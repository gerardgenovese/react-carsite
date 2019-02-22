import React from "react";

import cargoTote from "../relativeImages/accessories/cargo-tote.jpg";
import leatherMats from "../relativeImages/accessories/leather-mats.jpg";
import wheelLocks from "../relativeImages/accessories/wheel-lock.jpg";

import Footer from "./Footer";

class BuildCarAccessories extends React.Component{

  state={
    loading: true
  };

  componentDidMount(){
    setTimeout(() => {
      this.setState({ loading: false })
    },500);
  };

  //receives the data-type from the event and if the type and checkbox meet the condition we call add_remove_Cargo from the BuildCarPage and send the accessory price amount and the boolean value representing that it was checked/selected or not.
  addOrRemoveAccessories = (e) => {
    const checkbox = e.target.checked;
    const type = e.target.getAttribute("data-type");

    if(type === "cargoTote" && checkbox === true){
      this.props.add_remove_Cargo(75, true)
    } else if(type === "cargoTote" && checkbox === false) {
      return this.props.add_remove_Cargo(0,false)
    }
    if(type === "leatherMats" && checkbox === true){
      this.props.add_remove_Mats(75, true)
    } else if(type === "leatherMats" && checkbox === false){
      return this.props.add_remove_Mats(0,false)
    }
    if(type === "wheelLocks" && checkbox === true){
      this.props.add_remove_Locks(75, true)
    } else if(type === "wheelLocks" && checkbox === false) {
      return this.props.add_remove_Locks(0,false)
    }
  };

  render(){

    const container = { height: "50vh" };

    return(
      <div>
        {  
          this.state.loading ? <div style={container}><div className="finance-loading"></div></div> :
  
          <div>
            <h1 className="buildCar--header">Choose Accessories</h1>
            <div className="buildCar-flex">
              <div className="buildCar-accs">
                <div className="buildCar-accs--items">
                  <img src={cargoTote} alt="cargoTote" className="buildCar-accs--img"/>
                  <p className="buildCar-accs--header">Cargo Tote</p>
                  <p className="buildCar-accs--price">$75 <small>msrp</small></p>
                  <div className="buildCar-accs--checkbox">
                    <label className="buildCar-accs--checkbox-label">
                      <input type="checkbox" data-type="cargoTote" defaultChecked={this.props.cargoToteSelected} onClick={this.addOrRemoveAccessories}/>
                      <span className="checkmark">{this.props.cargoToteSelected ? "Added" : "Add"}</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="buildCar-accs">
                <div className="buildCar-accs--items">
                  <img src={leatherMats} alt="leatherMats" className="buildCar-accs--img" />
                  <p className="buildCar-accs--header">Leather-Mats</p>
                  <p className="buildCar-accs--price">$75 <small>msrp</small></p>

                  <div className="buildCar-accs--checkbox">
                    <label className="buildCar-accs--checkbox-label">
                      <input type="checkbox" data-type="leatherMats" defaultChecked={this.props.leatherMatsSelected} onClick={this.addOrRemoveAccessories}/>
                      <span className="checkmark">{this.props.leatherMatsSelected ? "Added" : "Add"}</span>
                    </label>
                  </div>
                </div>  
              </div>
              <div className="buildCar-accs">
                <div className="buildCar-accs--items">
                  <img src={wheelLocks} alt="wheellLocks" className="buildCar-accs--img" />
                  <p className="buildCar-accs--header">Alloy Wheel-Locks</p>
                  <p className="buildCar-accs--price">$75 <small>msrp</small></p>
                  <div className="buildCar-accs--checkbox">
                    <label className="buildCar-accs--checkbox-label">
                      <input type="checkbox" data-type="wheelLocks" defaultChecked={this.props.wheelLocksSelected} onClick={this.addOrRemoveAccessories}/>
                      <span className="checkmark">{this.props.wheelLocksSelected ? "Added" : "Add"}</span>
                    </label>
                  </div>
                </div>
              </div>  
            </div>
          </div>
      }
      <Footer />

    </div>
    )
  }
}

export default BuildCarAccessories;
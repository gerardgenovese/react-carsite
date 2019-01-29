import React from "react";
import cargoTote from "../relativeImages/accessories/cargo-tote.jpg";
import leatherMats from "../relativeImages/accessories/leather-mats.jpg";
import wheelLocks from "../relativeImages/accessories/wheel-lock.jpg";
class BuildCarAccessories extends React.Component{

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
    return(
      <div>
        {/* <div>
          <img src={cargoTote} alt="cargoTote"/>
          <div>$75.00</div>
          <input type="checkbox" data-type="cargoTote" defaultChecked={this.props.cargoToteSelected} onClick={this.addOrRemoveAccessories}/>
        </div>
        <div>
          <img src={leatherMats} alt="leatherMats"/>
          <div>$75.00</div>
          <input type="checkbox" data-type="leatherMats" defaultChecked={this.props.leatherMatsSelected} onClick={this.addOrRemoveAccessories}/>
        </div>
        <div>
          <img src={wheelLocks} alt="wheellLocks"/>
          <div>$75.00</div>
          <input type="checkbox" data-type="wheelLocks" defaultChecked={this.props.wheelLocksSelected} onClick={this.addOrRemoveAccessories}/>
        </div>  */}



      <h1 className="buildCar--header">Choose Accessories</h1>
      <div className="buildCar-flex">
        <div className="buildCar-accs">
          <div className="buildCar-accs--items">
            <img src={cargoTote} alt="cargoTote" className="buildCar-accs--img"/>
            <p className="buildCar-accs--header">Alloy Wheel Locks</p>
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
            <p className="buildCar-accs--header">Cargo-Tote</p>
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
    )
  }
}

export default BuildCarAccessories;
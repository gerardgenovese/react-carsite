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
        <div>
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
        </div> 
      </div>
    )
  }
}

export default BuildCarAccessories;
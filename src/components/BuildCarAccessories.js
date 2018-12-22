import React from "react";
import cargoTote from "../relativeImages/accessories/cargo-tote.jpg";
import leatherMats from "../relativeImages/accessories/leather-mats.jpg";
import wheelLocks from "../relativeImages/accessories/wheel-lock.jpg";
class BuildCarAccessories extends React.Component{

  addOrRemoveAccessories = (e) => {
    const checkbox = e.target.checked;
    const type = e.target.getAttribute("data-type");

    if(type === "cargoTote" && checkbox === true){
      this.props.add_remove(75)
    } else if(type === "leatherMats" && checkbox === true){
      this.props.add_remove(75)
    } else if(type === "wheelLocks" && checkbox === true){
      this.props.add_remove(75)
    } else {
      return this.props.add_remove(0);
    }
  };

  render(){
    return(
      <div>
        <div>
          <img src={cargoTote} alt="cargoTote"/>
          <div>$75.00</div>
          <input type="checkbox" data-type="cargoTote" onClick={this.addOrRemoveAccessories}/>
        </div>
        <div>
          <img src={leatherMats} alt="leatherMats"/>
          <div>$75.00</div>
          <input type="checkbox" data-type="leatherMats" onClick={this.addOrRemoveAccessories}/>
        </div>
        <div>
          <img src={wheelLocks} alt="wheellLocks"/>
          <div>$75.00</div>
          <input type="checkbox" data-type="wheelLocks" onClick={this.addOrRemoveAccessories}/>
        </div> 
      </div>
    )
  }
}

export default BuildCarAccessories;
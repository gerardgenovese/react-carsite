import React from "react";







class AccessoryCheckbox extends React.Component {


  render(){

    return(
      <div className="carInv-tab">
        <input type="checkbox" id="main-header5"className="carInv-tab--header" />
        <label htmlFor="main-header5" className="carInv-tab--header-label">Accessories</label>
        <div className="carInv-tab--content">
          <div className="carInv-tab--content-flex">
            <input type="checkbox" id="car-accessory1" className="carInv-tab--content-input" data-type="accessory" value="Cargo Tote" onChange={this.getInventoryOption}/>
            <label htmlFor="car-accessory1" className="carInv-tab--content-label">Cargo Tote</label>
          </div>
          <div className="carInv-tab--content-flex">
            <input type="checkbox" id="car-accessory2" className="carInv-tab--content-input" data-type="accessory" value="Leather Mats" onChange={this.getInventoryOption}/>
            <label htmlFor="car-accessory2" className="carInv-tab--content-label">Leather Mats</label>
          </div>
          <div className="carInv-tab--content-flex">
            <input type="checkbox" id="car-accessory3" className="carInv-tab--content-input" data-type="accessory" value="Wheel Locks" onChange={this.getInventoryOption}/>
            <label htmlFor="car-accessory3" className="carInv-tab--content-label">Wheel Locks</label>
          </div>
        </div>
      </div>
    )
  }
}

export default AccessoryCheckbox;



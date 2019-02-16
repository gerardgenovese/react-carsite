import React from "react";







class ColorsCheckbox extends React.Component {


  render(){

    return(
      <div className="carInv-tab">
        <input type="checkbox" id="main-header4"className="carInv-tab--header" />
        <label htmlFor="main-header4" className="carInv-tab--header-label">Exterior Color</label>
        <div className="carInv-tab--content">
          <div className="carInv-tab--content-flex">
            <input type="checkbox" id="car-color1" className="carInv-tab--content-input" data-type="color" value="white" onChange={this.getInventoryOption}/>
            <div className="carInv-color carInv-color--white"></div>
            <label htmlFor="car-color1" className="carInv-tab--content-label carInv-color--text">White</label>
          </div>
          <div className="carInv-tab--content-flex">
            <input type="checkbox" id="car-color2" className="carInv-tab--content-input" data-type="color" value="black" onChange={this.getInventoryOption}/>
            <div className="carInv-color carInv-color--black"></div>
            <label htmlFor="car-color2" className="carInv-tab--content-label carInv-color--text">Black</label>
          </div>
          <div className="carInv-tab--content-flex">
            <input type="checkbox" id="car-color3" className="carInv-tab--content-input" data-type="color" value="gray" onChange={this.getInventoryOption}/>
            <div className="carInv-color carInv-color--gray"></div>
            <label htmlFor="car-color3" className="carInv-tab--content-label carInv-color--text">Gray</label>
          </div>
          <div className="carInv-tab--content-flex">
            <input type="checkbox" id="car-color4" className="carInv-tab--content-input" data-type="color" value="smoke" onChange={this.getInventoryOption}/>
            <div className="carInv-color carInv-color--smoke"></div>
            <label htmlFor="car-color4" className="carInv-tab--content-label carInv-color--text">Smoke</label>
          </div>
          <div className="carInv-tab--content-flex">
            <input type="checkbox" id="car-color5" className="carInv-tab--content-input" data-type="color" value="blue" onChange={this.getInventoryOption}/>
            <div className="carInv-color carInv-color--blue"></div>
            <label htmlFor="car-color5" className="carInv-tab--content-label carInv-color--text">Blue</label>
          </div>
          <div className="carInv-tab--content-flex">
            <input type="checkbox" id="car-color6" className="carInv-tab--content-input" data-type="color" value="red" onChange={this.getInventoryOption}/>
            <div className="carInv-color carInv-color--red"></div>
            <label htmlFor="car-color6" className="carInv-tab--content-label carInv-color--text">Red</label>
          </div>
        </div>
      </div>
    )
  }
}

export default ColorsCheckbox;



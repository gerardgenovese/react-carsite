import React from "react";







class EngineCheckbox extends React.Component {



  render(){

    return(
      <div className="carInv-tab">
        <input type="checkbox" id="main-header2"className="carInv-tab--header" />
        <label htmlFor="main-header2" className="carInv-tab--header-label">Engine</label>
        <div className="carInv-tab--content">
          <div className="carInv-tab--content-flex">
            <input type="checkbox" id="engine-acc1" className="carInv-tab--content-input" data-type="engine" value="8 Speed Automatic" onChange={this.onUserClickEngine}/>
            <label htmlFor="engine-acc1" className="carInv-tab--content-label">2.5 4-Cyl 8 speed Automatic</label>
          </div>
          <div className="carInv-tab--content-flex">
            <input type="checkbox" id="engine-acc2" className="carInv-tab--content-input" data-type="engine" value="8 Speed Manual" onChange={this.onUserClickEngine}/>
            <label htmlFor="engine-acc2" className="carInv-tab--content-label">2.5 4-Cyl 8 speed Manual</label>
          </div>
        </div>
      </div>
    )
  }
}

export default EngineCheckbox;



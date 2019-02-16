import React from "react";


class RangeSlider extends React.Component {




onRangeOne = (e) => {
  // e.persist();
  this.props.rangeOne(e);
};
onRangeTwo = (e) => {
  // e.persist();
  this.props.rangeTwo(e);
};






  render(){

    let sliderOne = this.props.sliderOneDefaultValue;
    let sliderTwo = this.props.sliderTwoDefaultValue;

    return(
      <div>
        <div className="carInv-tab">
          <input type="checkbox" id="main-header3"className="carInv-tab--header" />
          <label htmlFor="main-header3" className="carInv-tab--header-label">Price</label>
          <div className="carInv-tab--content range">

            <div className="range-container">
              <div className="range-flex">
                {this.props.sliderRange()}
              </div>
              <input type="range" min={sliderOne} max={sliderTwo} defaultValue={sliderOne} className="slider" id="lower" onChange={this.onRangeOne} data-type="range"/>
              <input type="range" min={sliderOne} max={sliderTwo} defaultValue={sliderTwo} className="slider" id="higher" onChange={this.onRangeTwo} data-type="range"/>
            </div>
          </div>
        </div> 
      </div>
    )
  }
}

export default RangeSlider;



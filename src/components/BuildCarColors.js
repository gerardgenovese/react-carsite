import React from "react";

class BuildCarColors extends React.Component {

  onChangeColor = (e) => {
    e.preventDefault();
    let color = e.target.getAttribute("data-type");
    let image = this.props.image.replace(/white|black|gray|smoke|blue|red/i, color);
    this.props.changeColor(color, image)
  };

  render(){
    // console.log("buildcarcolorsprops", this.props.car)
    return(
      <div>
        <h1>buildcarcolor</h1>
        <button className="button-colors white" data-type="white" onClick={this.onChangeColor}></button>
        <button className="button-colors black" data-type="black" onClick={this.onChangeColor}></button>
        <button className="button-colors gray" data-type="gray" onClick={this.onChangeColor}></button>
        <button className="button-colors smoke" data-type="smoke" onClick={this.onChangeColor}></button>
        <button className="button-colors blue" data-type="blue" onClick={this.onChangeColor}></button>
        <button className="button-colors red" data-type="red" onClick={this.onChangeColor}></button>
      </div>
    )
  }
}

export default BuildCarColors;
import React from "react";
import Footer from "./Footer";

class BuildCarColors extends React.Component {

  state={
    loading: true
  };

  componentDidMount(){
    setTimeout(() => {
      this.setState({ loading: false })
    },500);
  };

  //gets the data-type which is the color of the input and replaces it in the image string to show the correct car color. Then calls changeColor from BuildCarPage and sends that data along to setState.
  onChangeColor = (e) => {
    e.preventDefault();
    let color = e.target.getAttribute("data-type");
    let image = this.props.image.replace(/white|black|gray|smoke|blue|red/i, color);
    this.props.changeColor(color, image)
  };

  render(){
    // console.log("buildcarcolorsprops", this.props.car)
    const container = {
      height: "22.5vh"
    }
    return(
      <div>
        {
          this.state.loading ? <div style={container}><div className="finance-loading"></div></div> :

          <div>
            <h1 className="button-colors--header">Choose Car Color</h1>
            <div className="button-colors--container">
              <div>
                <button className="button-colors white" data-type="white" onClick={this.onChangeColor}></button>
                <button className="button-colors black" data-type="black" onClick={this.onChangeColor}></button>
                <button className="button-colors gray" data-type="gray" onClick={this.onChangeColor}></button>
              </div>
              <div>
                <button className="button-colors smoke" data-type="smoke" onClick={this.onChangeColor}></button>
                <button className="button-colors blue" data-type="blue" onClick={this.onChangeColor}></button>
                <button className="button-colors red" data-type="red" onClick={this.onChangeColor}></button>
              </div>
            </div>
          </div>

        }
        <Footer />
      </div>
    )
  }
}

export default BuildCarColors;
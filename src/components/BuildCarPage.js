import React from "react";
import { connect } from "react-redux";
import BuildCarColors from "./BuildCarColors";
import BuildCarEngine from "./BuildCarEngine";
// import { pickColor } from "../redux/actions";
class BuildCarPage extends React.Component{

 state = {
    title: this.props.car.title,
    image: this.props.car.img,
    carAngle: 0,
    color: this.props.car.color,
    price: this.props.car.price,
    engine: this.props.car.engine,
    engineOneSelected: true,
    engineTwoSelected: false,
    buildNavLinks: 0,
    buildCarColors: true,
    buildCarEngine: false,
  };

  changeBuildOption = (e) => {
    let show = e.target.getAttribute("data-value");
      switch(show){
        case "buildCarColors":
          this.setState({buildCarColors: true, buildCarEngine:false});
          break;
        case "buildCarEngine":
          this.setState({buildCarColors: false, buildCarEngine: true});
          break;
        default:
          this.setState({buildCarColors:true, buildCarEngine: false});
      } 
      console.log(show);
  };

  changeColor = (color, image) => {
    this.setState({color, image})
  };

  rotateCarImage = (e) => {
    e.preventDefault();
    
    let side = `/images/${this.state.title}/side/${this.state.color}.jpg`;
    let back = `/images/${this.state.title}/back/${this.state.color}.jpg`;
    let front = `/images/${this.state.title}/front/${this.state.color}.jpg`;
    let sideFront = `/images/${this.state.title}/sidefront/${this.state.color}.jpg`;

    let allCarAngles = [front, back, side, sideFront];

    let count = this.state.carAngle;
    if(count < 3){
      this.setState((prevState) => {
        return {
          carAngle: prevState.carAngle + 1,
          image: allCarAngles[this.state.carAngle]
        }
      })
    } else {
      this.setState({
        carAngle: 0,
        image: allCarAngles[this.state.carAngle]
      })
    }
  };

  changeEngine = (enginePicked, engineOne, engineTwo) => {
    this.setState({ 
      engine: enginePicked,
      engineOneSelected: engineOne,
      engineTwoSelected: engineTwo
    })
  };
  
  render(){
    console.log("buildcarpagestate",this.state);
    return(
      <div>
        <div>{this.state.title}</div>
        <div>{this.state.price}</div>
        <img src={this.state.image} alt={this.state.title}/>
        <button onClick={this.rotateCarImage}>-></button>
        <div data-value="buildCarColors" onClick={this.changeBuildOption}>
          Colors
        </div>
          <div data-value="buildCarEngine" onClick={this.changeBuildOption}>
            Engine
          </div>
          {
            this.state.buildCarColors ? <BuildCarColors image={this.state.image} changeColor={this.changeColor} /> : <BuildCarEngine engineOneSelected={this.state.engineOneSelected} engineTwoSelected={this.state.engineTwoSelected} changeEngine={this.changeEngine}/>
          }  
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  // console.log("mapstatetoprops",state);
  return {car: state.buildCar}
}

export default connect(mapStateToProps)(BuildCarPage);

// export default BuildCarPage;
import React from "react";
import { connect } from "react-redux";
import BuildCarColors from "./BuildCarColors";
import BuildCarEngine from "./BuildCarEngine";
import BuildCarAccessories from "./BuildCarAccessories";
import BuildCarCalculator from "./BuildCarCalculator";
// import { pickColor } from "../redux/actions";
class BuildCarPage extends React.Component{

 state = {
    title: this.props.car.title,
    image: this.props.car.img,
    carAngle: 0,
    color: this.props.car.color,
    // price: this.props.car.price,
    engine: this.props.car.engine,
    engineOneSelected: true,
    engineTwoSelected: false,
    cargoTote: {
      price: 0,
      selected:false
    },
    leatherMats:{
      price: 0,
      selected: false
    },
    wheelLocks: {
      price: 0,
      selected: false
    },
    buildNavLinks: 0,
    buildCarColors: true,
    buildCarEngine: false,
    buldCarAccessories: false,
    buildCarCalculator: false,
    totalPrice: this.props.car.price
  };



//allows us to click link and show build menu underneath car display
  changeBuildOption = (e) => {
    let show = e.target.getAttribute("data-value");
      switch(show){
        case "buildCarColors":
          this.setState({buildCarColors: true, buildCarEngine:false, buildCarAccessories: false, buildCarCalculator: false});
          break;
        case "buildCarEngine":
          this.setState({buildCarColors: false, buildCarEngine: true, buildCarAccessories: false, buildCarCalculator: false});
          break;
        case "buildCarAccessories":
          this.setState({buildCarColors: false, buildCarEngine: false, buildCarAccessories: true, buildCarCalculator: false});
          break;
        case "buildCarCalculator":
          this.setState({buildCarColors: false, buildCarEngine: false, buildCarAccessories: false, buildCarCalculator: true});
          break;
        default:
          this.setState({buildCarColors:true, buildCarEngine: false, buildCarAccessories: false, buildCarCalculator: false});
      } 
      console.log(show);
  };

  //change color menu
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

//change engine menu
  changeEngine = (enginePicked, engineOne, engineTwo) => {
    this.setState({ 
      engine: enginePicked,
      engineOneSelected: engineOne,
      engineTwoSelected: engineTwo
    })
    this.getTotal();
  };

//add accessory menu
  add_remove_cargoTote = (price, selected) => {
    let cargoTote = JSON.parse(JSON.stringify(this.state.cargoTote));
    cargoTote.price = price;
    cargoTote.selected = selected;
    this.setState({
      cargoTote
    })
    this.getTotal();
  };
  add_remove_leatherMats = (price, selected) => {
    let leatherMats = JSON.parse(JSON.stringify(this.state.wheelLocks));
    leatherMats.price = price;
    leatherMats.selected = selected;
    this.setState({
      leatherMats
    })
    this.getTotal();
  };
  add_remove_wheelLocks = (price, selected) => {
    let wheelLocks = JSON.parse(JSON.stringify(this.state.wheelLocks));
    wheelLocks.price = price;
    wheelLocks.selected = selected;
    this.setState(({
      wheelLocks
    }))
    this.getTotal();
  };

  getTotal() {
    setTimeout(() => {
      const getCargo = JSON.parse(JSON.stringify(this.state.cargoTote));
      const getMats = JSON.parse(JSON.stringify(this.state.leatherMats));
      const getLocks = JSON.parse(JSON.stringify(this.state.wheelLocks));
      const cargoTote = getCargo.price;
      const leatherMats = getMats.price;
      const wheelLocks = getLocks.price;
      const total = this.props.car.price + this.state.engine + cargoTote + leatherMats + wheelLocks;

      // console.log(this.state.price + this.state.engine + cargoTote + leatherMats + wheelLocks);
      this.setState({totalPrice:total})
    },100);
  };

  
  render(){
    console.log("buildcarpagestate",this.state);
    return(
      <div>
        <div>{this.state.title}</div>
        <div>{this.state.totalPrice}</div>
        <img src={this.state.image} alt={this.state.title}/>
        <button onClick={this.rotateCarImage}>-></button>
        <div data-value="buildCarColors" onClick={this.changeBuildOption}>
          Colors
        </div>
          <div data-value="buildCarEngine" onClick={this.changeBuildOption}>
            Engine
          </div>
          <div data-value="buildCarAccessories" onClick={this.changeBuildOption}>
            Accessories
          </div>
          <div data-value="buildCarCalculator" onClick={this.changeBuildOption}>
            Loan Calculator
          </div>
          {
            this.state.buildCarColors ? 
              <BuildCarColors 
                image={this.state.image} 
                changeColor={this.changeColor} 
              /> 
              : this.state.buildCarEngine ? 
              <BuildCarEngine 
                engineOneSelected={this.state.engineOneSelected} 
                engineTwoSelected={this.state.engineTwoSelected} 
                changeEngine={this.changeEngine} 
              /> 
              : this.state.buildCarAccessories ?
              <BuildCarAccessories 
                cargoToteSelected={this.state.cargoTote.selected} 
                leatherMatsSelected={this.state.leatherMats.selected} 
                wheelLocksSelected={this.state.wheelLocks.selected} 
                add_remove_Cargo={this.add_remove_cargoTote} 
                add_remove_Mats={this.add_remove_leatherMats} 
                add_remove_Locks={this.add_remove_wheelLocks}  
              /> 
              : <BuildCarCalculator carPrice={this.state.totalPrice}/>
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
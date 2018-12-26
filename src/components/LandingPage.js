import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { buildCar } from "../redux/actions";

class LandingPage extends React.Component{

  renderCars() {
    return this.props.allCars.map(car => {
      return(

          <div key={car.title}>
            <NavLink to="/build" >
              <img src={car.img} onClick={()=> {
              return this.props.buildCar(car)
            }} alt="car"/>
            </NavLink>
          </div>
      )
    });
  }

  render(){
    return(
      <div>
        {this.renderCars()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log("landingstate",state);
  return {
    allCars: state.allCars,
    // pickColor: state.pickColor,
    // pickEngine: state.pickEngine
  
  }
}

export default connect(mapStateToProps, {
  buildCar,
})(LandingPage);
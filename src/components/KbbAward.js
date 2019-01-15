import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { buildCar } from "../redux/actions"

import kbbaward from "../relativeImages/kbb-award.png"


class KbbAward extends React.Component {
  
  render(){
    console.log(this.props)
    return(
      <div className="kbb">
        <div className="kbb-container">
          <div>
            <img className="kbb-img" src={kbbaward} alt="kelly blue book award" />
          </div>
          <div className="kbb-info">
            <p>2018 Toyota {this.props.car.title}</p>
            <p className="kbb-info--spacing">Best Resale Value: </p>
            <p>Luxury Sedan<sup className="kbb-info--sup">30</sup></p>
          </div>
        </div>
        
          <div className="kbb-button--flex" onClick={() => this.props.buildCar(this.props.car)}>
            <Link to="/build">
              {/* <div className="kbb-button--border">
                <button className="kbb-button"> Explore Avalon</button>
              </div> */}
              <div className="kbb-button">
                <button className="kbb-button--main"></button>
                <div className="kbb-button--text">Next</div>
              </div>
            </Link>
          </div>
     
      </div>
    )
  } 
};

const mapStateToProps = (state) => {
  return{
    car: state.allCars[3]
  }
};

export default connect(mapStateToProps,{
  buildCar
})(KbbAward);
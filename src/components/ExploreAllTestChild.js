import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { buildCar } from "../redux/actions";

import camrySide from "../relativeImages/exploreall/camry/side.PNG"
import camryFront from "../relativeImages/exploreall/camry/front.PNG"
import t86Side from "../relativeImages/exploreall/86/side.PNG"
import t86Front from "../relativeImages/exploreall/86/front.PNG"
import corollaSide from "../relativeImages/exploreall/corolla/side.PNG"
import corollaFront from "../relativeImages/exploreall/corolla/front.PNG"
import avalonSide from "../relativeImages/exploreall/avalon/side.png"
import avalonFront from "../relativeImages/exploreall/avalon/front.png"
import yarisSide from "../relativeImages/exploreall/yaris/side.png"
import yarisFront from "../relativeImages/exploreall/yaris/front.png"

class ExploreAllTestChild extends React.Component{

  state = {
    cars: this.props.cars,
  };








  render(){
    return(
      <div className="explore">
      <Link to="/build" onClick={() => this.props.buildCar(this.state.cars[0])}>
        <div className={this.props.camryAnimate ? "explore-car carAnimate" : "explore-car"}>
          <div>
            <img className="explore-car--side" src={camrySide} alt="camry"/>
            <img className="explore-car--front" src={camryFront} alt="camry"/>
          </div>
          <div className="explore-car--info">
            <div className="explore-car--model"><strong>2019 {this.state.cars[0].title}</strong></div> 
            <div className="explore-car--price">${this.state.cars[0].price}</div>
            <div className="explore-car--mileage">{this.state.cars[0].miles} est MPG</div>
          </div>
        </div>  
      </Link>
      <Link to="/build" onClick={() => this.props.buildCar(this.state.cars[1])}>
        <div className={this.props.t86Animate ? "explore-car carAnimate" : "explore-car"}>
          <div>
            <img className="explore-car--side t86" src={t86Side} alt="86"/>
            <img className="explore-car--front t86" src={t86Front} alt="86"/>
          </div>
          <div className="explore-car--info t86">
            <div className="explore-car--model"><strong>2019 {this.state.cars[1].title}</strong></div> 
            <div className="explore-car--price">${this.state.cars[1].price}</div>
            <div className="explore-car--mileage">{this.state.cars[1].miles} est MPG</div>
          </div>
        </div>  
      </Link>
      <Link to="/build" onClick={() => this.props.buildCar(this.state.cars[2])}>
        <div className={this.props.corollaAnimate ? "explore-car carAnimate" : "explore-car"}>
          <div>
            <img className="explore-car--side corolla" src={corollaSide} alt="corolla"/>
            <img className="explore-car--front corolla" src={corollaFront} alt="corolla"/>
          </div>
          <div className="explore-car--info corolla">
            <div className="explore-car--model"><strong>2019 {this.state.cars[2].title}</strong></div> 
            <div className="explore-car--price">${this.state.cars[2].price}</div>
            <div className="explore-car--mileage">{this.state.cars[2].miles} est MPG</div>
          </div>
        </div>  
      </Link>
      <Link to="/build" onClick={() => this.props.buildCar(this.state.cars[3])}>
        <div className={this.props.avalonAnimate ? "explore-car carAnimate" : "explore-car"}>
          <div>
            <img className="explore-car--side avalon" src={avalonSide} alt="avalon"/>
            <img className="explore-car--front avalon" src={avalonFront} alt="avalon"/>
          </div>
          <div className="explore-car--info avalon">
            <div className="explore-car--model"><strong>2019 {this.state.cars[3].title}</strong></div> 
            <div className="explore-car--price">${this.state.cars[3].price}</div>
            <div className="explore-car--mileage">{this.state.cars[3].miles} est MPG</div>
          </div>
        </div> 
      </Link>
      <Link to="/build" onClick={() => this.props.buildCar(this.state.cars[4])}> 
        <div className={this.props.yarisAnimate ? "explore-car carAnimate" : "explore-car"}>
          <div>
            <img className="explore-car--side yaris" src={yarisSide} alt="yaris"/>
            <img className="explore-car--front yaris" src={yarisFront} alt="yaris="/>
          </div>
          <div className="explore-car--info yaris">
            <div className="explore-car--model"><strong>2019 {this.state.cars[4].title}</strong></div> 
            <div className="explore-car--price">${this.state.cars[4].price}</div>
            <div className="explore-car--mileage">{this.state.cars[4].miles} est MPG</div>
          </div>
        </div>  
      </Link>
    </div> 
 

    )
  }
}
const mapStateToProps = (state) => {
  return {
    cars: state.allCars
  }
};

export default connect(mapStateToProps,{
  buildCar
})(ExploreAllTestChild);
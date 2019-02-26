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

import { CarPriceToString } from "./Functions";

class SelectCars extends React.Component {


  closeMenu = () => {
    this.props.closeMenu();
  };

  render(){
    // console.log("props", this.props)
    //props coming in from Nav.js as well as redux store & camryAnimate classNames etc are in exploreAll.scss

    const { cars } = this.props;
    return (
   
      <div className="select-flex">
        <div className={this.props.menu ? "select-container" : "select-container--hidden"}>
          <Link to="/build/camry" onClick={() => this.props.buildCar(this.props.cars[0])}>
            <div className={this.props.menu ? "select-car camryAnimate" : "select-car"} onClick={this.closeMenu}>
              <div>
                <img className="select-car--side" src={camrySide} alt="camry"/>
                <img className="select-car--front" src={camryFront} alt="camry"/>
              </div>
              <div className="select-car--info">
                <div className="select-car--model"><strong>2019 {this.props.cars[0].title}</strong></div> 
                <div className="select-car--price">{CarPriceToString(cars[0].price)}</div>
                <div className="select-car--mileage">{this.props.cars[0].miles} est MPG</div>
              </div>
            </div>  
          </Link>
        </div> 

        <div className={this.props.menu ? "select-container" : "select-container--hidden"}>  
          <Link to="/build/86" onClick={() => this.props.buildCar(this.props.cars[1])}>
            <div className={this.props.menu ? "select-car t86Animate" : "select-car"} onClick={this.closeMenu}>
              <div>
                <img className="select-car--side t86" src={t86Side} alt="86"/>
                <img className="select-car--front t86" src={t86Front} alt="86"/>
              </div>
              <div className="select-car--info t86">
                <div className="select-car--model"><strong>2019 {this.props.cars[1].title}</strong></div> 
                <div className="select-car--price">{CarPriceToString(cars[1].price)}</div>
                <div className="select-car--mileage">{this.props.cars[1].miles} est MPG</div>
              </div>
            </div>  
          </Link>
        </div> 

        <div className={this.props.menu ? "select-container" : "select-container--hidden"}>
          <Link to="/build/corolla" onClick={() => this.props.buildCar(this.props.cars[2])}>
            <div className={this.props.menu ? "select-car corollaAnimate" : "select-car"} onClick={this.closeMenu}>
              <div>
                <img className="select-car--side corolla" src={corollaSide} alt="corolla"/>
                <img className="select-car--front corolla" src={corollaFront} alt="corolla"/>
              </div>
              <div className="select-car--info corolla">
                <div className="select-car--model"><strong>2019 {this.props.cars[2].title}</strong></div> 
                <div className="select-car--price">{CarPriceToString(cars[2].price)}</div>
                <div className="select-car--mileage">{this.props.cars[2].miles} est MPG</div>
              </div>
            </div>  
          </Link>
        </div> 

        <div className={this.props.menu ? "select-container" : "select-container--hidden"}>
          <Link to="/build/avalon" onClick={() => this.props.buildCar(this.props.cars[3])}>
            <div className={this.props.menu ? "select-car avalonAnimate" : "select-car"} onClick={this.closeMenu}>
              <div>
                <img className="select-car--side avalon" src={avalonSide} alt="avalon"/>
                <img className="select-car--front avalon" src={avalonFront} alt="avalon"/>
              </div>
              <div className="select-car--info avalon">
                <div className="select-car--model"><strong>2019 {this.props.cars[3].title}</strong></div> 
                <div className="select-car--price">{CarPriceToString(cars[3].price)}</div>
                <div className="select-car--mileage">{this.props.cars[3].miles} est MPG</div>
              </div>
            </div> 
          </Link>
        </div> 

        <div className={this.props.menu ? "select-container" : "select-container--hidden"}>
          <Link to="/build/yaris" onClick={() => this.props.buildCar(this.props.cars[4])}> 
            <div className={this.props.menu ? "select-car yarisAnimate" : "select-car"} onClick={this.closeMenu}>
              <div>
                <img className="select-car--side yaris" src={yarisSide} alt="yaris"/>
                <img className="select-car--front yaris" src={yarisFront} alt="yaris="/>
              </div>
              <div className="select-car--info yaris">
                <div className="select-car--model"><strong>2019 {this.props.cars[4].title}</strong></div> 
                <div className="select-car--price">{CarPriceToString(cars[4].price)}</div>
                <div className="select-car--mileage">{this.props.cars[4].miles} est MPG</div>
              </div>
            </div>  
          </Link>
        </div> 
        <div>
            <div className={this.props.menu ? "select-container" : "select-container--hidden"}>
              <div>
                <div className="select-car--side--bottomspace">&nbsp;</div>
              </div>
            </div>  
        </div> 
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
})(SelectCars);
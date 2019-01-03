import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { buildCar } from "../redux/actions";

class BuildPriceSelection extends React.Component {


  miles(title) {
    switch(title){
      case "camry":
        return "29/32";
       case "86":
        return "22/28";
      case "corolla":
        return "28/35";
      case "avalon":
        return "25/30";
      case "yaris":
        return "30/35";
      default:
        return title
    }
  }


  createAsShownPriceRandomly(price){
    var getPrice = price + Math.floor(Math.random() * 1000);
    var priceToString = getPrice.toString()
    var removeLastDigit = priceToString.substr(0, priceToString.length -1)
    var newTotal = removeLastDigit + 0;
    return newTotal;
  }

  upperCaseFirstLetter(title){
    return title.substr(0,1).toUpperCase() + title.substr(1);
  }

  renderCars() {

    return this.props.allCars.map(car => {
      const regEx = car.img.replace(/sidefront/g, "side");
      return(       
        <div key={car.title} className="build_price-renderBox" onClick={()=>{
          return this.props.buildCar(car);
          }}> 

          <img src={regEx} className="build_price-img" alt="car"/>
          <div className="build_price-asShown">
            <div>${this.createAsShownPriceRandomly(car.price)} as shown</div>
          </div>
          <div className="build_price-info">
           
            <div className="build_price-info--title-flex">
              <div className="build_price-info--year">  2019 &nbsp;</div>
              <div className="build_price-info--title"> {this.upperCaseFirstLetter(car.title)}</div>
            </div>
            <div className="build_price-info--starting">${car.price} starting<sup>1</sup></div>
            <div className="build_price-info--miles">{this.miles(car.title)} est mpg<sup>5</sup></div>
          </div>
        </div>
      )
    });
  }

  render(){
    console.log("carselectionstate",this.state)
    console.log("carselection", this.props)
    return(
      <div className="build_price">
        <div>
          <div className="build_price-header">Build Your Toyota</div>
          <div className="build_price-text">Customize your own Toyota car, truck, SUV, crossover, hybrid or minivan by selecting the below models to get started.</div>
        </div>
        <div className="build_price-main">
          <div>
            <div className="build_price-carLinks">
              <button className="build_price-carLinks--button">Cars</button>
            </div>
          <div>
         
            <div className="build_price-contain">
            <Link to="/build" className="build_price-flex">
              {this.renderCars()}
              </Link>
            </div>
        
          </div>
        </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    allCars: state.allCars
  }
};
export default connect(mapStateToProps,{
  buildCar
})(BuildPriceSelection);
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { buildCar } from "../redux/actions";

import { Capitalize, CarPriceToString, CreateAsShownPriceRandomly, Miles } from "./Functions";

import Footer from "./Footer";

class SearchInventory extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  };
  
  // miles(model) {
  //   switch(model){
  //     case "camry":
  //       return "29/32";
  //      case "86":
  //       return "22/28";
  //     case "corolla":
  //       return "28/35";
  //     case "avalon":
  //       return "25/30";
  //     case "yaris":
  //       return "30/35";
  //     default:
  //       return model
  //   }
  // };


  // createAsShownPriceRandomly(price){
  //   var getPrice = price + Math.floor(Math.random() * 1000);
  //   var priceToString = getPrice.toString()
  //   var removeLastDigit = priceToString.substr(0, priceToString.length -1)
  //   var newTotal = removeLastDigit + 0;
  //   return newTotal;
  // }

  // upperCaseFirstLetter(model){
  //   return model.substr(0,1).toUpperCase() + model.substr(1);
  // }

  renderCars() {

    return this.props.allCars.map(car => {
      const regEx = car.img.replace(/sidefront/g, "side");

      const carLink = `/build/${car.model}`

      return(       
        <Link to={carLink} key={car.model} className="build_price-renderBox" onClick={()=>{
          return this.props.buildCar(car);
          }}> 

          <img src={regEx} className="build_price-img" alt="car"/>
          <div className="build_price-asShown">
            <div>{ CarPriceToString(CreateAsShownPriceRandomly(car.price)) } as shown</div>
          </div>
          <div className="build_price-info">
            <div className="build_price-info--flex">
              <div className="build_price-info--year">  2019 &nbsp;</div>
              <div className="build_price-info--title"> { Capitalize(car.model) }</div>
            </div>
            <div className="build_price-info--starting">{ CarPriceToString(car.price) } starting<sup>1</sup></div>
            <div className="build_price-info--miles">{Miles(car.model)} est mpg<sup>5</sup></div>
          </div>
        </Link>
      )
    });
  }

  render(){
    console.log("carselectionstate",this.state)
    console.log("carselection", this.props)
    return(
      <div className="build_price">
        <div className="build_price-header">Search Inventory</div>
        <div className="build_price-carLinks">
          <button className="build_price-carLinks--cars">Cars</button>
        </div>
        
        <div className="build_price-contain">
          {this.renderCars()}
        </div>
        <Footer />
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
})(SearchInventory);
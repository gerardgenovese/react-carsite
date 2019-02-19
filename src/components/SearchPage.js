import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { buildCar } from "../redux/actions";
import Footer from "./Footer";

class Search extends React.Component{

  state = {
    cars: [],
    textInput: "",
    carIsShowing: false,
    carModels: [],
    carImage: "",
    carModel: "",
    carPrice: "",
    carIndex: undefined,
    carInfo: []
  };

  //grabs car array from redux store and propagates this.state.cars with array of cars & carModels with an array of all model names
  componentWillMount(){
    const models = [];
    this.props.cars.forEach(car => models.push(car.model));
    this.setState({ cars: this.props.cars, carModels: models });
  };

  //auto scroll to top of page when coming from another page
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  //matches the textInput from the user to the car model
  filterList = (e) => {
    this.setState({ textInput: e.target.value.toLowerCase() })
    let searchCar = (/camry|86|corolla|avalon|yaris/i, e.target.value.toLowerCase());
    let carIndex = this.state.carModels.indexOf(searchCar);

    if(searchCar !== this.state.textInput){
      this.setState(() => ({
        carImage: "",
        carModel: "",
        carPrice: "",
        carIndex: undefined,
        carInfo: []
      }), () => { this.showCar() });
    }
    if(carIndex !== -1){
      let getCar = this.state.cars[carIndex]

      this.setState(() => ({
        carImage: getCar.img,
        carModel: getCar.model,
        carPrice: getCar.price,
        carIndex,
        carInfo: this.state.cars[carIndex]
      }), () => { this.showCar() });
    } 
    
  };

  //shows the car match on UI
  showCar = () => {
    // this.setState({ carIsShowing: false });
    // // setTimeout(() => {
    //   if(this.state.carModel === this.state.textInput && this.state.textInput !== undefined && this.state.textInput !== ""){

    //     this.setState({ carIsShowing: true })
    //   } else {
    //       this.setState({ carIsShowing: false })

    //     }
    // // },200);


    this.setState(() => ({ carIsShowing: false }), () => {
      if(this.state.carModel === this.state.textInput && this.state.textInput !== undefined && this.state.textInput !== ""){
        this.setState({ carIsShowing: true })
      } else {
          this.setState({ carIsShowing: false })
        }
    });
  };

  render(){
    console.log("state",this.state)
    return(
      <div className="search">
        <input className="search-input" type="text" onChange={this.filterList} placeholder="Search for your Toyota vehicle..."/>
        <div className={this.state.carIsShowing ? "show" : "hide"}>
          <div className="search-spacing">
      
              <div className="search-container" onClick={()=> this.props.buildCar(this.state.carInfo)}>
                <div className="search-title-flex">
                  <div className="search-title--year">2019 &nbsp; </div>
                  <div className="search-title">{this.state.carModel}</div>
                </div>
    
                  <Link to={`build/${this.state.carModel}`}>
                    <img src={this.state.carImage} alt={this.state.carModel} className="search-img"/>
                  </Link>
         
                <div className="search-price">
                  {this.state.carPrice}
                </div>  
              </div>
       
          </div>
        </div>
        <Footer />
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
})(Search);
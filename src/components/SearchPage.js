import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { buildCar } from "../redux/actions";
import Footer from "./Footer";

class Search extends React.Component{

  state = {
    cars: this.props.cars,
    textInput: "",
    carIsShowing: false,
    carTitles: [],
    carImage: "",
    carTitle: "",
    carPrice: "",
    carIndex: undefined,
    carInfo: []
  };

  componentWillMount(){
    const titles = [];
    this.props.cars.forEach(car => titles.push(car.title));
    this.setState({ carTitles: titles });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  filterList = (e) => {
    this.setState({ textInput: e.target.value.toLowerCase() })
    let searchCar = (/camry|86|corolla|avalon|yaris/i, e.target.value.toLowerCase());
    let carIndex = this.state.carTitles.indexOf(searchCar);

    if(searchCar !== this.state.textInput){
      this.setState({
        carImage: "",
        carTitle: "",
        carPrice: "",
        carIndex: undefined,
        carInfo: []
      })
    }
    if(carIndex !== -1){
      let getCar = this.state.cars[carIndex]

      this.setState({
        carImage: getCar.img,
        carTitle: getCar.title,
        carPrice: getCar.price,
        carIndex,
        carInfo: this.state.cars[carIndex]
      })
    } 
    this.showCar();
  };

  showCar = () => {
    this.setState({ carIsShowing: false });
    setTimeout(() => {
      if(this.state.carTitle === this.state.textInput && this.state.textInput !== undefined && this.state.textInput !== ""){
        // console.log("yes")
        this.setState({ carIsShowing: true })
      } else {
          this.setState({ carIsShowing: false })
          // console.log("no");
        }
    },200);
  }

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
                  <div className="search-title">{this.state.carTitle}</div>
                </div>
    
                  <Link to={`build/${this.state.carTitle}`}>
                    <img src={this.state.carImage} alt={this.state.carTitle} className="search-img"/>
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
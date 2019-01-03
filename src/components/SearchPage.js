import React from "react";
import { connect } from "react-redux";

class Search extends React.Component{

  state = {
    cars: this.props.cars,
    carList: [],
    carDisplay:[]
  }

  componentWillMount(){
    let carImg = this.state.cars.map(car => {
      return car.img
    });
    this.setState({ carList: carImg, carDisplay:carImg })
  }

filterList = (e) => {
  let searchCar = (/corolla|t86/i, e.target.value);

  let updatedList = this.state.carList.filter(car => {
    return car.toLowerCase().search(searchCar.toLowerCase()) !== -1;
  });
  this.setState({ carDisplay: updatedList })
};

  render(){
    // console.log("cars", this.state.cars);
    // console.log("carList",this.state.carList)
    // console.log("carDisplay",this.state.carDisplay);
    return(
      <div>
        <input type="text" onChange={this.filterList}/>
        <div>
          {
            this.state.carDisplay.map((car) => {
              let carAlt = car;
                carAlt = carAlt.split("/").splice(2,1);
              return (
                <img src={car} key={car} alt={carAlt}/>
              )
            })
          }
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

export default connect(mapStateToProps)(Search);
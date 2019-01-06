import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { buildCar } from "../redux/actions";

class Search extends React.Component{

  state = {
    cars: this.props.cars,
    // carList: [],
    // carDisplay:[],
    textInput: "",
    carIsShowing: false,


    carTitles: [],

    carImage: "",
    carTitle: "",
    carPrice: "",
    carIndex: undefined,


    carInfo: []
    
  }

  componentWillMount(){
    // let carImg = this.state.cars.map(car => {
    //   return car.img
    // });
    // this.setState({ carList: carImg, carDisplay:carImg })

    // const images = [];
    const titles = [];
    // const prices = [];
    // const displayedImage = [];
    // const displayedTitle = [];
    // const displayedPrice = [];



     this.props.cars.forEach(car => {
      // images.push(car.img);
      titles.push(car.title);
      // prices.push(car.price);
      // displayedImage.push(car.img);
      // displayedTitle.push(car.title);
      // displayedPrice.push(car.price);
    });
    
    this.setState({ 
      // carImages: images, 
      carTitles: titles,
      // carPrices: prices,
      // carDisplayedImage: displayedImage,
      // carDisplayedTitle: displayedTitle,
      // carDisplayedPrice: displayedPrice,
    })

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




////////////////////////////


// filterList = (e) => {
//   this.setState({ textInput: e.target.value })
//   let searchCar = (/corolla|86|camry|avalon|yaris/i, e.target.value);

//   let updatedList = this.state.carList.filter(car => {
//     return car.toLowerCase().search(searchCar.toLowerCase()) !== -1;
//   });

//   this.setState({ carDisplay: updatedList })


//   this.showCar();
// };


// showCar = () => {

//   this.setState({ carIsShowing: false });

//   setTimeout(() => {

//     if(this.state.carDisplay.length === 1){
//       var carName = this.state.carDisplay.join();
//       carName = carName.split("/").splice(2,1);
//       carName = carName.toString();
      
//       if(carName === this.state.textInput){
//         this.setState({ carIsShowing: true })
//       } else if(carName !== this.state.textInput || carName === undefined  || this.state.textInput === ""){
//         this.setState({ carIsShowing: false })
//       }
//     }
//     console.log("carname", carName);
//     console.log("textinput",this.state.textInput);

//   },500);
// }






// getCarInfo = () => {




//   // this.props.buildCar(carInfo);
// };


  render(){
    console.log("state",this.state)

    // return(
    //   <div>

     
    //       <input className="search-input" type="text" onChange={this.filterList} placeholder="Search for your Toyota vehicle..."/>
    //        <div className={this.state.carIsShowing ? "show" : "hide"}>
    //         <div>
    //           {
    //             this.state.carDisplay.map((car) => {
    //               console.log('car', car);
    //               let carAlt = car;
    //                 carAlt = carAlt.split("/").splice(2,1);

                

    //               return (
    //                 <div key={car} className="search-container">
    //                   <div className="search-info">
    //                     <div>title</div>
    //                     <div>price</div>
    //                   </div>
    //                   <div>
    //                     <img className="search-img" src={car} key={car} alt={carAlt}/>
    //                   </div>
                      
    //                 </div>
    //               )
    //             })
    //           }
    //         </div>
    //       </div>

    //   </div>
    // )


  


    return(
      <div>
        <input className="search-input" type="text" onChange={this.filterList} placeholder="Search for your Toyota vehicle..."/>
        <div className={this.state.carIsShowing ? "show" : "hide"}>
          <div className="search-spacing">
            <Link to="/build">
              <div className="search-container" onClick={()=> this.props.buildCar(this.state.carInfo)}>
                <div className="search-title-flex">
                  <div className="search-title--year">2019 &nbsp; </div>
                  <div className="search-title">{this.state.carTitle}</div>
                </div>
                <div>
                  <img src={this.state.carImage} alt={this.state.carTitle} className="search-img"/>
                </div>
                <div className="search-price">
                  {this.state.carPrice}
                </div>  
              </div>
            </Link>
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
})(Search);
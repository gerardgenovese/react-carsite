import React from "react";







class Showcase extends React.Component {

// state = {
//   trim: this.props.trim
// }


  showcaseCars(){
    let carArray;

    this.props.filteredCars.length > 0 ? carArray = this.props.filteredCars : carArray = this.props.allCars;
    console.log("carArray", this.props.filteredCars);
    console.log("carArray allcars", this.props.allCars);

    return carArray.map((car, i) => { 
      let color = { background: car.color };
      return(
        <div key={i} className="showcase">
          <div className="showcase-flexOne">
            <p>{car.model}</p>
            <p>{car.trim}</p>
            <div>
              <img src={car.image} alt="toy" className="showcase-img"/>
            </div>
          </div>
          <div className="showcase-flexTwo">
            <div className="showcase-desc">
              <span className="showcase-price">{car.price}</span> Total MSRP (As Built) 29
              3.5L V6 DOHC 24-Valve With Dual VVT-i 8-speed Electronically Controlled automatic Transmission with Intelligence (ECT-i) with Front-Wheel Drive
            </div>
            <div className="showcase-flexThree">
              <div className="showcase-flexColor">
                <div className="showcase-color" style={color}></div>
              </div>
              <div className="showcase-acc">
                <div className="showcase-acc--header">PACKAGES & ACCESSORIES</div>
                <div className="showcase-acc--items showcase-cargoTote">{car.cargoTote}</div>
                <div className="showcase-acc--items showcase-leatherMats">{car.leatherMats}</div>
                <div className="showcase-acc--items showcase-wheelLocks">{car.wheelLocks}</div>
              </div>
            </div>
          </div>
        </div>
      )
    })
    // console.log(this.props.allCars);
  };


  render(){
  
    return(
      <div>
        {/* { this.props.filteredCars > 0 ? this.showFilteredCars() : this.showAllCars() } */}
        {this.showcaseCars()}
      </div>




          // this.props.allCars.map((car, i) => { 
          //   let color = { background: car.color };
          //   return(
          //     <div key={i} className="showcase">
          //       <div className="showcase-flexOne">
          //         <p>{car.model.toUpperCase()}</p>
          //         <p>{car.trim}</p>
          //         <div>
          //           <img src={car.image} alt="toy" className="showcase-img"/>
          //         </div>
          //       </div>
          //       <div className="showcase-flexTwo">
          //         <div className="showcase-desc">
          //           <span className="showcase-price"></span> Total MSRP (As Built) 29
          //           3.5L V6 DOHC 24-Valve With Dual VVT-i 8-speed Electronically Controlled automatic Transmission with Intelligence (ECT-i) with Front-Wheel Drive
          //         </div>
          //         <div className="showcase-flexThree">
          //           <div className="showcase-flexColor">
          //             <div>{car.color}</div>
          //             <div className="showcase-color" style={color}></div>
          //           </div>
          //           <div className="showcase-acc">
          //             <div className="showcase-acc--header">PACKAGES & ACCESSORIES</div>
          //             <div className="showcase-acc--items showcase-cargoTote">{car.cargoTote}</div>
          //             <div className="showcase-acc--items showcase-leatherMats">{car.leatherMats}</div>
          //             <div className="showcase-acc--items showcase-wheelLocks">{car.wheelLocks}</div>
          //           </div>
          //         </div>
          //       </div>
          //     </div>
          //   )
          // })
        // }
      // </div>
    )
  }
}

export default Showcase;



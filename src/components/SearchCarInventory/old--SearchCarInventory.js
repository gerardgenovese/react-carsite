import React from "react";
import TrimCheckbox from "./TrimCheckbox";
import EngineCheckbox from "./EngineCheckbox";
import RangeSlider from "./RangeSlider";
import ColorsCheckbox from "./ColorsCheckbox";
import AccessoryCheckbox from "./AccessoryCheckbox";
import Showcase from "./Showcase";

import dbJSON from "../../db/db.json";


// import test from "../relativeImages/exploreall/86/front.PNG"


class SearchCarInventory extends React.Component {

  state = {
    // inventoryOptions: [],
    
    // sliderPrice: this.props.location.state.price



    title: "",

    trim: [],
    engine: [],


    optionsCount: 0,


    
    allCars: [],
    filteredCars: [],
    filteredEngines: [],



 


    color:[],
    cargoTote: false,
    leatherMats: false,
    wheelLocks: false,
    priceLow: "",
    priceHigh: "",






    sliderOneDefaultValue: "",
    sliderTwoDefaultValue: "",

    sliderRangeOne: "",
    sliderRangeTwo: ""
  };




  componentWillMount(){
    //gets the price of car as a number and saves the two default value for the range slider and sets the range slider values
    let defaultValueOne = this.props.location.state.price;
    defaultValueOne = defaultValueOne.toString();
    let defaultValueTwo = this.props.location.state.price + 5000;
    defaultValueTwo = defaultValueTwo.toString();

    this.setState({ 
      title: this.props.location.state.title,
      priceLow: defaultValueOne,
      priceHigh: defaultValueTwo,
      sliderOneDefaultValue: defaultValueOne, 
      sliderTwoDefaultValue: defaultValueTwo,
      sliderRangeOne: defaultValueOne,
      sliderRangeTwo: defaultValueTwo
    });
  };

  //scroll to top of page when page loads
  componentDidMount() {
    window.scrollTo(0, 0); 
    this.loadCars();
  };

   //Propogate carInventory page with every car in database(db.json)
  loadCars = () => {
    //get json data
    let jsData = JSON.parse(JSON.stringify(dbJSON));

    //get car model
    let carModel = this.state.title;

    if(carModel === "camry"){
      let jsImage = jsData.camry.map(car => {
        return car;
      });
      this.setState({ allCars: jsImage });
    } else if(carModel === "corolla"){
      let jsImage = jsData.corolla.map(car => {
        return car;
      });
      this.setState({ allCars: jsImage });
    }
  };


  getFilteredCars = (newFilteredCars, count) => {
    console.log("getfilteredCars", newFilteredCars);
   this.setState((prevState) => ({ filteredCars: newFilteredCars, optionsCount: prevState + count }));
  };
  
  // getFilteredEngine = (engineType) => {
  //   console.log("enginetype", engineType)
  //   this.setState({ engine: engineType });
  // };



  //onChange methods which will change the state of the two sliders so we can grab a price value to search for
  rangeOne = (e) => {
    this.setState({ sliderRangeOne: e.target.value })
  };

  rangeTwo = (e) => {
    this.setState({ sliderRangeTwo: e.target.value })
  };

  //this displays the slider range numbers on screen so the user can see the price point they are looking for. If a range number passes another via sliding, the price points flip on screen only. The state remains attached to the slider. 
  showCorrectSliderRange = () => {
   let range1 = parseInt(this.state.sliderRangeOne);
   let range2 = parseInt(this.state.sliderRangeTwo);

   if(range1 < range2){ return( <div>{range1} - {range2}</div> )};
   if(range1 > range2){ return( <div>{range2} - {range1}</div> )};
   if(range1 === range2){ return( <div>{range1} - {range2}</div> )}
  };



  render(){
    // console.log("ci", this.props)
    console.log("cistate",this.state);
    // console.log("here", this.props.location.state.title);

    //Slice first letter of car name and Capitalize then add the rest of string to create a Capitalized car name
    const title = this.props.location.state.title.slice(0,1).toUpperCase() + this.props.location.state.title.slice(1);



    return(
      <div className="carInv">
        <div className="build_price-header">2019 {title} Inventory</div>
          <div className="carInv-mainFlex">
            <div className="carInv-leftContainer">
              <div className="carInv-filter-groupHeader">
                <div>Filters</div>
                <div>Clear All</div>
              </div>
              <div>
                <div className="carInv-checkbox">
                <TrimCheckbox allCars={this.state.allCars} filteredCars={this.state.filteredCars} filteredCount={this.state.filteredCount} getFilteredCars={this.getFilteredCars}/>
                <EngineCheckbox allCars={this.state.allCars} filteredCars={this.state.filteredCars} getFilteredCars={this.getFilteredCars}/>
                <RangeSlider sliderOneDefaultValue={this.state.sliderOneDefaultValue} sliderTwoDefaultValue={this.state.sliderTwoDefaultValue} rangeOne={this.rangeOne} rangeTwo={this.rangeTwo} sliderRange={this.showCorrectSliderRange}/>
                <ColorsCheckbox />
                <AccessoryCheckbox />            
              </div>
            </div>
          </div>
          <div className="carInv-rightContainer">
            <div className="carInv-pricepoint--header">
              <div>{this.state.filteredCars.length > 0 ? this.state.filteredCars.length : this.state.allCars.length} Matches</div>
                <form>
                  <select name="pricepoint">
                    <option value="">Price: Low To High</option>
                    <option value="">Price: High To Low</option>
                  </select>
                </form>
            </div>
            <div>
              {/* {this.state.inventoryOptions.length === 0 ? <div></div> : <div>{addRemoveOptions}</div>} */}
            </div>
            <div>
              <Showcase allCars={this.state.allCars} filteredCars={this.state.filteredCars} trim={this.state.trim} engine/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchCarInventory;






   /* <img style={{width: "10rem"}} src={window.location.origin + car.image} alt={this.state.title}/> */


  // getInventoryOption = (e) => {
  //   //get data-type for switch statement & e.target value for the options the user is checking
  //   let targetType = e.target.getAttribute("data-type");
  //   let targetValue = e.target.value;

  //   //create new arrays for our state
  //   let newInventory = this.state.inventoryOptions.slice();
  //   let newTrim = this.state.trim.slice();
  //   let newEngine = this.state.engine.slice();
    
  //   //if the target is checked, find the data type to match the switch case. If target is not checked, filter through the array and remove the item that's no longer found.
  //   if(e.target.checked){
  //     switch(targetType){
  //       case "trim":
  //         newInventory.push(targetValue);
  //         newTrim.push(targetValue)
  //         break;
  //       case "engine":
  //         newInventory.push(targetValue);
  //         newEngine.push(targetValue);
  //         break;
  //       default:
  //       console.log("no");
  //     } 
  //   } else{
  //     newInventory = newInventory.filter(item => item !== targetValue);
  //     newTrim = newTrim.filter(item => item !== targetValue);
  //   }

  //   //set state and call inventory function
  //   this.setState(() => {
  //     return{
  //       inventoryOptions: newInventory,
  //       trim: newTrim,
  //       engine: newEngine
  //     }
  //   }, () => {
  //     this.inventory();
  //   });
 

  //   console.log(targetType);
  // };

   

   
  // inventory = () => {
  //   console.log("inventory called")

  //   let allOptions = this.state.inventoryOptions;
    
  // };





 //inventory is called in the function getInventoryOption. Everytime inventory is called it checks to see if state.options has a length > 0. If so, it will loop through the state.options array 1 time for each index in the array and filter any json objects that don't match the option/checkbox that was clicked. We return a clean filtered array of each index that returns true and the car image for that index and set a new setState for state.images to showcase the filtered state.
    // inventory = () => {
    //   //get json data
    //   let jsData = JSON.parse(JSON.stringify(dbJSON));
  
    //   let options = this.state.inventoryOptions;



    //   let allCars = this.state.images.slice();

    //   if(options.length > 0){


   
        

    //     for(let i = 0; i < options.length; i++){
    //       let option = options[i];



    //       var filterList = jsData.cars.filter(car => {
    //         return option === car.trim
    //       });

    //       var carImages = filterList.map(car => {
    //         return car.image;
    //       });

    //       allCars.push(carImages);


       
         
    
        
    //     }
    //   } else{
    //     this.loadImages();
    //   }

    //   if(allCars.length === 0){
    //     this.loadImages();
    //   } else{
    //     this.setState(() => {
    //       return{
    //         images: [...allCars]
    //       }
    //     });
   
    //   }














                  /* {
                this.state.images.map((image, i) => {
                  return(
                      
                      <img style={{width: "10rem"}} key={i} src={window.location.origin + image} alt={this.state.car}/>
                 
                  )
                })
              } */


              /* { 
                this.state.allCars.map((car, i) => { 

                  let color = {
                    background: car.color
                  }
                  return(
              
                        <div key={i} className="showcase">
                          <div className="showcase-flexOne">
                            <p>{car.model.toUpperCase()}</p>
                            <p>{car.trim}</p>
                            <div>
                              <img src={car.image} alt="toy" className="showcase-img"/>
                            </div>
                          </div>
                          <div className="showcase-flexTwo">
                            <div className="showcase-desc">
                              <span className="showcase-price"></span> Total MSRP (As Built) 29
                              3.5L V6 DOHC 24-Valve With Dual VVT-i 8-speed Electronically Controlled automatic Transmission with Intelligence (ECT-i) with Front-Wheel Drive
                            </div>
                            <div className="showcase-flexThree">
                              <div className="showcase-flexColor">
                                <div>{car.color}</div>
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
              } */
















              
    // const carPrice = this.props.location.state.price;
  
    //this will map through state.inventoryOptions which is created when the user adds or removes car options. This is how we will showcase on the UI what checkboxes are clicked and what options/parameters the user has checked off to look for in their car search. If the user clicks a new checkbox a new state is created and a text node is added to the dom. If the user removes the checkbox, the text node is removed.
    // let addRemoveOptions = this.state.inventoryOptions.map((e, i ) => {
    //   return (
    //     <div key={i}className="carInv-selected--flex">
    //       <div className="carInv-selected--options">{e}</div>
    //       <div className="carInv-selected--options-close">X</div>
    //     </div>
    //   )
    // });
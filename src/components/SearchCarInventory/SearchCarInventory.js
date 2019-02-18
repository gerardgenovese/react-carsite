import React from "react";
import dbJSON from "../../db/db.json";

// import test from "../relativeImages/exploreall/86/front.PNG"

class SearchCarInventory extends React.Component {

  state = {
    model: "",

    cars: [],
    filteredCars: [],
    count: 0,

    // sliderPrice: this.props.location.state.price
    inventoryOptions: [],
    trim: [],
    color:[],
    engine: [],
    cargoTote: false,
    leatherMats: false,
    wheelLocks: false,
    lowPricePoint: "",
    highPricePoint: "",

  


    sliderOneDefaultValue: "",
    sliderTwoDefaultValue: "",

    sliderRangeOne: "",
    sliderRangeTwo: ""
  };

  componentWillMount(){
    //gets the price of car as a number and saves the two default value for the range slider and sets the range slider values
    let defaultValueOne = this.props.location.state.price;
    defaultValueOne = defaultValueOne.toString();
    let defaultValueTwo = this.props.location.state.price + 1000;
    defaultValueTwo = defaultValueTwo.toString();

    this.setState({ model: this.props.location.state.title, lowPricePoint: defaultValueOne, highPricePoint: defaultValueTwo,
      sliderOneDefaultValue: defaultValueOne, sliderTwoDefaultValue: defaultValueTwo, sliderRangeOne: defaultValueOne,
      sliderRangeTwo: defaultValueTwo
    });
  };

  //scroll to top of page when page loads
  componentDidMount() {
    window.scrollTo(0, 0); 
    this.loadImages();
  };

   //Load images from db.json to state 
  loadImages = () => {
    let jsData = JSON.parse(JSON.stringify(dbJSON));
    console.log(jsData);

    let carModel = this.state.model;
    console.log(carModel);
   
    if(carModel === "camry"){ 
      let car = jsData.camry.map(car => car);
      this.setState({ cars: car })
    }
   
  };

  //when checkboxes are clicked we begin our filter
  onUserClick = (e) => {
    let combinedTrim = this.state.trim.slice();
    let combinedEngine = this.state.engine.slice();
    let combinedColor = this.state.color.slice();

    let cargoTote = this.state.cargoTote;
    let leatherMats = this.state.leatherMats;
    let wheelLocks = this.state.wheelLocks;

    // let lowPricePoint = this.state.lowPricePoint;
    // let highPricePoint = this.state.highPricePoint;

    let type = e.target.getAttribute("data-type");
    // console.log(type);

    if(e.target.checked){
      switch(type){
        case "trim":
          combinedTrim.push(e.target.value);
          break;
        case "engine":
          combinedEngine.push(e.target.value);
          break;
        case "color":
          combinedColor.push(e.target.value);
          break;
        case "cargoTote":
          cargoTote = !cargoTote;
          break;
        case "leatherMats":
          leatherMats = !leatherMats;
          break;
        case "wheelLocks":
          wheelLocks = !wheelLocks;
          break;
        default:
          break;
      };
    } else {
      switch(type){
        case "trim":
          combinedTrim = combinedTrim.filter(item => item !== e.target.value);
          break;
        case "engine":
          combinedEngine = combinedEngine.filter(item => item !== e.target.value);
          break;
        case "color":
          combinedColor = combinedColor.filter(item => item !== e.target.value);
          break;
        case "cargoTote":
          cargoTote = !cargoTote;
          break;
        case "leatherMats":
          leatherMats = !leatherMats;
          break;
        case "wheelLocks":
          wheelLocks = !wheelLocks;
          break;
        default:
          break;
      }
    }

    this.setState(() => ({ filteredCars: [], trim: combinedTrim, engine: combinedEngine, color: combinedColor, cargoTote, leatherMats, wheelLocks }), () => {
      // console.log("clicked", this.state.leatherMats);
      this.getCorrectArrayToDisplay();
    });
  };

  //we feed the beginning of our filter process with the value here
  getCorrectArrayToDisplay(){
    let arr;
    if(this.state.filteredCars.length > 0){
      arr = this.state.filteredCars
    } else{
      arr = this.state.cars;
    }
    this.getTrim(arr);
  };
  
  getTrim(arr){
    let newArr = arr.slice();
    newArr = [].concat.apply([], newArr);

    console.log("newArr", newArr);

    let selectedTrim = this.state.trim.slice();
    let filteredArray = this.state.filteredCars.slice();
    // let count = this.state.count.slice();
    let carsArray = this.state.cars.slice();
    
    if(selectedTrim.length > 0){
      console.log("selectedTrim > 0");
      if(newArr.length > 0){
        console.log("newArr > 0");

        let trimMatches = newArr.filter(car => {
          return selectedTrim.indexOf(car.trim) !== -1;
        });

        if(trimMatches.length === 0 && selectedTrim.length > 0){
          console.log("trimMatches === 0");
          newArr = [];
          filteredArray = newArr;
          this.setState({ filteredCars: filteredArray });
          return;
        } else {
          console.log("trim matches", trimMatches);
          newArr = [];
          // count++;
          newArr.push(trimMatches);
          filteredArray = newArr;
          this.setState((prevState) => ({ filteredCars: filteredArray, count: prevState.count + 1 }));
        }
      } else {
        console.log("newArr === 0");
        let trimMatches = carsArray.filter(car => {
          return selectedTrim.indexOf(car.trim) !== -1;
        });
        newArr.push(trimMatches);
        this.setState(() => ({ filteredCars: newArr }), () => { this.getEngine(newArr) });
      }
    } else {
        // count = 0;
        // return carsArray;
        this.setState(() => ({ count: 0 }), () => { this.getEngine(newArr) });
      }
    filteredArray = newArr;
    filteredArray = [].concat.apply([], filteredArray);
    this.setState(() => ({ filteredCars: filteredArray }), () => { this.getEngine(newArr) });
  };








  getEngine(arr){
    let newArr = arr.slice();
    newArr = [].concat.apply([], newArr);

    console.log("newArr", newArr);

    let selectedEngine = this.state.engine.slice();
    let filteredArray = this.state.filteredCars.slice();
    // let count = this.state.count.slice();
    let carsArray = this.state.cars.slice();
    
    if(selectedEngine.length > 0){
      console.log("selectedEngine > 0");
      if(newArr.length > 0){
        console.log("newArr > 0");

        let engineMatches = newArr.filter(car => {
          return selectedEngine.indexOf(car.engine) !== -1;
        });

        if(engineMatches.length === 0 && selectedEngine.length > 0){
          console.log("engineMatches === 0");
          newArr = [];
          filteredArray = newArr;
          this.setState({ filteredCars: filteredArray });
          return;
        } else {
          console.log("engine matches", engineMatches);
          newArr = [];
          // count++;
          newArr.push(engineMatches);
          filteredArray = newArr;
          this.setState((prevState) => ({ filteredCars: filteredArray, count: prevState.count + 1 }));
        }
      } else {
        console.log("newArr === 0");
        let engineMatches = carsArray.filter(car => {
          return selectedEngine.indexOf(car.engine) !== -1;
        });
        newArr.push(engineMatches);
        this.setState(() => ({ filteredCars: newArr }), () => { this.getColors(newArr) });
      }
    } else {
        // count = 0;
        // return carsArray;
        this.setState(() => ({ count: 0 }), () => { this.getColors(newArr) });
      }
    filteredArray = newArr;
    filteredArray = [].concat.apply([], filteredArray);
    this.setState(() => ({ filteredCars: filteredArray }), () => { this.getColors(newArr) });
  };


  getColors(arr){
    let newArr = arr.slice();
    newArr = [].concat.apply([], newArr);

    console.log("newArr", newArr);

    let selectedColor = this.state.color.slice();
    let filteredArray = this.state.filteredCars.slice();
    // let count = this.state.count.slice();
    let carsArray = this.state.cars.slice();
    
    if(selectedColor.length > 0){
      console.log("selectedColor > 0");
      if(newArr.length > 0){
        console.log("newArr > 0");

        let colorMatches = newArr.filter(car => {
          return selectedColor.indexOf(car.color) !== -1;
        });

        if(colorMatches.length === 0 && selectedColor.length > 0){
          console.log("colorMatches === 0");
          newArr = [];
          filteredArray = newArr;
          this.setState({ filteredCars: filteredArray });
          return;
        } else {
          console.log("color matches", colorMatches);
          newArr = [];
          // count++;
          newArr.push(colorMatches);
          filteredArray = newArr;
          this.setState((prevState) => ({ filteredCars: filteredArray, count: prevState.count + 1 }));
        } 
      } else {
        console.log("newArr === 0");
        let colorMatches = carsArray.filter(car => {
          return selectedColor.indexOf(car.color) !== -1;
        });
        newArr.push(colorMatches);
        this.setState(() => ({ filteredCars: newArr }), () => { this.getCargoTote(newArr) });
      }
    } else {
        // count = 0;
        // return carsArray;
        this.setState(() => ({ count: 0 }), () => { this.getCargoTote(newArr) });
      }
    filteredArray = newArr;
    filteredArray = [].concat.apply([], filteredArray);
    this.setState(() => ({ filteredCars: filteredArray }), () => { this.getCargoTote(newArr) });
  };







  getCargoTote(arr){

    let newArr = arr.slice();

    newArr = [].concat.apply([], newArr);
    console.log("CargoTote newArr", newArr);

    let filteredArray = this.state.filteredCars.slice();
    // let carsArray = this.state.cars.slice();
    let selectedCargoTote = this.state.cargoTote;

  
    if(newArr.length > 0){
      console.log("cargotote newArr.length > 0", newArr.length);
      if(selectedCargoTote === true){
  
        let cargoToteMatches = newArr.filter(car => car.cargoTote === true);
        console.log("cargotote matches == true", cargoToteMatches);
        newArr = [cargoToteMatches];
        filteredArray = newArr;
        filteredArray = [].concat.apply([], filteredArray);
        this.setState(() => ({filteredCars: filteredArray}), () => { this.getLeatherMats(newArr) });

      } else {
          let cargoToteMatches = newArr.filter(car => car.cargoTote === false);
          console.log("cargotote matches == false", cargoToteMatches);
          filteredArray = newArr;
          filteredArray = [].concat.apply([], filteredArray);
          this.setState(() => ({filteredCars: filteredArray}), () => { this.getLeatherMats(newArr) });
        }
    }
    filteredArray = newArr;
    filteredArray = [].concat.apply([], filteredArray);
    this.setState(() => ({filteredCars: filteredArray}), () => { this.getLeatherMats(newArr) });
  };

  getLeatherMats(arr){

    let newArr = arr.slice();

    newArr = [].concat.apply([], newArr);
    console.log("leatherMats newArr", newArr);

    let filteredArray = this.state.filteredCars.slice();
    // let carsArray = this.state.cars.slice();
    let selectedLeatherMats = this.state.leatherMats;
  
    if(newArr.length > 0){
      console.log("leatherMats newArr.length > 0", newArr.length);
      if(selectedLeatherMats === true){
        let leatherMatsMatches = newArr.filter(car => car.leatherMats === true);
        console.log("leatherMats matches == true", leatherMatsMatches);
        newArr = [leatherMatsMatches];
        filteredArray = newArr;
        filteredArray = [].concat.apply([], filteredArray);
        this.setState(() => ({filteredCars: filteredArray}), () => { this.getWheelLocks(newArr) });
      } else {
          let leatherMatsMatches = newArr.filter(car => car.leatherMats === false);
          console.log("leatherMats matches == false", leatherMatsMatches);
          filteredArray = newArr;
          filteredArray = [].concat.apply([], filteredArray);
          this.setState(() => ({filteredCars: filteredArray}), () => { this.getWheelLocks(newArr) });
        }
    }
    filteredArray = newArr;
    filteredArray = [].concat.apply([], filteredArray);
    this.setState(() => ({filteredCars: filteredArray}), () => { this.getWheelLocks(newArr) });
  };




  getWheelLocks(arr){
    let newArr = arr.slice();

    newArr = [].concat.apply([], newArr);
    console.log("wheelLocks newArr", newArr);

    let filteredArray = this.state.filteredCars.slice();
    let selectedWheelLocks = this.state.wheelLocks;
  
    if(newArr.length > 0){
      console.log("wheelLocks newArr.length > 0", newArr.length);
      if(selectedWheelLocks === true){
        let wheelLocksMatches = newArr.filter(car => car.wheelLocks === true);
        console.log("wheelLocks matches == true", wheelLocksMatches);
        newArr = [wheelLocksMatches];
        filteredArray = newArr;
        filteredArray = [].concat.apply([], filteredArray);
        this.setState(() => ({filteredCars: filteredArray}), () => { this.getCarPrice(newArr) });
      } else {
          let wheelLocksMatches = newArr.filter(car => car.wheelLocks === false);
          console.log("wheelLocks matches == false", wheelLocksMatches);
          filteredArray = newArr;
          filteredArray = [].concat.apply([], filteredArray);
          this.setState(() => ({filteredCars: filteredArray}), () => { this.getCarPrice(newArr) });
      }
    }
    filteredArray = newArr;
    filteredArray = [].concat.apply([], filteredArray);
    this.setState(() => ({filteredCars: filteredArray}), () => { this.getCarPrice(newArr) });
  };



  getCarPrice(arr){

    let newArr = arr.slice();
    newArr = [].concat.apply([], newArr);
    console.log("carPrice newArr", newArr);

    let filteredArray = this.state.filteredCars.slice();

    if(newArr.length > 0 || this.state.filteredArray > 0){
      console.log("car Price newArr.length > 0", newArr.length);

      let carPriceMatches = newArr.filter(car => {
        return (car.price > this.state.lowPricePoint) && (car.price < this.state.highPricePoint);
      });
      console.log("carPriceMatches", carPriceMatches);
      newArr = [carPriceMatches];
      filteredArray = newArr;
      filteredArray = [].concat.apply([], filteredArray);
      this.setState(() => ({ filteredCars: filteredArray }), () => { this.showcaseCars() });
    } else {
      filteredArray = newArr;
      filteredArray = [].concat.apply([], filteredArray);
      this.setState(() => ({ filteredCars: filteredArray }), () => { this.showcaseCars() });
    }

  };




  //this will showcase the end result from all the filters onto the screen
  showcaseCars(){

    //set a variable to hold the correct array that we will map through and showcase
    let carArray;

    if(this.state.filteredCars.length > 0){
      carArray = this.state.filteredCars;
    } else if(this.state.filteredCars.length === 0){
        if((this.state.trim.length > 0) || (this.state.engine.length > 0) || (this.state.color.length > 0)){
          return(
            <div>
              No Matches Found
            </div>
          )
        } else if((this.state.cargoTote === true) || (this.state.leatherMats === true) || (this.state.wheelLocks === true)){
            return (
              <div>
                No Matches Found
              </div>
            )
        } else if((this.state.lowPricePoint !== this.state.sliderOneDefaultValue) || (this.state.highPricePoint !== this.state.sliderTwoDefaultValue)){
          return(
            <div>
              No Matches Found
            </div>
          )
        } else {
          carArray = this.state.cars;
        }
      }

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
              {car.engine === "8 Speed Automatic" ? <div><span className="showcase-price">{car.price}</span> Total MSRP (As Built) 29
              3.5L V6 DOHC 24-Valve With Dual VVT-i 8-speed Electronically Controlled <strong>Automatic Transmission</strong> with Intelligence (ECT-i) with Front-Wheel Drive</div> : <div><span className="showcase-price">{car.price}</span> Total MSRP (As Built) 29
              3.5L V6 DOHC 24-Valve With Dual VVT-i 8-speed <strong>Manual Transmission</strong> with Intelligence (ECT-i) with Front-Wheel Drive</div>}
            </div>
            <div className="showcase-flexThree">
              <div className="showcase-flexColor">
                <div className="showcase-color" style={color}></div>
              </div>
              <div className="showcase-acc">
                <div className="showcase-acc--header">PACKAGES & ACCESSORIES</div>
                <div className="showcase-acc--items showcase-cargoTote">{car.cargoTote ? "Cargo Tote" : ""}</div>
                <div className="showcase-acc--items showcase-leatherMats">{car.leatherMats ? "Leather Mats" : ""}</div>
                <div className="showcase-acc--items showcase-wheelLocks">{car.wheelLocks ? "Wheel Locks" : ""}</div>
              </div>
            </div>
          </div>
        </div>
      )
    })
  };
















  //onChange method here. Changes the state of the two sliders so we can grab a price value later on
  rangeOne = (e) => { 
    e.persist();
    this.setState({sliderRangeOne: e.target.value}, () => { this.setCorrectPricePointForLowHigh(e)})
  };
  rangeTwo = (e) => { 
    e.persist();
    this.setState({sliderRangeTwo: e.target.value}, () => { this.setCorrectPricePointForLowHigh(e)})
  };
  //ensures the lowPricePoint & highPricePoint in state are always correct. **This is due to the sliders being able to slide past each other. We need to ensure the slider to the left is the "lowest" and to the right is the "highest". 
  setCorrectPricePointForLowHigh(e){
    e.persist();
    if(this.state.sliderRangeOne < this.state.sliderRangeTwo){
      this.setState({ lowPricePoint: this.state.sliderRangeOne, highPricePoint: this.state.sliderRangeTwo }, () => { this.onUserClick(e) });
    } else {
      this.setState({ lowPricePoint: this.state.sliderRangeTwo, highPricePoint: this.state.sliderRangeOne }, () => { this.onUserClick(e) });
    } 
  }
 
  //this displays the slider range numbers on screen so the user can see the price point. Since the sliders can move past each other we use a condition to swap the numbers position on screen so the lowest number is always to the left.
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

    //Slice first letter of car name and Capitalize then add the rest of string to create a Capitalized car name
    const car = this.props.location.state.title.slice(0,1).toUpperCase() + this.props.location.state.title.slice(1);
  
    return(
      <div className="carInv">
        <div className="build_price-header">2019 {car} Inventory</div>
        <div className="carInv-mainFlex">
          <div className="carInv-leftContainer">
            <div className="carInv-filter-groupHeader">
              <div>Filters</div>
              <div>Clear All</div>
            </div>
            <div>
              <div className="carInv-checkbox">

                <div className="carInv-tab">
                  <input type="checkbox" id="main-header1"className="carInv-tab--header" />
                  <label htmlFor="main-header1" className="carInv-tab--header-label">Model Trims</label>
                  <div className="carInv-tab--content">
                    <div className="carInv-tab--content-flex">
                      <input type="checkbox" id="car-model1" className="carInv-tab--content-input" data-type="trim" value="L" onChange={this.onUserClick}/>
                      <label htmlFor="car-model1" className="carInv-tab--content-label">L</label>
                    </div>
                    <div className="carInv-tab--content-flex">
                      <input type="checkbox" id="car-model2" className="carInv-tab--content-input" data-type="trim" value="LE" onChange={this.onUserClick}/>
                      <label htmlFor="car-model2" className="carInv-tab--content-label">LE</label>
                    </div>
                    <div className="carInv-tab--content-flex">
                      <input type="checkbox" id="car-model3" className="carInv-tab--content-input" data-type="trim" value="Hybrid LE" onChange={this.onUserClick}/>
                      <label htmlFor="car-model3" className="carInv-tab--content-label">Hybrid LE</label>
                    </div>
                  </div>
                </div>

                <div className="carInv-tab">
                  <input type="checkbox" id="main-header2"className="carInv-tab--header" />
                  <label htmlFor="main-header2" className="carInv-tab--header-label">Engine</label>
                  <div className="carInv-tab--content">
                    <div className="carInv-tab--content-flex">
                      <input type="checkbox" id="engine-acc1" className="carInv-tab--content-input" data-type="engine" value="8 Speed Automatic" onChange={this.onUserClick}/>
                      <label htmlFor="engine-acc1" className="carInv-tab--content-label">2.5 4-Cyl 8 speed Automatic</label>
                    </div>
                    <div className="carInv-tab--content-flex">
                      <input type="checkbox" id="engine-acc2" className="carInv-tab--content-input" data-type="engine" value="8 Speed Manual" onChange={this.onUserClick}/>
                      <label htmlFor="engine-acc2" className="carInv-tab--content-label">2.5 4-Cyl 8 speed Manual</label>
                    </div>
                  </div>
                </div>

                <div className="carInv-tab">
                  <input type="checkbox" id="main-header3"className="carInv-tab--header" />
                  <label htmlFor="main-header3" className="carInv-tab--header-label">Price</label>
                  <div className="carInv-tab--content range">

                    <div className="range-container">
                      <div className="range-flex">
                        {this.showCorrectSliderRange()}
                      </div>
                      <input type="range" min={this.state.sliderOneDefaultValue} max={this.state.sliderTwoDefaultValue} defaultValue={this.state.sliderOneDefaultValue} className="slider" id="lower" onChange={this.rangeOne} data-type="range"/>
                      <input type="range" min={this.state.sliderOneDefaultValue} max={this.state.sliderTwoDefaultValue} defaultValue={this.state.sliderTwoDefaultValue} className="slider" id="higher" onChange={this.rangeTwo} data-type="range"/>
                    </div>
                  </div>
                </div>

                
                <div className="carInv-tab">
                  <input type="checkbox" id="main-header4"className="carInv-tab--header" />
                  <label htmlFor="main-header4" className="carInv-tab--header-label">Exterior Color</label>
                  <div className="carInv-tab--content">
                    <div className="carInv-tab--content-flex">
                      <input type="checkbox" id="car-color1" className="carInv-tab--content-input" data-type="color" value="white" onChange={this.onUserClick}/>
                      <div className="carInv-color carInv-color--white"></div>
                      <label htmlFor="car-color1" className="carInv-tab--content-label carInv-color--text">White</label>
                    </div>
                    <div className="carInv-tab--content-flex">
                      <input type="checkbox" id="car-color2" className="carInv-tab--content-input" data-type="color" value="black" onChange={this.onUserClick}/>
                      <div className="carInv-color carInv-color--black"></div>
                      <label htmlFor="car-color2" className="carInv-tab--content-label carInv-color--text">Black</label>
                    </div>
                    <div className="carInv-tab--content-flex">
                      <input type="checkbox" id="car-color3" className="carInv-tab--content-input" data-type="color" value="gray" onChange={this.onUserClick}/>
                      <div className="carInv-color carInv-color--gray"></div>
                      <label htmlFor="car-color3" className="carInv-tab--content-label carInv-color--text">Gray</label>
                    </div>
                    <div className="carInv-tab--content-flex">
                      <input type="checkbox" id="car-color4" className="carInv-tab--content-input" data-type="color" value="smoke" onChange={this.onUserClick}/>
                      <div className="carInv-color carInv-color--smoke"></div>
                      <label htmlFor="car-color4" className="carInv-tab--content-label carInv-color--text">Smoke</label>
                    </div>
                    <div className="carInv-tab--content-flex">
                      <input type="checkbox" id="car-color5" className="carInv-tab--content-input" data-type="color" value="blue" onChange={this.onUserClick}/>
                      <div className="carInv-color carInv-color--blue"></div>
                      <label htmlFor="car-color5" className="carInv-tab--content-label carInv-color--text">Blue</label>
                    </div>
                    <div className="carInv-tab--content-flex">
                      <input type="checkbox" id="car-color6" className="carInv-tab--content-input" data-type="color" value="red" onChange={this.onUserClick}/>
                      <div className="carInv-color carInv-color--red"></div>
                      <label htmlFor="car-color6" className="carInv-tab--content-label carInv-color--text">Red</label>
                    </div>
                   
                  </div>
                </div>
                <div className="carInv-tab">
                  <input type="checkbox" id="main-header5"className="carInv-tab--header" />
                  <label htmlFor="main-header5" className="carInv-tab--header-label">Accessories</label>
                  <div className="carInv-tab--content">
                    <div className="carInv-tab--content-flex">
                      <input type="checkbox" id="car-accessory1" className="carInv-tab--content-input" data-type="cargoTote" value="Cargo Tote" onChange={this.onUserClick}/>
                      <label htmlFor="car-accessory1" className="carInv-tab--content-label">Cargo Tote</label>
                    </div>
                    <div className="carInv-tab--content-flex">
                      <input type="checkbox" id="car-accessory2" className="carInv-tab--content-input" data-type="leatherMats" value="Leather Mats" onChange={this.onUserClick}/>
                      <label htmlFor="car-accessory2" className="carInv-tab--content-label">Leather Mats</label>
                    </div>
                    <div className="carInv-tab--content-flex">
                      <input type="checkbox" id="car-accessory3" className="carInv-tab--content-input" data-type="wheelLocks" value="Wheel Locks" onChange={this.onUserClick}/>
                      <label htmlFor="car-accessory3" className="carInv-tab--content-label">Wheel Locks</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carInv-rightContainer">
            <div className="carInv-pricepoint--header">
              <div>34 Matches</div>
                <form>
                  <select name="pricepoint">
                    <option value="">Price: Low To High</option>
                    <option value="">Price: High To Low</option>
                  </select>
                </form>
            </div>
            <div>
              {this.showcaseCars()}
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default SearchCarInventory;









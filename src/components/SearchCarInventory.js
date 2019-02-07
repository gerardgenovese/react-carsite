import React from "react";

import dbJSON from "../db/db.json";


// import test from "../relativeImages/exploreall/86/front.PNG"


class SearchCarInventory extends React.Component {

  state = {
    car: "",
    inventoryOptions: [],
    // sliderPrice: this.props.location.state.price

    sliderOneDefaultValue: "",
    sliderTwoDefaultValue: "",

    sliderRangeOne: "",
    sliderRangeTwo: "",
    color:"red",


    images: []
  };

  componentWillMount(){
    //gets the price of car as a number and saves the two default value for the range slider and sets the range slider values

    let defaultValueOne = this.props.location.state.price;
    defaultValueOne = defaultValueOne.toString();
    let defaultValueTwo = this.props.location.state.price + 5000;
    defaultValueTwo = defaultValueTwo.toString();

    this.setState({ 
      car: this.props.location.state.car,
      sliderOneDefaultValue: defaultValueOne, 
      sliderTwoDefaultValue: defaultValueTwo,
      sliderRangeOne: defaultValueOne,
      sliderRangeTwo: defaultValueTwo
    });
  };

  //scroll to top of page when page loads
  componentDidMount() {
    window.scrollTo(0, 0); 




    this.loadImages();
  };

   //Propogate carInventory page with every car in database(db.json)
  loadImages = () => {
    //get json data
    let jsData = JSON.parse(JSON.stringify(dbJSON));

    let jsImage = jsData.cars.map(el => {
      return el.image;
    });
    this.setState({ images: jsImage})

  };

  //when the user clicks a car option/checkbox, this will create a new inventory state - state.inventoryOptions, and will either add or remove the option depending on the checkbox.value. We then call this.inventory.
  getInventoryOption = (e) => {
    e.persist();
    let newInventory = this.state.inventoryOptions.slice();

    if(e.target.checked === true){
      newInventory.push(e.target.value);
      this.setState(() => {
        return{
           inventoryOptions: newInventory 
        }
      }, () => {
        this.inventory();
      })
    } else {
        newInventory = newInventory.filter(item => item !== e.target.value)
        this.setState(() => {
          return{
            inventoryOptions: newInventory
          }
        }, () => {
          this.inventory();
        })
    }
  };

    //inventory is called in the function getInventoryOption. Everytime inventory is called it checks to see if state.options has a length > 0. If so, it will loop through the state.options array 1 time for each index in the array and filter out any json objects that don't match the option/checkbox that was clicked. We return a clean filtered array of each index that returns true and the car image for that index and set a new setState for state.images to showcase the filtered state.
    inventory = () => {
      //get json data
      let jsData = JSON.parse(JSON.stringify(dbJSON));
  
      let options = this.state.inventoryOptions;
      if(options.length > 0){
        for(let i = 0; i < options.length; i++){
          let option = options[i];
          let filterList = jsData.cars.filter(car => {
            return option === car.trim
          });
          let carImages = filterList.map(car => {
            return car.image;
          });
          this.setState({ images: carImages })
        }
      } else{
        this.loadImages();
      }
    };
  


  //onChange methods which will change the state of the two sliders so we can grab a price value later on
  rangeOne = (e) => {
    this.setState({ sliderRangeOne: e.target.value })
  };

  rangeTwo = (e) => {
    this.setState({ sliderRangeTwo: e.target.value })
  };

  //this displays the slider range numbers on screen so the user can see the price point they are looking for. Do to being unable to utilize my JavaScript skillset(noob level 1), to making the two range buttons not pass each other, we instead use an if else to swap the numbers position on screen so the lowest number is always to the left.
  showCorrectSliderRange = () => {
   let range1 = parseInt(this.state.sliderRangeOne);
   let range2 = parseInt(this.state.sliderRangeTwo);

   if(range1 < range2){
     return(
       <div>
         {range1} - {range2}
       </div>
     )
   }
   if(range1 > range2){
     return(
       <div>
         {range2} - {range1}
       </div>
     )
   }
   if(range1 === range2){
     return(
       <div>
         {range1} - {range2}
       </div>
     )
   }
  };

  render(){
    console.log("ci", this.props)
    console.log("cistate",this.state);

    //Slice first letter of car name and Capitalize then add the rest of string to create a Capitalized car name
    const car = this.props.location.state.car.slice(0,1).toUpperCase() + this.props.location.state.car.slice(1);


    // const carPrice = this.props.location.state.price;
  
    //this will map through state.inventoryOptions which is created when the user adds or removes car options. This is how we will showcase on the UI what checkboxes are clicked and what options/parameters the user has checked off to look for in their car search. If the user clicks a new checkbox a new state is created and a text node is added to the dom. If the user removes the checkbox, the text node is removed.
    let addRemoveOptions = this.state.inventoryOptions.map((e, i ) => {
      return (
        <div key={i}className="carInv-selected--flex">
          <div className="carInv-selected--options">{e}</div>
          <div className="carInv-selected--options-close">X</div>
        </div>
      )
    });

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
                      <input type="checkbox" id="car-model1" className="carInv-tab--content-input" value="L" onChange={this.getInventoryOption}/>
                      <label htmlFor="car-model1" className="carInv-tab--content-label">L</label>
                    </div>
                    <div className="carInv-tab--content-flex">
                      <input type="checkbox" id="car-model2" className="carInv-tab--content-input" value="LE" onChange={this.getInventoryOption}/>
                      <label htmlFor="car-model2" className="carInv-tab--content-label">LE</label>
                    </div>
                    <div className="carInv-tab--content-flex">
                      <input type="checkbox" id="car-model3" className="carInv-tab--content-input" value="Hybrid LE" onChange={this.getInventoryOption}/>
                      <label htmlFor="car-model3" className="carInv-tab--content-label">Hybrid LE</label>
                    </div>
                  </div>
                </div>

                <div className="carInv-tab">
                  <input type="checkbox" id="main-header2"className="carInv-tab--header" />
                  <label htmlFor="main-header2" className="carInv-tab--header-label">Engine</label>
                  <div className="carInv-tab--content">
                    <div className="carInv-tab--content-flex">
                      <input type="checkbox" id="engine-acc1" className="carInv-tab--content-input" value="8 Speed Automatic" onChange={this.getInventoryOption}/>
                      <label htmlFor="engine-acc1" className="carInv-tab--content-label">2.5 4-Cyl 8 speed Automatic</label>
                    </div>
                    <div className="carInv-tab--content-flex">
                      <input type="checkbox" id="engine-acc2" className="carInv-tab--content-input" value="8 Speed Manual" onChange={this.getInventoryOption}/>
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
                      <input type="range" min={this.state.sliderOneDefaultValue} max={this.state.sliderTwoDefaultValue} defaultValue={this.state.sliderOneDefaultValue} className="slider" id="lower" onChange={this.rangeOne}/>
                      <input type="range" min={this.state.sliderOneDefaultValue} max={this.state.sliderTwoDefaultValue} defaultValue={this.state.sliderTwoDefaultValue} className="slider" id="higher" onChange={this.rangeTwo}/>
                    </div>
                  </div>
                </div>

                
                <div className="carInv-tab">
                  <input type="checkbox" id="main-header4"className="carInv-tab--header" />
                  <label htmlFor="main-header4" className="carInv-tab--header-label">Exterior Color</label>
                  <div className="carInv-tab--content">
                    <div className="carInv-tab--content-flex">
                      <input type="checkbox" id="car-color1" className="carInv-tab--content-input" value="White" onChange={this.getInventoryOption}/>
                      <div className="carInv-color carInv-color--white"></div>
                      <label htmlFor="car-color1" className="carInv-tab--content-label carInv-color--text">White</label>
                    </div>
                    <div className="carInv-tab--content-flex">
                      <input type="checkbox" id="car-color2" className="carInv-tab--content-input" value="Black" onChange={this.getInventoryOption}/>
                      <div className="carInv-color carInv-color--black"></div>
                      <label htmlFor="car-color2" className="carInv-tab--content-label carInv-color--text">Black</label>
                    </div>
                    <div className="carInv-tab--content-flex">
                      <input type="checkbox" id="car-color3" className="carInv-tab--content-input" value="Gray" onChange={this.getInventoryOption}/>
                      <div className="carInv-color carInv-color--gray"></div>
                      <label htmlFor="car-color3" className="carInv-tab--content-label carInv-color--text">Gray</label>
                    </div>
                    <div className="carInv-tab--content-flex">
                      <input type="checkbox" id="car-color4" className="carInv-tab--content-input" value="Smoke" onChange={this.getInventoryOption}/>
                      <div className="carInv-color carInv-color--smoke"></div>
                      <label htmlFor="car-color4" className="carInv-tab--content-label carInv-color--text">Smoke</label>
                    </div>
                    <div className="carInv-tab--content-flex">
                      <input type="checkbox" id="car-color5" className="carInv-tab--content-input" value="Blue" onChange={this.getInventoryOption}/>
                      <div className="carInv-color carInv-color--blue"></div>
                      <label htmlFor="car-color5" className="carInv-tab--content-label carInv-color--text">Blue</label>
                    </div>
                    <div className="carInv-tab--content-flex">
                      <input type="checkbox" id="car-color6" className="carInv-tab--content-input" value="Red" onChange={this.getInventoryOption}/>
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
                      <input type="checkbox" id="car-accessory1" className="carInv-tab--content-input" value="Cargo Tote" onChange={this.getInventoryOption}/>
                      <label htmlFor="car-accessory1" className="carInv-tab--content-label">Cargo Tote</label>
                    </div>
                    <div className="carInv-tab--content-flex">
                      <input type="checkbox" id="car-accessory2" className="carInv-tab--content-input" value="Leather Mats" onChange={this.getInventoryOption}/>
                      <label htmlFor="car-accessory2" className="carInv-tab--content-label">Leather Mats</label>
                    </div>
                    <div className="carInv-tab--content-flex">
                      <input type="checkbox" id="car-accessory3" className="carInv-tab--content-input" value="Wheel Locks" onChange={this.getInventoryOption}/>
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
              {this.state.inventoryOptions.length === 0 ? <div></div> : <div>{addRemoveOptions}</div>}
            </div>
            <div>

              {
                this.state.images.map((image, i) => {
                  return(
                    
                      <img key={i} src={window.location.origin + image} alt={this.state.car}/>
                  
                  )
                })
              }
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default SearchCarInventory;
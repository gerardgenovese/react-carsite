import React from "react";
import { connect } from "react-redux";
import BuildCarColors from "../BuildCarColors";
import BuildCarEngine from "../BuildCarEngine";
import BuildCarAccessories from "../BuildCarAccessories";
import BuildCarGallery from "../BuildCarGallery";
import BuildCarFinance from "../BuildCarFinance";
import BuildCarSummary from "../BuildCarSummary";
import { purchase } from "../../redux/actions";

import { CarPriceToString } from "../Functions";

class BuildCarPage86 extends React.Component{
  state = {
    model: this.props.car.model,
    image: this.props.car.img,
    carAngle: 0,
    color: this.props.car.color,
    price: this.props.car.price,
    engine: this.props.car.engine,
    engineOneSelected: true,
    engineTwoSelected: false,
    cargoTote: {
      price: 0,
      selected:false
    },
    leatherMats:{
      price: 0,
      selected: false
    },
    wheelLocks: {
      price: 0,
      selected: false
    },
    buildNavLinks: 0,
    buildCarColors: true,
    buildCarEngine: false,
    buldCarAccessories: false,
    buldCarGallery: false,
    buildCarFinance: false,
    buildCarSummary: false,
    totalPrice: this.props.car.price,
    carTransition: false,
    panelActive: true,
  };

  //scroll to to of page. create a scroll event to capture position for animation
  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", this.buildCarScroll, true);
    // console.log(window.innerHeight)
    this.buildCarScroll();
  };

  //remove our scroll event listener from componentDidMount for no data leakage
  componentWillUnmount(){
    window.removeEventListener("scroll", this.buildCarScroll, true);
    // console.log("buildcar scroll unmounted")
  };
  
  //when user clicks a panel link, the correct panel will show while hiding the others
  changeBuildOption = (e) => {
    //scrolls the panel body to the top. Ensures if the user has scrolled down and clicks a new panel that new panel will be at the top.
    let position = window.pageYOffset;
    if(position > 25){
      window.scrollTo(0, 26);
    }
    //get the event and target attribute and if it matches the switch case, show the correct panel while hiding the others. This is done with a ternary operator in our JSX which will take the boolean value from state that we are changing here.
    let show = e.target.getAttribute("data-value");
      switch(show){
        case "buildCarColors":
          this.setState({buildCarColors: true, buildCarEngine:false, buildCarAccessories: false, buildCarGallery: false, buildCarFinance: false, buildCarSummary: false});
          break;
        case "buildCarEngine":
          this.setState({buildCarColors: false, buildCarEngine: true, buildCarAccessories: false, buildCarGallery: false, buildCarFinance: false, buildCarSummary: false});
          break;
        case "buildCarAccessories":
          this.setState({buildCarColors: false, buildCarEngine: false, buildCarAccessories: true, buildCarGallery: false, buildCarFinance: false, buildCarSummary: false});
          break;
        case "buildCarGallery":
          this.setState({buildCarColors: false, buildCarEngine: false, buildCarAccessories: false, buildCarGallery: true, buildCarFinance: false, buildCarSummary: false});
          break;
        case "buildCarFinance":
          this.setState({buildCarColors: false, buildCarEngine: false, buildCarAccessories: false, buildCarGallery: false, buildCarFinance: true, buildCarSummary: false});
          break;
        case "buildCarSummary":
          this.setState({buildCarColors: false, buildCarEngine: false, buildCarAccessories: false, buildCarGallery: false, buildCarFinance: false, buildCarSummary: true});
          break;
        default:
          this.setState({buildCarColors:true, buildCarEngine: false, buildCarAccessories: false, buildCarGallery: false, buildCarFinance: false});
      }; 
  };

  //receives its arguments from BuildCarColors in the onChangeColor method. Then sets the state with the correct color and image to showcase.
  changeColor = (color, image) => {
    this.setState({color, image})
  };

  //takes each image from every angle and replaces the car and color dynamically with values from state. We then change or "rotate" the image when the onClick calls this method with a button click.
  rotateCarImage = (e) => {
    e.preventDefault();
    
    let side = `/images/${this.state.model}/side/${this.state.color}.jpg`;
    let back = `/images/${this.state.model}/back/${this.state.color}.jpg`;
    let front = `/images/${this.state.model}/front/${this.state.color}.jpg`;
    let sideFront = `/images/${this.state.model}/sidefront/${this.state.color}.jpg`;
    let allCarAngles = [front, back, side, sideFront];

    let count = this.state.carAngle;
    if(count < 3){
      this.setState((prevState) => {
        return {
          carAngle: prevState.carAngle + 1,
          image: allCarAngles[this.state.carAngle]
        }
      })
    } else {
      this.setState({
        carAngle: 0,
        image: allCarAngles[this.state.carAngle]
      })
    }
  };

//receives it's arguments from BuildCarEngine, enginePicked is a number representing the cost of the engine, and engineOne & engineTwo receive boolean values to represent if that engine was picked.
  changeEngine = (enginePicked, engineOne, engineTwo) => {
    this.setState(() => ({ engine: enginePicked, engineOneSelected: engineOne, engineTwoSelected: engineTwo}), () => { this.getTotal() })
  };

//receives it's arguments from BuildCarAccessories, price is a number representing the cost of the accessory and selected is a boolean value representing that the accessory was checked/selected or not. 
  add_remove_cargoTote = (price, selected) => {
    let cargoTote = JSON.parse(JSON.stringify(this.state.cargoTote));
    cargoTote.price = price;
    cargoTote.selected = selected;
    this.setState(() => ({ cargoTote }), () => { this.getTotal() }) 
  };
  add_remove_leatherMats = (price, selected) => {
    let leatherMats = JSON.parse(JSON.stringify(this.state.wheelLocks));
    leatherMats.price = price;
    leatherMats.selected = selected;
    this.setState(() => ({leatherMats}), () => { this.getTotal() });

  };
  add_remove_wheelLocks = (price, selected) => {
    let wheelLocks = JSON.parse(JSON.stringify(this.state.wheelLocks));
    wheelLocks.price = price;
    wheelLocks.selected = selected;
    this.setState(() => ({wheelLocks}), () => { this.getTotal() });
  };

  //takes all state values and returns a total price for the car
  getTotal() {
    // setTimeout(() => {
      const getCargo = JSON.parse(JSON.stringify(this.state.cargoTote));
      const getMats = JSON.parse(JSON.stringify(this.state.leatherMats));
      const getLocks = JSON.parse(JSON.stringify(this.state.wheelLocks));
      const cargoTote = getCargo.price;
      const leatherMats = getMats.price;
      const wheelLocks = getLocks.price;
      const total = this.props.car.price + this.state.engine + cargoTote + leatherMats + wheelLocks;

      // console.log(this.state.price + this.state.engine + cargoTote + leatherMats + wheelLocks);
      this.setState({totalPrice:total})
    // },100);
  };

  //takes the totalPrice from state and turns it into a string so we can add a $ and , so IE 30000 turns into $30,000
  // carString = () => {
  // //for testing. remove when done
  //   // if(this.state.totalPrice === undefined){return <div>$30,000</div>}
  
  //   let total = this.state.totalPrice;
  //   let totalString = total.toString();
  //   let first = totalString.slice(0,2);
  //   let second = totalString.slice(2);

  //   return(
  //     <div>
  //       ${first},{second}
  //     </div>
  //   )
  // };

  //gets the window offset position when scrolling so we can animate some things when the user scrolls down or up
  buildCarScroll = () => {
    let position = window.pageYOffset
      if(position > 25) {this.setState({ carTransition: true })} 
      else if(position < 55) {this.setState({ carTransition: false })}
  };


  //send the user selections that are held in state to redux store with the getPurchasedItems function so we can grab those values in our summary page
  getPurchasedItems = () => {
    const getCargo = JSON.parse(JSON.stringify(this.state.cargoTote));
    const getMats = JSON.parse(JSON.stringify(this.state.leatherMats));
    const getLocks = JSON.parse(JSON.stringify(this.state.wheelLocks));
    const cargoTote = getCargo.price;
    const leatherMats = getMats.price;
    const wheelLocks = getLocks.price;

    const allSelections = {
      model: this.state.model,
      color: this.state.color,
      engineOne: this.state.engineOneSelected,
      engineTwo: this.state.engineTwoSelected,
      cargoTote,
      leatherMats,
      wheelLocks,
      price: this.state.price,
      totalPrice: this.state.totalPrice
    }
    return this.props.purchase(allSelections)
  };

  //when the user clicks the panel button for summary we changeBuildOption which will show the summary body and hide the other options body and then we getPurchasedItems propagating the information with what the user has selected IE car, color, engine type, accessories.
  summaryPanelButton = (e) => {this.changeBuildOption(e); this.getPurchasedItems();};
  
  render(){
    // console.log("buildcarpagestate",this.state);
    // console.log("buildcarpageprops",this.props)
    return(
      <div>
        <div className={this.state.carTransition ? "buildCar-sectionScroll" : "buildCar-section"}>  
          <div className={this.state.carTransition ? "buildCar-mainContainerScroll" : "buildCar-mainContainer"}>
            <div>&nbsp;</div>
            <div className="buildCar-mainInnerContainer">
              <div className="buildCar-titleFlex">
                <div className="buildCar-yourBuild">
                  Your Build 
                </div>
                <div className="buildCar-title">
                  {this.state.model}
                </div>
              </div>
              <div className="buildCar-imgContain">
                <img className={this.state.carTransition ? "buildCar-imgScroll" : "buildCar-img"}src={this.state.image} alt="car" />
              </div>
              <div className="buildCar-priceButtonFlex">
                <div className="buildCar-price">
                  {/* {this.carString()} */}
                  { CarPriceToString(this.state.totalPrice) }
                </div>
                <button className="buildCar-changeAngle" onClick={this.rotateCarImage}><i className="fas fa-arrow-circle-right"></i></button>
              </div>
            </div>
            <div>
              <div className="buildCar-panelContainer">
                <div className={this.state.buildCarColors ?"buildCar-panelButtons buildCar-border buildCar-panelActive" : "buildCar-panelButtons buildCar-border buildCar-panelInactive"} data-value="buildCarColors" onClick={this.changeBuildOption}>
                  <p className="buildCar-panelButtons-text" data-value="buildCarColors" onClick={this.changeBuildOption}>Color</p>
                  <i className="fas fa-car panel-car" data-value="buildCarColors" onClick={this.changeBuildOption}></i>
                </div>
                <div className={this.state.buildCarEngine ?"buildCar-panelButtons buildCar-panelActive" : "buildCar-panelButtons buildCar-panelInactive"} data-value="buildCarEngine" onClick={this.changeBuildOption}>
                  <p className="buildCar-panelButtons-text" data-value="buildCarEngine"  onClick={this.changeBuildOption}>Engine</p>
                  <i className="fas fa-cogs" data-value="buildCarEngine" onClick={this.changeBuildOption}></i>
                </div>
                <div className={this.state.buildCarAccessories ?"buildCar-panelButtons buildCar-panelActive" : "buildCar-panelButtons buildCar-panelInactive"} data-value="buildCarAccessories" onClick={this.changeBuildOption}>
                  <p className="buildCar-panelButtons-text" data-value="buildCarAccessories" onClick={this.changeBuildOption}>Accessories</p>
                  <i className="fas fa-tags" data-value="buildCarAccessories" onClick={this.changeBuildOption}></i>
                </div>
                <div className={this.state.buildCarGallery ?"buildCar-panelButtons buildCar-panelActive" : "buildCar-panelButtons buildCar-panelInactive"} data-value="buildCarGallery" onClick={this.changeBuildOption}>
                  <p className="buildCar-panelButtons-text" data-value="buildCarGallery" onClick={this.changeBuildOption}>Gallery</p>
                  <i className="fas fa-images" data-value="buildCarGallery" onClick={this.changeBuildOption}></i>
                </div>
                <div className={this.state.buildCarFinance ?"buildCar-panelButtons buildCar-panelActive" : "buildCar-panelButtons buildCar-panelInactive"} data-value="buildCarFinance" onClick={this.changeBuildOption}>
                  <p className="buildCar-panelButtons-text" data-value="buildCarFinance" onClick={this.changeBuildOption}>Finance</p>
                  <i className="fas fa-calculator" data-value="buildCarFinance" onClick={this.changeBuildOption}></i>
                </div>
                <div className={this.state.buildCarSummary ?"buildCar-panelButtons buildCar-panelActive" : "buildCar-panelButtons buildCar-panelInactive"} data-value="buildCarSummary" onClick={this.summaryPanelButton}>
                  <p className="buildCar-panelButtons-text" data-value="buildCarSummary" onClick={this.summaryPanelButton}>Summary</p>
                </div>
              </div>
            </div>
          </div>

          <div className={this.state.carTransition ? "buildCar-panelContentScroll" : "buildCar-panelContentNoScroll"}>
            {
            this.state.buildCarColors ? 
              <BuildCarColors image={this.state.image} changeColor={this.changeColor} /> 
            : this.state.buildCarEngine ? 
              <BuildCarEngine 
                engineOneSelected={this.state.engineOneSelected} 
                engineTwoSelected={this.state.engineTwoSelected} 
                changeEngine={this.changeEngine} 
              /> 
            : this.state.buildCarAccessories ?
              <BuildCarAccessories 
                cargoToteSelected={this.state.cargoTote.selected} 
                leatherMatsSelected={this.state.leatherMats.selected} 
                wheelLocksSelected={this.state.wheelLocks.selected} 
                add_remove_Cargo={this.add_remove_cargoTote} 
                add_remove_Mats={this.add_remove_leatherMats} 
                add_remove_Locks={this.add_remove_wheelLocks}  
              /> 
            : this.state.buildCarGallery ?
              <BuildCarGallery car={this.state.model} /> 
            : this.state.buildCarFinance ? 
              <BuildCarFinance carPrice={this.state.totalPrice}/> 
            :
              <BuildCarSummary /> 
            }  
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {car: state.allCars[1]}
};

export default connect(mapStateToProps,{
  purchase
})(BuildCarPage86);


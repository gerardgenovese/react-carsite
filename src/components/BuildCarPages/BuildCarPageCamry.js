import React from "react";
import { connect } from "react-redux";
import BuildCarColors from "../BuildCarColors";
import BuildCarEngine from "../BuildCarEngine";
import BuildCarAccessories from "../BuildCarAccessories";
import BuildCarCalculator from "../BuildCarCalculator";
import Footer from "../Footer";
// import { pickColor } from "../redux/actions";
class BuildCarPage extends React.Component{

 state = {
    title: this.props.car.title,
    image: this.props.car.img,
    carAngle: 0,
    color: this.props.car.color,
    // price: this.props.car.price,
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
    buildCarCalculator: false,
    totalPrice: this.props.car.price,
    carTransition: false,
    panelActive: true
  };


 


//allows us to click link and show build menu underneath car display
  changeBuildOption = (e) => {
    let show = e.target.getAttribute("data-value");
      switch(show){
        case "buildCarColors":
          this.setState({buildCarColors: true, buildCarEngine:false, buildCarAccessories: false, buildCarCalculator: false});
          break;
        case "buildCarEngine":
          this.setState({buildCarColors: false, buildCarEngine: true, buildCarAccessories: false, buildCarCalculator: false});
          break;
        case "buildCarAccessories":
          this.setState({buildCarColors: false, buildCarEngine: false, buildCarAccessories: true, buildCarCalculator: false});
          break;
        case "buildCarCalculator":
          this.setState({buildCarColors: false, buildCarEngine: false, buildCarAccessories: false, buildCarCalculator: true});
          break;
        default:
          this.setState({buildCarColors:true, buildCarEngine: false, buildCarAccessories: false, buildCarCalculator: false});
      } 
      // console.log(show);
  };

  //change color menu
  changeColor = (color, image) => {
    this.setState({color, image})
  };

  rotateCarImage = (e) => {
    e.preventDefault();
    
    let side = `/images/${this.state.title}/side/${this.state.color}.jpg`;
    let back = `/images/${this.state.title}/back/${this.state.color}.jpg`;
    let front = `/images/${this.state.title}/front/${this.state.color}.jpg`;
    let sideFront = `/images/${this.state.title}/sidefront/${this.state.color}.jpg`;

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

//change engine menu
  changeEngine = (enginePicked, engineOne, engineTwo) => {
    this.setState({ 
      engine: enginePicked,
      engineOneSelected: engineOne,
      engineTwoSelected: engineTwo
    })
    this.getTotal();
  };

//add accessory menu
  add_remove_cargoTote = (price, selected) => {
    let cargoTote = JSON.parse(JSON.stringify(this.state.cargoTote));
    cargoTote.price = price;
    cargoTote.selected = selected;
    this.setState({
      cargoTote
    })
    this.getTotal();
  };
  add_remove_leatherMats = (price, selected) => {
    let leatherMats = JSON.parse(JSON.stringify(this.state.wheelLocks));
    leatherMats.price = price;
    leatherMats.selected = selected;
    this.setState({
      leatherMats
    })
    this.getTotal();
  };
  add_remove_wheelLocks = (price, selected) => {
    let wheelLocks = JSON.parse(JSON.stringify(this.state.wheelLocks));
    wheelLocks.price = price;
    wheelLocks.selected = selected;
    this.setState(({
      wheelLocks
    }))
    this.getTotal();
  };

  getTotal() {
    setTimeout(() => {
      const getCargo = JSON.parse(JSON.stringify(this.state.cargoTote));
      const getMats = JSON.parse(JSON.stringify(this.state.leatherMats));
      const getLocks = JSON.parse(JSON.stringify(this.state.wheelLocks));
      const cargoTote = getCargo.price;
      const leatherMats = getMats.price;
      const wheelLocks = getLocks.price;
      const total = this.props.car.price + this.state.engine + cargoTote + leatherMats + wheelLocks;

      // console.log(this.state.price + this.state.engine + cargoTote + leatherMats + wheelLocks);
      this.setState({totalPrice:total})
    },100);
  };


  componentDidMount() {
    window.scrollTo(0, 0);

    window.addEventListener("scroll", this.buildCarScroll, true);

    console.log(window.innerHeight)
    this.buildCarScroll();
  };

  componentWillUnmount(){

    window.removeEventListener("scroll", this.buildCarScroll, true);
    console.log("buildcar scroll unmounted")
  }


  buildCarScroll = () => {
    let position = window.pageYOffset

  
      if(position > 25){
        console.log("change to")
        this.setState({ carTransition: true })
      } 

    else if(position < 55){
      console.log("change back")
      this.setState({ carTransition: false })
    }

  }

  
  render(){
    console.log("buildcarpagestate",this.state);
    console.log("buildcarpageprops",this.props)
    return(
      <div>

        {/* <div className="buildCar-flex">
          <div>
            <div className="buildCar">Your Build</div>
            <div className="buildCar">2019</div>
            <div className="buildCar">{this.state.title}</div>
          </div>
          <div className="buildCar">
            <img className={this.state.carTransition ? "buildCar-img--shrink" : "buildCar-img"} src={this.state.image} alt={this.state.title}/>
          </div>
          <div>
            <div className="buildCar">{this.state.totalPrice}</div>
          </div>
          <div className="buildCar">
            <button className="buildCar" onClick={this.rotateCarImage}>-></button>
          </div>
         
         
         

        </div>

        <div className="buffer"></div>






        <div className={this.state.carTransition ? "buildCar-menu buildCar-menu--fixed" : "buildCar-menu"}>
          <div className="buildCar-menu--links buildCar-menu--links_first">
            <i className="fa fa-check" aria-hidden="true"></i>
            <div className="buildCar-menu--link">Grade</div>
          </div>
          <div className="buildCar-menu--links" data-value="buildCarColors" onClick={this.changeBuildOption}>
            <i className="fa fa-car" aria-hidden="true"></i>
            <div className="buildCar-menu--link">
              Colors
            </div>
          </div>
          <div className="buildCar-menu--links" data-value="buildCarEngine" onClick={this.changeBuildOption}>
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <div className="buildCar-menu--link">
              Engine
            </div>
          </div>
          <div className="buildCar-menu--links" data-value="buildCarAccessories" onClick={this.changeBuildOption}>
            <i className="fa fa-tags" aria-hidden="true"></i>
            <div className="buildCar-menu--link">
              Accessories
            </div>
          </div>
          <div className="buildCar-menu--links" data-value="buildCarCalculator" onClick={this.changeBuildOption}>
            <i className="fa fa-calculator" aria-hidden="true"></i>
            <div className="buildCar-menu--link">
              Finance
            </div>
          </div>
           
           
        </div> */}





  <section className="buildCar"> 
    <div className={this.state.carTransition ? "buildCar-main2" : "buildCar-main"}>

      <div className={this.state.carTransition ? "buildCar-main2--buffer" : ""}></div>

      <div className={this.state.carTransition ? "buildCar-contain2" : "buildCar-contain"}>
        <div className="buildCar-containTitle">
          <p className="buildCar-yourBuild">Your Build</p>
          <p className="buildCar-title">{this.state.title}</p>
        </div>
   
        <div>
          <img src={this.state.image} className={this.state.carTransition ? "buildCar-img2": "buildCar-img"} alt={this.state.title}/>
        </div>
        <p className="buildCar-price">{this.state.totalPrice}</p>
        <button className="buildCar-button" onClick={this.rotateCarImage}><i className="fas fa-arrow-circle-right"></i></button>
      </div>
     
    </div>



    <div className={this.state.carTransition ? "buildCar-panel2" : "buildCar-panel"}>
      <div className="buildCar-panel-buttons buildCar-panel-buttons_colors car-panel active" data-value="buildCarColors" onClick={this.changeBuildOption}>
        <i className="fas fa-car buildCar__icon--i" data-value="buildCarColors" onClick={this.changeBuildOption}></i>
        <p className="buildCar-panel-text" data-value="buildCarColors" onClick={this.changeBuildOption}>Colors</p>
      </div>
      <div className="buildCar-panel-buttons" data-value="buildCarEngine" onClick={this.changeBuildOption}>
        <i className="fas fa-cogs buildCar__icon--i" data-value="buildCarEngine" onClick={this.changeBuildOption}></i>
        <p className="buildCar-panel-text" data-value="buildCarEngine" onClick={this.changeBuildOption}>Engine Type</p>
      </div>
      <div className="buildCar-panel-buttons" data-value="buildCarAccessories" onClick={this.changeBuildOption}>
        <i className="fas fa-tags buildCar__icon--i" data-value="buildCarAccessories" onClick={this.changeBuildOption}></i>
        <p className="buildCar-panel-text" data-value="buildCarAccessories" onClick={this.changeBuildOption}>Accessories</p>
      </div>
      <div className="buildCar-panel-buttons panel-gallery">
        <i className="fas fa-images buildCar__icon--i"></i>
      <p className="buildCar-panel-text">Gallery</p>
      </div>
      <div className="buildCar-panel-buttons calc-panel" data-value="buildCarCalculator" onClick={this.changeBuildOption}>
        <i className="fas fa-calculator buildCar__icon--i" data-value="buildCarCalculator" onClick={this.changeBuildOption}></i>
      <p className="buildCar-panel-text" data-value="buildCarCalculator" onClick={this.changeBuildOption}>Finance</p>
      </div>
    </div>



  

  </section>





















          <div className="buildCar-options--container">
            {
              this.state.buildCarColors ? 
                <BuildCarColors 
                  image={this.state.image} 
                  changeColor={this.changeColor} 
                /> 
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
                : <BuildCarCalculator carPrice={this.state.totalPrice}/>
            }  

          </div>

          <Footer />
      </div>
    )
















  }
}


const mapStateToProps = (state) => {
  // console.log("mapstatetoprops",state);
  return {car: state.buildCar}
}

export default connect(mapStateToProps)(BuildCarPage);

// export default BuildCarPage;
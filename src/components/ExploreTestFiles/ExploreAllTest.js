import React from "react";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import { buildCar } from "../redux/actions";

// import camrySide from "../relativeImages/exploreall/camry/side.PNG"
// import camryFront from "../relativeImages/exploreall/camry/front.PNG"
// import t86Side from "../relativeImages/exploreall/86/side.PNG"
// import t86Front from "../relativeImages/exploreall/86/front.PNG"
// import corollaSide from "../relativeImages/exploreall/corolla/side.PNG"
// import corollaFront from "../relativeImages/exploreall/corolla/front.PNG"
// import avalonSide from "../relativeImages/exploreall/avalon/side.png"
// import avalonFront from "../relativeImages/exploreall/avalon/front.png"
// import yarisSide from "../relativeImages/exploreall/yaris/side.png"
// import yarisFront from "../relativeImages/exploreall/yaris/front.png"




import ExploreAllTestChild from "./ExploreAllTestChild";


class ExploreAllTest extends React.Component {


  state = {
    // cars: this.props.cars,
    // image: [],
    // title: [],
    // price: []



    camryAnimate: false,
    t86Animate: false,
    corollaAnimate:false,
    avalonAnimate:false,
    yarisAnimate:false
  }
  

  componentDidMount() {
    window.addEventListener("scroll", this.scrollPos, true);

    console.log(window.innerHeight)
    this.scrollPos();
  };


  scrollPos = () => {
    let position = window.pageYOffset

    if(window.innerHeight < 1000){   
      if(position >= 125){
        this.startAnimation();
      } 
    }
    else if(window.innerHeight > 1000){
      this.startAnimation();
    }
  }

  startAnimation(){
    setTimeout(() => {
      this.setState({ camryAnimate: true })
    },100);
    setTimeout(() => {
      this.setState({ t86Animate: true })
    },300);
    setTimeout(() => {
      this.setState({ corollaAnimate: true })
    },500);
    setTimeout(() => {
      this.setState({ avalonAnimate: true })
    },700);
    setTimeout(() => {
      this.setState({ yarisAnimate: true })
    },900);
  }


  componentWillUnmount(){
    this.setState({ camryAnimate: false, t86Animate: false, corollaAnimate: false, avalonAnimate: false, yarisAnimate: false });

    window.removeEventListener("scroll", this.scrollPos, true);
    console.log("unmounted")
  }


  render(){
   
    return (
      <div>

     
   
      <div onScroll={this.scrollPos}>
        <div className="explore-header">Explore All Cars</div>

       
        <ExploreAllTestChild camryAnimate={this.state.camryAnimate} t86Animate={this.state.t86Animate} corollaAnimate={this.state.corollaAnimate} avalonAnimate={this.state.avalonAnimate} yarisAnimate={this.state.yarisAnimate}/>











      </div>




















      <div className="modal-pricing">
          <div className="modal-pricing--cost">
            <div className="modal-pricing--cost_container modal-pricing--cost_container-first">
              <div className="modal-pricing--cash">${carInfo.perMonth}</div>
                <div className="modal-pricing--perMonth">per mos/36Mos</div>
            </div>
            <div className="modal-pricing--cost_container">
              <div className="modal-pricing--cash">${carInfo.signing}</div>
              <div className="modal-pricing--signing">due at signing</div>
            </div>
          </div>
          {/* <div className="modal-pricing--button">  */}
            {/* <button className="modal-pricing--button_quote">&nbsp;request a quote</button> */}
            <div className="modal-pricing-button">
              <button className="modal-pricing-button--main"></button>
              <div className="modal-pricing-button--text">TextHere</div>
            </div>
          {/* </div> */}
        </div>


        <div className="modal-details">
          <div className="modal-details--text">
          Lease a 2018 {carInfo.title} for ${carInfo.perMonth} for 36 Months. (Includes 12000 miles per year for the Lease Term of 36 months)
          </div>
          <div className="modal-details--buttons">
            {/* <button className="modal-details--buttons_search">search inventory</button>
            <button className="modal-details--buttons_build">build yours</button> */}
            <div className="modal-details-button">
              <button className="modal-details-button--main"></button>
              <div className="modal-details-button--text">TextHere</div>
            </div>
            <div className="modal-details-button">
              <button className="modal-details-button--main"></button>
              <div className="modal-details-button--text">TextHere</div>
            </div>
          </div>
        </div>



























    </div>
    )


   
  }
}

export default ExploreAllTest;
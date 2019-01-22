import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { buildCar } from "../redux/actions";

import camrySide from "../relativeImages/exploreall/camry/side.PNG"
import camryFront from "../relativeImages/exploreall/camry/front.PNG"
import t86Side from "../relativeImages/exploreall/86/side.PNG"
import t86Front from "../relativeImages/exploreall/86/front.PNG"
import corollaSide from "../relativeImages/exploreall/corolla/side.PNG"
import corollaFront from "../relativeImages/exploreall/corolla/front.PNG"
import avalonSide from "../relativeImages/exploreall/avalon/side.png"
import avalonFront from "../relativeImages/exploreall/avalon/front.png"
import yarisSide from "../relativeImages/exploreall/yaris/side.png"
import yarisFront from "../relativeImages/exploreall/yaris/front.png"


class ExploreAll extends React.Component {


  state = {
    cars: this.props.cars,
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

        <div className="explore">
          <Link to="/build/camry" onClick={() => this.props.buildCar(this.state.cars[0])}>

            <div className={this.state.camryAnimate ? "explore-car carAnimate" : "explore-car"}>
              <div>
                <img className="explore-car--side" src={camrySide} alt="camry"/>
                <img className="explore-car--front" src={camryFront} alt="camry"/>
              </div>
              <div className="explore-car--info">
                <div className="explore-car--model"><strong>2019 {this.state.cars[0].title}</strong></div> 
                <div className="explore-car--price">${this.state.cars[0].price}</div>
                <div className="explore-car--mileage">{this.state.cars[0].miles} est MPG</div>
              </div>
            </div>  
          </Link>
          <Link to="/build/86" onClick={() => this.props.buildCar(this.state.cars[1])}>
            <div className={this.state.t86Animate ? "explore-car carAnimate" : "explore-car"}>
              <div>
                <img className="explore-car--side t86" src={t86Side} alt="86"/>
                <img className="explore-car--front t86" src={t86Front} alt="86"/>
              </div>
              <div className="explore-car--info t86">
                <div className="explore-car--model"><strong>2019 {this.state.cars[1].title}</strong></div> 
                <div className="explore-car--price">${this.state.cars[1].price}</div>
                <div className="explore-car--mileage">{this.state.cars[1].miles} est MPG</div>
              </div>
            </div>  
          </Link>
          <Link to="/build/corolla" onClick={() => this.props.buildCar(this.state.cars[2])}>
            <div className={this.state.corollaAnimate ? "explore-car carAnimate" : "explore-car"}>
              <div>
                <img className="explore-car--side corolla" src={corollaSide} alt="corolla"/>
                <img className="explore-car--front corolla" src={corollaFront} alt="corolla"/>
              </div>
              <div className="explore-car--info corolla">
                <div className="explore-car--model"><strong>2019 {this.state.cars[2].title}</strong></div> 
                <div className="explore-car--price">${this.state.cars[2].price}</div>
                <div className="explore-car--mileage">{this.state.cars[2].miles} est MPG</div>
              </div>
            </div>  
          </Link>
          <Link to="/build/avalon" onClick={() => this.props.buildCar(this.state.cars[3])}>
            <div className={this.state.avalonAnimate ? "explore-car carAnimate" : "explore-car"}>
              <div>
                <img className="explore-car--side avalon" src={avalonSide} alt="avalon"/>
                <img className="explore-car--front avalon" src={avalonFront} alt="avalon"/>
              </div>
              <div className="explore-car--info avalon">
                <div className="explore-car--model"><strong>2019 {this.state.cars[3].title}</strong></div> 
                <div className="explore-car--price">${this.state.cars[3].price}</div>
                <div className="explore-car--mileage">{this.state.cars[3].miles} est MPG</div>
              </div>
            </div> 
          </Link>
          <Link to="/build/yaris" onClick={() => this.props.buildCar(this.state.cars[4])}> 
            <div className={this.state.yarisAnimate ? "explore-car carAnimate" : "explore-car"}>
              <div>
                <img className="explore-car--side yaris" src={yarisSide} alt="yaris"/>
                <img className="explore-car--front yaris" src={yarisFront} alt="yaris="/>
              </div>
              <div className="explore-car--info yaris">
                <div className="explore-car--model"><strong>2019 {this.state.cars[4].title}</strong></div> 
                <div className="explore-car--price">${this.state.cars[4].price}</div>
                <div className="explore-car--mileage">{this.state.cars[4].miles} est MPG</div>
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
})(ExploreAll);
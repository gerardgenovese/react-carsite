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

import { CarPriceToString } from "./Functions";

class ExploreAll extends React.Component {

  state = {
    cars: this.props.cars,
    scroll: false
  };

  componentDidMount(){
    window.addEventListener("scroll", this.scrollPos, true);
  };

  scrollPos = () => {
    let position = window.pageYOffset

    if(window.innerHeight < 1000){   
      if(position >= 125){
        this.setState({ scroll: true })
      } 
    }
    else if(window.innerHeight > 1000){
      this.setState({ scroll: true })
    }
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.scrollPos, true);
  };




  render(){
    const { cars } = this.state;
    return (
      <div>
        <div>
          <div className="explore-header">Explore All Cars</div>
          <div className="explore">
            <Link to="/build/camry" onClick={() => this.props.buildCar(this.state.cars[0])}>
              <div className={this.state.scroll ? "explore-car camryAnimate" : "explore-car"}>
                <div>
                  <img className="explore-car--side" src={camrySide} alt="camry"/>
                  <img className="explore-car--front" src={camryFront} alt="camry"/>
                </div>
                <div className="explore-car--info">
                  <div className="explore-car--model"><strong>2019 {this.state.cars[0].title}</strong></div> 
                  <div className="explore-car--price">{CarPriceToString(cars[0].price)}</div>
                  <div className="explore-car--mileage">{this.state.cars[0].miles} est MPG</div>
                </div>
              </div>  
            </Link>
            <Link to="/build/86" onClick={() => this.props.buildCar(this.state.cars[1])}>
              <div className={this.state.scroll ? "explore-car t86Animate" : "explore-car"}>
                <div>
                  <img className="explore-car--side t86" src={t86Side} alt="86"/>
                  <img className="explore-car--front t86" src={t86Front} alt="86"/>
                </div>
                <div className="explore-car--info t86">
                  <div className="explore-car--model"><strong>2019 {this.state.cars[1].title}</strong></div> 
                  <div className="explore-car--price">{CarPriceToString(cars[1].price)}</div>
                  <div className="explore-car--mileage">{this.state.cars[1].miles} est MPG</div>
                </div>
              </div>  
            </Link>
            <Link to="/build/corolla" onClick={() => this.props.buildCar(this.state.cars[2])}>
              <div className={this.state.scroll ? "explore-car corollaAnimate" : "explore-car"}>
                <div>
                  <img className="explore-car--side corolla" src={corollaSide} alt="corolla"/>
                  <img className="explore-car--front corolla" src={corollaFront} alt="corolla"/>
                </div>
                <div className="explore-car--info corolla">
                  <div className="explore-car--model"><strong>2019 {this.state.cars[2].title}</strong></div> 
                  <div className="explore-car--price">{CarPriceToString(cars[2].price)}</div>
                  <div className="explore-car--mileage">{this.state.cars[2].miles} est MPG</div>
                </div>
              </div>  
            </Link>
            <Link to="/build/avalon" onClick={() => this.props.buildCar(this.state.cars[3])}>
              <div className={this.state.scroll ? "explore-car avalonAnimate" : "explore-car"}>
                <div>
                  <img className="explore-car--side avalon" src={avalonSide} alt="avalon"/>
                  <img className="explore-car--front avalon" src={avalonFront} alt="avalon"/>
                </div>
                <div className="explore-car--info avalon">
                  <div className="explore-car--model"><strong>2019 {this.state.cars[3].title}</strong></div> 
                  <div className="explore-car--price">{CarPriceToString(cars[3].price)}</div>
                  <div className="explore-car--mileage">{this.state.cars[3].miles} est MPG</div>
                </div>
              </div> 
            </Link>
            <Link to="/build/yaris" onClick={() => this.props.buildCar(this.state.cars[4])}> 
              <div className={this.state.scroll ? "explore-car yarisAnimate" : "explore-car"}>
                <div>
                  <img className="explore-car--side yaris" src={yarisSide} alt="yaris"/>
                  <img className="explore-car--front yaris" src={yarisFront} alt="yaris="/>
                </div>
                <div className="explore-car--info yaris">
                  <div className="explore-car--model"><strong>2019 {this.state.cars[4].title}</strong></div> 
                  <div className="explore-car--price">{CarPriceToString(cars[4].price)}</div>
                  <div className="explore-car--mileage">{this.state.cars[4].miles} est MPG</div>
                </div>
              </div>  
            </Link>
          </div> 
        </div>




        <div>
          <div className="explore-mq">
            <Link to="/build/camry" onClick={() => this.props.buildCar(this.state.cars[0])}>
              <div className={this.state.scroll ? "explore-car camryAnimate" : "explore-car"}>
                <div>
                  <img className="explore-car--side_mq" src={process.env.PUBLIC_URL + '/images/camry/side/red.jpg'} alt="camry"/>
                </div>
                <div className="explore-car--info">
                  <div className="explore-car--model"><strong>2019 {this.state.cars[0].title}</strong></div> 
                  <div className="explore-car--price">${this.state.cars[0].price}</div>
                  <div className="explore-car--mileage">{this.state.cars[0].miles} est MPG</div>
                </div>
              </div>  
            </Link>
            <Link to="/build/86" onClick={() => this.props.buildCar(this.state.cars[1])}>
              <div className={this.state.scroll ? "explore-car t86Animate" : "explore-car"}>
                <div>
                  <img className="explore-car--side_mq t86" src={process.env.PUBLIC_URL + '/images/86/side/white.jpg'} alt="86"/>
                </div>
                <div className="explore-car--info t86">
                  <div className="explore-car--model"><strong>2019 {this.state.cars[1].title}</strong></div> 
                  <div className="explore-car--price">${this.state.cars[1].price}</div>
                  <div className="explore-car--mileage">{this.state.cars[1].miles} est MPG</div>
                </div>
              </div>  
            </Link>
            <Link to="/build/corolla" onClick={() => this.props.buildCar(this.state.cars[2])}>
              <div className={this.state.scroll ? "explore-car corollaAnimate" : "explore-car"}>
                <div className="testing">
                  <img className="explore-car--side_mq corolla" src={process.env.PUBLIC_URL + '/images/corolla/side/blue.jpg'} alt="corolla"/>
                </div>
                <div className="explore-car--info corolla">
                  <div className="explore-car--model"><strong>2019 {this.state.cars[2].title}</strong></div> 
                  <div className="explore-car--price">${this.state.cars[2].price}</div>
                  <div className="explore-car--mileage">{this.state.cars[2].miles} est MPG</div>
                </div>
              </div>  
            </Link>
            <Link to="/build/avalon" onClick={() => this.props.buildCar(this.state.cars[3])}>
              <div className={this.state.scroll ? "explore-car avalonAnimate" : "explore-car"}>
                <div>
                  <img className="explore-car--side_mq avalon" src={process.env.PUBLIC_URL + '/images/avalon/side/black.jpg'} alt="avalon"/>
                </div>
                <div className="explore-car--info avalon">
                  <div className="explore-car--model"><strong>2019 {this.state.cars[3].title}</strong></div> 
                  <div className="explore-car--price">${this.state.cars[3].price}</div>
                  <div className="explore-car--mileage">{this.state.cars[3].miles} est MPG</div>
                </div>
              </div> 
            </Link>
            <Link to="/build/yaris" onClick={() => this.props.buildCar(this.state.cars[4])}> 
              <div className={this.state.scroll ? "explore-car yarisAnimate" : "explore-car"}>
                <div>
                  <img className="explore-car--side_mq yaris" src={process.env.PUBLIC_URL + '/images/yaris/side/gray.jpg'} alt="yaris"/>
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
  

        {/* <div className="explore-mq">
          <Link to="/build/camry" onClick={() => this.props.buildCar(this.state.cars[0])}>
            <div className={this.state.scroll ? "explore-car carAnimate" : "explore-car"}>
              <div className="explore-mq">
                <img className="explore-car--side_mq" src={camrySide} alt="camry"/>
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
            <div className={this.state.scroll ? "explore-car carAnimate" : "explore-car"}>
              <div className="explore-mq">
                <img className="explore-car--side_mq t86" src={t86Side} alt="86"/>
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
            <div className={this.state.scroll ? "explore-car carAnimate" : "explore-car"}>
              <div className="explore-mq">scroll
                <img className="explore-car--side_mq corolla" src={corollaSide} alt="corolla"/>
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
            <div className={this.state.scroll ? "explore-car carAnimate" : "explore-car"}>
              <div className="explore-mq">
                <img className="explore-car--side_mq avalon" src={avalonSide} alt="avalon"/>
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
            <div className={this.state.scroll ? "explore-car carAnimate" : "explore-car"}>
              <div className="explore-mq">
                <img className="explore-car--side_mq yaris" src={yarisSide} alt="yaris"/>
                <img className="explore-car--front yaris" src={yarisFront} alt="yaris="/>
              </div>
              <div className="explore-car--info yaris">
                <div className="explore-car--model"><strong>2019 {this.state.cars[4].title}</strong></div> 
                <div className="explore-car--price">${this.state.cars[4].price}</div>
                <div className="explore-car--mileage">{this.state.cars[4].miles} est MPG</div>
              </div>
            </div>  
          </Link>
        </div>  */}
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
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
  };


  scrollPos = () => {
    let position = window.pageYOffset

    if(position >= 220){

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
    console.log(position)
  }


  componentWillUnmount(){
    this.setState({ camryAnimate: false, t86Animate: false, corollaAnimate: false, avalonAnimate: false, yarisAnimate: false });

    window.removeEventListener("scroll", this.scrollPos, true);
    console.log("unmounted")
  }


  // componentWillMount() {

  //   const image = [];
  //   const title = [];
  //   const price = [];


  //   this.state.cars.forEach(car => {
  //     image.push(car.img);
  //     title.push(car.title);
  //     price.push(car.price);
  //   });
  //   this.setState({ image, title, price })
  // }


//   state = {
//     cars: this.props.cars,
//     camrySide: true,
//     camryFront: false,
//     t86Side: true,
//     t86Front: false,
//     corollaSide: true,
//     corollaFront: false,
//     avalonSide: true,
//     avalonFront: false,
//     yarisSide: true,
//     yarisFront: false
//   }

//   // componentWillMount(){
//   //   this.setState({ cars: this.props.cars })
//   // }

  
// getCarType = (e) => {
//   let type = e.target.getAttribute("data-type");

//   switch(type){
//     case "camry": 
//       return this.changeCarAngle(type)
//     case "86":
//       return this.changeCarAngle(type)
//     case "corolla": 
//       return this.changeCarAngle(type)
//     case "avalon":
//       return this.changeCarAngle(type)
//     case "yaris": 
//       return this.changeCarAngle(type)
//     default:
//       return null
//   }

// };



// changeCarAngle(type) {




//   if(type === "camry"){
//     if(this.state.camrySide){
//       this.setState({ camrySide: false, camryFront: true });
//     } else if(type === "camry"){
//       this.setState({ camrySide: true, camryFront: false });
//     }
//   } 

//   if (type === "86"){
//     if(this.state.t86Side){
//       this.setState({ t86Side: false, t86Front: true });
//     } else{
//       this.setState({ t86Side: true, t86Front: false });
//     }
//   }
  
//   if(type === "corolla"){
//     if(this.state.corollaSide){
//       this.setState({ corollaSide: false, corollaFront: true });
//     } else{
//       this.setState({ corollaSide: true, corollaFront: false });
//     }
//   }

//   if(type === "avalon"){
//     if(this.state.avalonSide){
//       this.setState({ avalonSide: false, avalonFront: true });
//     } else{
//       this.setState({ avalonSide: true, avalonFront: false });
//     }
//   }

//   else if(type === "yaris"){
//     if(this.state.yarisSide){
//       this.setState({ yarisSide: false, yarisFront: true });
//     } else{
//       this.setState({ yarisSide: true, yarisFront: false });
//     }
//   }
// };




  render(){
    console.log(this.state.animate)
    // return(
    //   <div className="">

       

    //       {this.state.camrySide === true ?
    //       <div>
    //         <img data-type="camry" src={camrySide} alt="camry" onMouseEnter={this.getCarType} />
    //       </div>
    //         :
    //         <Link to="/build">
    //         {/* <div> */}
            
    //         <img data-type="camry" src={camryFront} alt="camry" onMouseLeave={this.getCarType} onClick={() => this.props.buildCar(this.state.cars[0])}/>
            
    //         {/* </div> */}
    //         </Link>
    //       }
    //       {
    //         this.state.t86Side === true ?
    //         <div>
    //         <img data-type="86" src={t86Side} alt="86" onMouseEnter={this.getCarType}/>
    //         </div>
    //         :
    //         <Link to="/build">
    //         {/* <div> */}
            
            
    //         <img data-type="86" src={t86Front} alt="86" onMouseLeave={this.getCarType} onClick={() => this.props.buildCar(this.state.cars[1])}/>
            
    //         {/* </div> */}
    //         </Link>
    //       }
    //       {
    //         this.state.corollaSide === true ?
    //         <div>
    //         <img data-type="corolla" src={corollaSide} alt="corolla" onMouseEnter={this.getCarType}/>
    //         </div>
    //         :
    //         <Link to="/build">
    //         {/* <div> */}
            
           
    //         <img data-type="corolla" src={corollaFront} alt="corolla" onMouseLeave={this.getCarType} onClick={() => this.props.buildCar(this.state.cars[2])}/>
            
    //         {/* </div> */}
    //         </Link>
    //       }
    //       {
    //         this.state.avalonSide === true ?
    //         <div>
    //         <img data-type="avalon" src={avalonSide} alt="avalon" onMouseEnter={this.getCarType}/>
    //         </div>
    //         :
    //         <Link to="/build">
    //         {/* <div> */}
            
           
    //         <img data-type="avalon" src={avalonFront} alt="avalon" onMouseLeave={this.getCarType} onClick={() => this.props.buildCar(this.state.cars[3])}/>
            
    //         {/* </div> */}
    //         </Link>
    //       }
    //       {
    //         this.state.yarisSide === true ?
    //         <div>
    //         <img data-type="yaris" src={yarisSide} alt="yaris" onMouseEnter={this.getCarType}/>
    //         </div>
    //         :
    //         <Link to="/build">
    //         {/* <div> */}
            
            
    //         <img data-type="yaris" src={yarisFront} alt="yaris" onMouseLeave={this.getCarType} onClick={() => this.props.buildCar(this.state.cars[4])}/>
         
    //         {/* </div> */}
    //         </Link>
    //       }




    //   </div>
    // )
   
    return (
      <div>

     
   
      <div onScroll={this.scrollPos}>
        <div className="explore-header">Explore All Cars</div>

        <div className="explore">
          <Link to="/build" onClick={() => this.props.buildCar(this.state.cars[0])}>

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
          <Link to="/build" onClick={() => this.props.buildCar(this.state.cars[1])}>
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
          <Link to="/build" onClick={() => this.props.buildCar(this.state.cars[2])}>
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
          <Link to="/build" onClick={() => this.props.buildCar(this.state.cars[3])}>
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
          <Link to="/build" onClick={() => this.props.buildCar(this.state.cars[4])}> 
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
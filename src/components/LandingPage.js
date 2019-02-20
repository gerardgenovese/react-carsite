import React from "react";
// import { NavLink } from "react-router-dom";
// import { connect } from "react-redux";
// import { buildCar } from "../redux/actions";


import SlideShow from "./SlideShow";
import SectionNav from "./SectionNav";
import ExploreAll from "./ExploreAll";
import KbbAward from "./KbbAward";
import WHTParent from "./WHTParent";
import Footer from "./Footer";





class LandingPage extends React.Component{




  render(){
    

  
    return(
      <div className='landingContain'>
        <SlideShow />
        <SectionNav />
        <ExploreAll />
        <KbbAward />
        <WHTParent />
        <Footer />
      </div>
    )
  }
}


export default LandingPage;


















  // renderCars = () => {
  //   return(
  //     <div>
        
  //       <Carousel infiniteLoop={true} autoPlay={true} interval={2000} showThumbs={true} showIndicators={true}>
        
  //       {
         
  //         this.props.allCars.map(car =>{
  //           return(
              
  //             <div key={car.title} onClick={()=> {
  //               return this.props.buildCar(car)
  //             }}>
  //               <img src={car.img} alt="car"/>

  //             </div>
          
  //           )
  //         })
  //       } 
      
  //       </Carousel>
     
  //     </div>
  //   )
    
  // }

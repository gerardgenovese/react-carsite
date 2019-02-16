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

import Test from "./Test";



class LandingPage extends React.Component{




    // state ={
    //   slideShow: [avalon,camry,corolla],
    //   slideIndex: 0
    // }



  // renderCars() {
  //   return this.props.allCars.map(car => {
  //     return(
  //       <div key={car.title}>
  //         <NavLink to="/build" >
  //           <img src={car.img} onClick={()=> {
  //           return this.props.buildCar(car)
  //         }} alt="car"/>
  //         </NavLink>
  //       </div>
  //     )
  //   });
  // }






  render(){
    

  
    return(
      <div className='landingContain'>

        <SlideShow />
        <SectionNav />
        <ExploreAll />
        <KbbAward />
        <WHTParent />
        <Footer />
        <Test />

        
      </div>
    )
  }
}


// const mapStateToProps = (state) => {
//   return {
//     allCars: state.allCars,
//   }
// }

// export default connect(mapStateToProps, {
//   buildCar,
// })(LandingPage);

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

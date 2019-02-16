import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


import test from "../relativeImages/exploreall/86/front.PNG"

class Test extends React.Component{
  render(){
    return(
      <Carousel>
      <div>
          <img src={test} />
          <p className="legend">Legend 1</p>
      </div>
      <div>
          <img src={test} />
          <p className="legend">Legend 2</p>
      </div>
      <div>
          <img src={test} />
          <p className="legend">Legend 3</p>
      </div>
    </Carousel>
    )
  }


}
export default Test;
import React from "react";
import WHTChild from "./WHTChild";

import img1 from "../relativeImages/wht/img1.jpg";
import img2 from "../relativeImages/wht/img2.jpg";
import img3 from "../relativeImages/wht/img3.jpg";
import img4 from "../relativeImages/wht/img4.jpg";
import img5 from "../relativeImages/wht/img5-long.jpg";
import img6 from "../relativeImages/wht/img6.jpg";
import img7 from "../relativeImages/wht/img7.jpg";
import img8 from "../relativeImages/wht/img8.jpg";

const WHTParent = () => {

  return(

    <div className="whtP">

      <div className="whtP-header--main">What's happening in Toyota</div>

      <div className="whtP-container">
        <div className="whtP-contain">
          <WHTChild 
            image={img1}
            callToAction="Latest News"
            header="One incredible ride"
            header2="Two important causes"
            body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into"
          />
          <WHTChild
            image={img2}
            callToAction="Latest News"
            header="One incredible ride"
            header2="Two important causes"
            body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into"
          />
          <WHTChild 
            image={img3}
            callToAction="Latest News"
            header="One incredible ride"
            header2="Two important causes"
            body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into"
          />
        </div>
        <div className="whtP-contain middle">
          <WHTChild 
            image={img4}
            callToAction="Latest News"
            header="One incredible ride"
            header2="Two important causes"
            body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into"
            className="middle"
          />
          <WHTChild
            image={img5}
            callToAction="Latest News"
            header="One incredible ride"
            header2="Two important causes"
            body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into"
            className="middle"
          />
        </div>
        <div className="whtP-contain">
          <WHTChild 
            image={img6}
            callToAction="Latest News"
            header="One incredible ride"
            header2="Two important causes"
            body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into"
          />
          <WHTChild 
            image={img7}
            callToAction="Latest News"
            header="One incredible ride"
            header2="Two important causes"
            body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into"
          />
          <WHTChild 
            image={img8}
            callToAction="Latest News"
            header="One incredible ride"
            header2="Two important causes"
            body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into"
          />
        </div>
      </div>  

    </div>
  )
}

export default WHTParent;
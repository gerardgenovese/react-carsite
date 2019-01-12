import React from "react";
import { Link } from "react-router-dom";

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
          <Link to="/toyota-newsroom/supra" target="_blank">
            <WHTChild 
              image={img1}
              callToAction="Latest News"
              header="One incredible ride"
              header2="Two important causes"
              body="Barrett-Jackson will auction the first globally produced all-new toyota Supra, with all proceeds going to charity."
            />
          </Link>
          <Link to="/toyota/supra">
            <WHTChild 
              image={img2}
              callToAction="Latest News"
              header="Safety recall information"
              header2=""
              body="Get information on open safety recalls and service campaigns."
            />
          </Link>
          <Link to="/toyota/supra">
            <WHTChild 
              image={img3}
              callToAction="Latest News"
              header="Audio/Multimedia"
              header2=""
              body="Entune™ and Entune™ 3.0 App Suite capable vehicles are being updated 11/13/18 to no longer include Pandora®, OpenTable® and Facebook Places functionality."
            />
          </Link>
        </div>

     

        <div className="whtP-contain middle">
          <Link to="/toyota-concept-vehicles/supra/xfinity-series">
            <WHTChild
              image={img4}
              callToAction="Latest News"
              header="The 2019 Supra Xfinity"
              header2="Series Race Car"
              body="The al-new Supra race car joins the NASCAR Xfinity Series and is set to make its racing debut in 2019."
            />
          </Link>
          <Link to="/toyota/supra">
            <WHTChild
              image={img5}
              callToAction="Latest News"
              header="Toyota Safety Sense (TSS)"
              header2=""
              body="Wherever you are going in life, Toyota's newly developed safety system helps get you there safely."
              className="middle"
            />
          </Link>
        </div>
        <div className="whtP-contain">
          <Link to="/toyota/supra">
            <WHTChild 
              image={img6}
              callToAction="Latest News"
              header="Toyota Care"
              header2=""
              body="Toyota includes a no cost maintenance plan 24 and 24-hour roadside assistance with the purchase or lease of every new Toyota."
              className="middle"
            />
          </Link>
          <Link to="/toyota/supra">
            <WHTChild 
              image={img7}
              callToAction="Latest News"
              header="Our American Journey"
              header2=""
              body="From north to south, east to west, we’re hundreds of thousands of team members strong – all dedicated to helping you go places."
            />
            </Link>
          <Link to="/toyota/supra">
            <WHTChild 
              image={img8}
              callToAction="Latest News"
              header="The versatiel 2018 Prius"
              header2=""
              body="Whether you're going camping, to the farmers' market or the dog park, Prius has everything you need. Let the fun begin."
            />
          </Link>
        </div>
      </div>  

    </div>
  )
}

export default WHTParent;
import React from "react";
import XfinityModal from "./XfinityModal";

import mainImage from "../../relativeImages/whatshappeningpages/xfinity.jpg";

import x0 from "../../relativeImages/whatshappeningpages/xfinityslideshow/x0.jpg";
import x1 from "../../relativeImages/whatshappeningpages/xfinityslideshow/x1.jpg";
import x2 from "../../relativeImages/whatshappeningpages/xfinityslideshow/x2.jpg";
import x3 from "../../relativeImages/whatshappeningpages/xfinityslideshow/x3.jpg";
import x4 from "../../relativeImages/whatshappeningpages/xfinityslideshow/x4.jpg";
import x5 from "../../relativeImages/whatshappeningpages/xfinityslideshow/x5.jpg";
import x6 from "../../relativeImages/whatshappeningpages/xfinityslideshow/x6.jpg";
import x7 from "../../relativeImages/whatshappeningpages/xfinityslideshow/x7.jpg";





class Xfinity extends React.Component {

  state = {
    xfinityModal: false,
    selectedImage: null
  }

  openModal = (e) => {

    const image = parseInt(e.target.getAttribute("data-type"));
    this.setState({ xfinityModal: !this.state.xfinityModal, selectedImage: image })
    // console.log(e.target.getAttribute("data-type"))
  }


  render(){
    return(
      <div>
       
       
  
        <div className="xfinity">
          <div className="xfinity-imgContainer">
            <div>
              <img className="xfinity-imgContainer--img" src={mainImage} alt="2019 Supra Xfinity Series Race Car" />
            </div>
            <div>
              <button className="xfinity-imgContainer--button">Get Updates</button>
            </div>
          </div>
          <div className="xfinity-series">
            <div className="xfinity-blurp">OUR 200-MPH THUNDERSTORM.</div>
            <div className="xfinity-title">The 2019 Supra Xfinity Series Race Car</div>
            <p className="xfinity-body">The racetrack is where we live. It's where we prove our commitment to making ever-better cars. That's why we're proud to announce our latest creation for the racetrack: the 2019 Supra Xfinity Series Race Car. With its ability to produce over 700 horsepower, and unleash a roar that literally makes the earth quake, this purpose-built race car really gets our minds racing. Our teams at Calty Design and Toyota Racing Development worked hand-in-hand with NASCAR <sup>24</sup> to ensure the iconic race car shape was safe, powerful, and ready to take this car to speeds in excess of 200 mph. It's set to shake up racing when it makes its on-track debut at the NASCAR Xfinity Series on February 16, 2019.</p>
            <br/>
            <div className="xfinity-press">Check out the Supra Xfinity Series Race Car press release</div>
            <br/>
            <div className="xfinity-download">Download All Wallpapers (29MB)</div>
          </div>

          <div className="xfinity-gallery">

            <div className="xfinity-gallery--flex">
              <img className="xfinity-gallery--img" src={x0} alt="2019 Supra Xfinity Sereis Race Car" data-type="0" onClick={this.openModal} />
              <div className="xfinity-gallery--flex-youtubePlay"></div>
              <i className="fab fa-youtube xfinity-gallery--flex-youtubeBG" aria-hidden="true"></i>
            </div>

            <div className="xfinity-gallery--flex xfinity-gallery--flex">
              <img className="xfinity-gallery--img" src={x1} alt="2019 Supra Xfinity Sereis Race Car" data-type="1" onClick={this.openModal} />
              <div className="xfinity-gallery--flex-youtubePlay"></div>
              <i className="fab fa-youtube xfinity-gallery--flex-youtubeBG" aria-hidden="true"></i>
            </div>
            <div className="xfinity-gallery--flex">
              <img className="xfinity-gallery--img" src={x2} alt="2019 Supra Xfinity Sereis Race Car"  data-type="2" onClick={this.openModal}/>
            </div>
            <div className="xfinity-gallery--flex">
              <img className="xfinity-gallery--img" src={x3} alt="2019 Supra Xfinity Sereis Race Car"  data-type="3" onClick={this.openModal}/>
            </div>
            <div className="xfinity-gallery--flex">
              <img className="xfinity-gallery--img" src={x4} alt="2019 Supra Xfinity Sereis Race Car"  data-type="4" onClick={this.openModal}/>
            </div>
            <div className="xfinity-gallery--flex">
              <img className="xfinity-gallery--img" src={x5} alt="2019 Supra Xfinity Sereis Race Car"  data-type="5" onClick={this.openModal}/>
            </div>
            <div className="xfinity-gallery--flex">
              <img className="xfinity-gallery--img" src={x6} alt="2019 Supra Xfinity Sereis Race Car"  data-type="6" onClick={this.openModal}/>
            </div>
            <div className="xfinity-gallery--flex">
              <img className="xfinity-gallery--img" src={x7} alt="2019 Supra Xfinity Sereis Race Car"  data-type="7" onClick={this.openModal}/>
            </div>
          </div>
  
          <XfinityModal openModal={this.openModal} xfinityModal={this.state.xfinityModal} x2={x2} x3={x3} x4={x4} x5={x5} x6={x6} x7={x7} selectedImage={this.state.selectedImage}/>



    
  
        </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
      </div>
    )
  }
  
};

export default Xfinity;


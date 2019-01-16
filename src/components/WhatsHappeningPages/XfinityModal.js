import React from "react";
import Modal from "react-modal";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import video1 from "../../relativeImages/toyotaVideo1.mp4";
import video2 from "../../relativeImages/toyotaVideo2.mp4";

class XfinityModal extends React.Component{

  // state = {
  //   vid1: false,
  //   vid2: 0,
  //   image0: 0,
  //   image1: 1,
  //   image2: 2,
  //   image3: 3,
  //   image4: 4,
  //   image5: 5,
  //   image6: 6,
  //   image7: 7
  // };


 



  componentDidMount = () => {
    Modal.setAppElement("body");
  };

  stopVideoPlayBack = () => {
    var vid1 = document.getElementById("video1");
    var vid2 = document.getElementById("video2");
     vid1.pause();
     vid2.pause();
  };



  render(){
    // console.log("xmodalstate", this.state);
    console.log("state", this.state)
    const { openModal, x0, x1, x2, x3, x4, x5, x6, x7, selectedImage } = this.props;

    const videoStyle = {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      margin: "0 auto",
      zIndex: 5
    }

    
    return(
      <div>
        <Modal className="xfinity-modal" isOpen={this.props.xfinityModal}>
        <div className="xfinity-modal--header">
          <div className="xfinity-modal--header_text">Gallery</div>
          <button className="xfinity-modal--header_close" onClick={openModal}>X</button>
        </div>
      
        

        

          <Carousel infiniteLoop={true} onChange={this.stopVideoPlayBack} selectedItem={selectedImage} showThumbs={false} showIndicators={false} showStatus>
            <div>
              <video id="video1" controls poster={x0}>
                <source src={video1} style={videoStyle} />
              </video>
            </div>
            <div>
              <video id="video2" controls poster={x1}>
                <source src={video2} style={videoStyle} />
              </video>
            </div>


            <div>
              <img src={x2} alt="2019 Supra Xfinity Sereis Race Car"/>
              <p className="legend">2019 Supra Xfinity Sereis Race Car -- Front View</p>
            </div>
            <div>
              <img src={x3} alt="2019 Supra Xfinity Sereis Race Car"/>
              <p className="legend">2019 Supra Xfinity Sereis Race Car -- Side View</p>
            </div>
            <div>
              <img src={x4} alt="2019 Supra Xfinity Sereis Race Car"/>
              <p className="legend">2019 Supra Xfinity Sereis Race Car -- Side Rear View</p>
            </div>
            <div>
              <img src={x5} alt="2019 Supra Xfinity Sereis Race Car"/>
              <p className="legend">2019 Supra Xfinity Sereis Race Car -- Side Front View</p>
            </div>
            <div>
              <img src={x6} alt="2019 Supra Xfinity Sereis Race Car"/>
              <p className="legend">2019 Supra Xfinity Sereis Race Car -- Exhaust, Undercarriage</p>
            </div>
            <div>
              <img src={x7} alt="2019 Supra Xfinity Sereis Race Car"/>
              <p className="legend">2019 Supra Xfinity Sereis Race Car -- Front Tease(Covered)</p>
            </div>
          </Carousel>
        </Modal>
      </div>
    )
  }
}

export default XfinityModal;
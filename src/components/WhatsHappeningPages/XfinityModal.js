import React from "react";
import Modal from "react-modal";

// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class XfinityModal extends React.Component{

  componentDidMount(){
    Modal.setAppElement("body");
  };

  render(){
    const { openModal, x2, x3, x4, x5, x6, x7, selectedImage } = this.props;

    const iframeStyle = {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      margin: "0 auto"
    }
    
    return(
      <div>
        <Modal className="xfinity-modal" isOpen={this.props.xfinityModal}>
        <div className="xfinity-modal--header">
          <div className="xfinity-modal--header_text">Gallery</div>
          <button className="xfinity-modal--header_close" onClick={openModal}>X</button>
        </div>
      
          <Carousel infiniteLoop={true} selectedItem={selectedImage} showThumbs={false}>
            <div>
              <iframe className="xtest" style={iframeStyle} title="movie" src="https://www.youtube.com/embed/Rsduz8WShPo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div>
              <iframe title="movie" style={iframeStyle} src="https://www.youtube.com/embed/6PD-5cCecwo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
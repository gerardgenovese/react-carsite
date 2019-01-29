import React from "react";

import Footer from "./Footer";

import image0 from "../relativeImages/gallery/camry/camry1.jpg"
import image1 from "../relativeImages/gallery/camry/camry2.jpg"
import image2 from "../relativeImages/gallery/camry/camry3.jpg"
import image3 from "../relativeImages/gallery/camry/camry4.jpg"
import image4 from "../relativeImages/gallery/camry/camry5.jpg"
import image5 from "../relativeImages/gallery/camry/camry6.jpg"
import image6 from "../relativeImages/gallery/camry/camry7.jpg"

import Modal from "react-modal";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class BuildCarGallery extends React.Component{

  state = {
    galleryModal: false,
    selectedImage: null
  
  }


  changeImageCar = (img) => {
    return img.replace(/camry|86|corolla|avalon|yaris/gi, this.props.car)
  };




  componentDidMount = () => {
    Modal.setAppElement("body");
  };



  openModal = (e) => {
    console.log(e.target.getAttribute("data-type"))
    const image = parseInt(e.target.getAttribute("data-type"));
    this.setState({ selectedImage: image })
    setTimeout(() => {
      this.setState({ galleryModal: !this.state.galleryModal })
    },100);

  }



  render(){
   console.log("props", this.props.car)

    return(

      <div>


    
          <h1 className="gallery-header">Toyota {this.props.car} Image Gallery</h1>



              <div className="gallery-flex">
  
            
                <div className="gallery-imgContain" >
                  <div className="gallery-filter" data-type="0"
                  onClick={this.openModal}></div>
                  <img className="gallery-img" src={this.changeImageCar(image0)} alt={this.props.car} />
                </div>
                <div className="gallery-imgContain">
                  <div className="gallery-filter" data-type="1" onClick={this.openModal}></div>
                  <img className="gallery-img" src={this.changeImageCar(image1)} alt={this.props.car} />
                </div>
                <div className="gallery-imgContain">
                  <div className="gallery-filter" data-type="2" onClick={this.openModal}></div>
                  <img className="gallery-img" src={this.changeImageCar(image2)} alt={this.props.car} />
                </div>
                <div className="gallery-imgContain">
                  <div className="gallery-filter" data-type="3" onClick={this.openModal}></div>
                  <img className="gallery-img" src={this.changeImageCar(image3)} alt={this.props.car} />
                </div>
                <div className="gallery-imgContain">
                  <div className="gallery-filter" data-type="4" onClick={this.openModal}></div>
                  <img className="gallery-img" src={this.changeImageCar(image4)} alt={this.props.car} />
                </div>
                <div className="gallery-imgContain">
                  <div className="gallery-filter" data-type="5" onClick={this.openModal}></div>
                  <img className="gallery-img" src={this.changeImageCar(image5)} alt={this.props.car} />
                </div>
                <div className="gallery-imgContain">
                  <div className="gallery-filter" data-type="6" onClick={this.openModal}></div>
                  <img className="gallery-img" src={this.changeImageCar(image6)} alt={this.props.car} />
                </div>
              </div>



              <Modal className="xfinity-modal gallery-modal" isOpen={this.state.galleryModal}>
              <div className="xfinity-modal--header">
                <div className="xfinity-modal--header_text">Toyota {this.props.car} Image Gallery</div>
                <button className="xfinity-modal--header_close" onClick={this.openModal}>X</button>
              </div>
                <Carousel className="gallery-test" infiniteLoop={true} selectedItem={this.state.selectedImage} showThumbs={false} showIndicators={false} showStatus={false}>
        


                  <div  className="gallery-modal--img">
                    <img src={image0} alt="2019 Supra Xfinity Sereis Race Car"/>
                   
                  </div>
                  <div  className="gallery-modal--img">
                    <img src={image1} alt="2019 Supra Xfinity Sereis Race Car"/>
                
                  </div>
                  <div  className="gallery-modal--img">
                    <img src={image2} alt="2019 Supra Xfinity Sereis Race Car"/>
            
                  </div>
                  <div  className="gallery-modal--img">
                    <img src={image3} alt="2019 Supra Xfinity Sereis Race Car"/>
                 
                  </div>
                  <div  className="gallery-modal--img">
                    <img src={image4} alt="2019 Supra Xfinity Sereis Race Car"/>
               
                  </div>
                  <div  className="gallery-modal--img">
                    <img src={image5} alt="2019 Supra Xfinity Sereis Race Car"/>
                   
                  </div>
                  <div  className="gallery-modal--img">
                    <img src={image6} alt="2019 Supra Xfinity Sereis Race Car"/>
            
                  </div>
                </Carousel>

               



              </Modal>






























        <Footer />

      </div>

     
    )
  }
}

export default BuildCarGallery;
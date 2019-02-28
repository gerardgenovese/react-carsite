import React from "react";
import { connect } from "react-redux";
import { buildCar } from "../redux/actions";
import SlideShowModal from "./SlideShowModal";


// import avalon from "../relativeImages/slideshow/avalonSlide.png";
// import camry from "../relativeImages/slideshow/camrySlide.png";
// import corolla from "../relativeImages/slideshow/corollaSlide.png";
// import background from "../relativeImages/slideshow/background.jpg";

class SlideShow extends React.Component{
  state ={
    carInfo: [],
    carBackground: [],
    slideIndex: 0,
    slideShow: [],
    models: [],
    prices: [],
    perMonth: [],
    signing: [],
    carModal: false
  } 

  //takes in props from redux store which will populate all fields so we can then save to state and use
  componentWillMount(){
    const carInfo = [];
    const carBackground = [];
    const images = [];
    const models = []
    const prices = [];
    const perMonth = [];
    const signing = [];

    this.props.slideShow.forEach(car => {
      carInfo.push(car);
      carBackground.push(car.background);
      images.push(car.img);
      models.push(car.model);
      prices.push(car.price);
      perMonth.push(car.perMonth);
      signing.push(car.signing);
    })
    this.setState({ 
      carInfo,
      carBackground,
      slideShow: images,
      models: models,
      prices: prices,
      perMonth,
      signing,
    })
    this.createSlideShowInterval();
  };

  //create and interval for our slideshow
  createSlideShowInterval = () => this.slideShow = setInterval(() => this.startSlideShow(), 5000);

  //keeps track of our slideshow index to rotate through show slides
  startSlideShow = () => {
    const { slideIndex, slideShow} = this.state;
    slideIndex >= slideShow.length - 1 ? this.setState({ slideIndex: 0 }) : this.setState((prev) => ({ slideIndex: prev.slideIndex + 1}));
  };

  //when called clear the interval for the slideshow and show the model. This will ensure the slideshow doesn't run while the modal is open.
  stopSlideShowAndGetModal = () => {
    console.log("unmount slideshow")
    this.setState({ carModal: true })
    clearInterval(this.slideShow);
  }

  //unsubscribe from the interval when unmounted so we don't have any memory leaks
  componentWillUnmount(){clearInterval(this.slideShow);}

  //next  & prev slideshow buttons
  next = () => {
    if(this.state.slideIndex >= this.state.slideShow.length - 1){
      this.setState({ slideIndex: 0})
    } else {
      this.setState((prevState) => {
        return{
          slideIndex: prevState.slideIndex + 1
        }
      });
    }
  };

  prev = () => {
    if(this.state.slideIndex < 1){
      this.setState({ slideIndex: this.state.slideShow.length - 1})
    } else {
      this.setState((prevState) => {
        return{
          slideIndex: prevState.slideIndex - 1
        }
      });
    }
  };

  //gets the car 
  // getCarFromSlideShow = () => this.setState({ carModal: true, isSlideShow: false });


  closeModal = () => {
    this.setState({ carModal: false })
  };

  //renders a header for each car at index 
  getHeader(){
    const header = 
    [
      "You've got the wheel",
      `The All New ${this.state.models[this.state.slideIndex]}`,
      "Pack Leading Capability",
      "Turn every drive into an adventure"
    ];

    return header[this.state.slideIndex];
  };

  //renders a phrase for each car at index
  getPhrase(){
    const phrase = 
    [
      "Luxury that's affordable",
      "Equipped for featurs like standard Toyota defense",
      "Everyday deserves more adventure",
      "Comfort with excitment"
    ];

    return phrase[this.state.slideIndex];
  };


  render(){
    // console.log("state", this.state);
    const dollarSign = { fontFamily: "helvetica",fontSize: "1.5rem" };
    const backgroundImages = { backgroundImage: `url(${this.state.carBackground[this.state.slideIndex]})`};
  
    return(
      <div className="slideshow">
        <div key={this.state.slideIndex} className="slideshow-bg" style={backgroundImages}>
          <div key={this.state.slideIndex} className="slideshow-container">
            <div className="slideshow-padding">
              <div className="slideshow-title">
                <div className="">2019 &nbsp; </div>
                <div className="slideshow-title--car">{this.state.models[this.state.slideIndex]}</div>
              </div>
              <div className="slideshow-header">{this.getHeader()}</div>
                <p className="slideshow-misc">{this.getPhrase()}</p>
              <div className="slideshow-flex">
                <div className="slideshow-flex--box">
                  <p className="slideshow-details"><sup style={dollarSign}>$</sup>{this.state.perMonth[this.state.slideIndex]}</p>
                  <p className="slideshow-text">Per Month</p>
                </div>
                <p className="slideshow-text">for</p>
                <div className="slideshow-flex--box">
                  <p className="slideshow-details"> 36 </p>
                  <p className="slideshow-text">Months</p>
                </div>
                <div className="slideshow-flex--box">
                  <p className="slideshow-details"><sup style={dollarSign}>$</sup>{this.state.signing[this.state.slideIndex]}</p>
                  <p className="slideshow-text">Due At Signing</p>
                </div>
              </div>
              {/* <button className="slideshow-button" onClick={this.stopSlideShowAndGetModal}>Learn More</button>   */}
              <div className="slideshow-button" onClick={this.stopSlideShowAndGetModal}>
                <button className="slideshow-button--main"></button>
                <div className="slideshow-button--text">Learn More</div>
              </div>
              {/*media query only shows at 768px*/}
              <SlideShowModal carModal={this.state.carModal} carInfo={this.state.carInfo[this.state.slideIndex]} closeModal={this.closeModal} startSlideShowAgain={this.createSlideShowInterval} buildCar={this.props.buildCar}/>         
            </div>
          </div>
          <img key={this.state.slideShow[this.state.slideIndex]} className="slideshow-img" src={this.state.slideShow[this.state.slideIndex]} alt="car" />  
          <button className="slideshow-prev" onClick={this.prev}> <i className="fas fa-arrow-left"></i></button>
          <button className="slideshow-next" onClick={this.next}> <i className="fas fa-arrow-right"></i></button>  
        </div>

          {/* media query only shows at 768px */}
        <div className="slideshow-mqContain">
          <div className="slideshow-title slideshow-title-mq">
            <div className=""> GET YOUR 2019&nbsp;</div>
            <div className="slideshow-title--car">{this.state.models[this.state.slideIndex]} </div>
            <div>&nbsp;FOR</div>
          </div>
          <div className="slideshow-flex">
            <div className="slideshow-flex--box">
              <p className="slideshow-details slideshow-details-mq"><sup style={dollarSign}>$</sup>{this.state.perMonth[this.state.slideIndex]}</p>
              <p className="slideshow-text">Per Month</p>
            </div>
            <p className="slideshow-text">for</p>
            <div className="slideshow-flex--box">
              <p className="slideshow-details"> 36 </p>
              <p className="slideshow-text">Months</p>
            </div>
            <div className="slideshow-flex--box">
              <p className="slideshow-details"><sup style={dollarSign}>$</sup>{this.state.signing[this.state.slideIndex]}</p>
              <p className="slideshow-text">Due At Signing</p>
            </div>
          </div>
          <div className="slideshow-button slideshow-button-mq" onClick={this.stopSlideShowAndGetModal}>
            <button className="slideshow-button--main slideshow--main-mq"></button>
            <div className="slideshow-button--text slideshow--text-mq">Learn More</div>
          </div>
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    slideShow: state.slideShow
  }
};

export default connect(mapStateToProps,{
  buildCar
})(SlideShow);
import React from "react";
import { connect } from "react-redux";
import SlideShowModal from "./SlideShowModal";
// import { url } from "inspector";

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
    titles: [],
    prices: [],
    perMonth: [],
    signing: [],
    carModal: false
  } 

  componentWillMount(){
    const carInfo = [];
    const carBackground = [];
    const images = [];
    const titles = []
    const prices = [];
    const perMonth = [];
    const signing = [];

    this.props.slideShow.forEach(car => {
      carInfo.push(car);
      carBackground.push(car.background);
      images.push(car.img);
      titles.push(car.title);
      prices.push(car.price);
      perMonth.push(car.perMonth);
      signing.push(car.signing);
    });
    this.setState({ 
      carInfo,
      carBackground,
      slideShow: images,
      titles: titles,
      prices: prices,
      perMonth,
      signing,
    })


    // setInterval(() => {
    //   if(this.state.slideIndex > this.state.slideShow.length - 2){
    //     this.setState({ slideIndex: 0 })
    //   } else {
    //     this.setState((prevState) => {
    //       return {
    //         slideIndex: prevState.slideIndex + 1,
    //       }
    //     });
    //   }
    // },5000)


    // console.log("will");
  
    this.createSlideShowInterval();

  };

  // componentDidMount(){
  //   this.createSlideShowInterval();
  // }


// componentDidMount() {
//   console.log("didmount")
//   this.timerID = setInterval(() => this.startSlideShow(),2000);
// }

  createSlideShowInterval = () => {
    // console.log("create interval")
    this.slideShow = setInterval(() => this.startSlideShow(), 5000);
  }


  startSlideShow = () =>{
    // console.log("new slide");

    if(this.state.slideIndex > this.state.slideShow.length - 2){
      this.setState({ slideIndex: 0 })
    } else {
        this.setState((prevState) => {
          return {
            slideIndex: prevState.slideIndex + 1,
          }
        });
      }
  }

  stopSlideShowAndGetModal = () => {
    console.log("unmount slideshow")
    this.setState({ carModal: true })
    clearInterval(this.slideShow);
  }


  componentWillUnmount(){
    clearInterval(this.slideShow);
  }


  next = () => {
    if(this.state.slideIndex > this.state.slideShow.length - 2){
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

  getCarFromSlideShow = () => {
    this.setState({ carModal: true, isSlideShow: false })
    console.log("getcarfromslideshow",this.state.carInfo[this.state.slideIndex])

  };


  closeModal = () => {
    this.setState({ carModal: false })
  };

  getHeader(){

    const header = 
    [
      "You've got the wheel",
      `The All New ${this.state.titles[this.state.slideIndex]}`,
      "Pack Leading Capability",
      "Turn every drive into an adventure"
    ];

    return header[this.state.slideIndex];
  }
  getPhrase(){

    const phrase = 
    [
      "Luxury that's affordable",
      "Equipped for featurs like standard Toyota defense",
      "Everyday deserves more adventure",
      "Comfort with excitment"
    ];

    return phrase[this.state.slideIndex];
  }


  render(){
    // console.log("state", this.state);

    const dollarSign = {
      fontFamily: "helvetica",
      fontSize: "1.5rem"
    }

    const backgroundImages = {
      backgroundImage: `url(${this.state.carBackground[this.state.slideIndex]})`
    }
  
    return(
      <div className="slideshow">
     
        <div key={this.state.slideIndex} className="slideshow-bg" style={backgroundImages}>
        
      
            <div key={this.state.slideIndex} className="slideshow-container">
              <div className="slideshow-padding">
                <div className="slideshow-title">
                  <div className="">2019 &nbsp; </div>
                  <div className="slideshow-title--car">{this.state.titles[this.state.slideIndex]}</div>
                </div>
                <div className="slideshow-header">{this.getHeader()}</div>
                  <p className="slideshow-misc">{this.getPhrase()}</p>
                <div className="slideshow-flex">
                  <div className="slideshow-flex-box">
                    <p className="slideshow-details"><sup style={dollarSign}>$</sup>{this.state.perMonth[this.state.slideIndex]}</p>
                    <p className="slideshow-text">Per Month</p>
                  </div>
                  <p className="slideshow-text">for</p>
                  <div className="slideshow-flex-box">
                    <p className="slideshow-details"> 36 </p>
                    <p className="slideshow-text">Months</p>
                  </div>
                  <div className="slideshow-flex-box">
                    <p className="slideshow-details"><sup style={dollarSign}>$</sup>{this.state.signing[this.state.slideIndex]}</p>
                    <p className="slideshow-text">Due At Signing</p>
                  </div>
                </div>
                <button className="slideshow-button" onClick={this.stopSlideShowAndGetModal}>Learn More</button>  
                <SlideShowModal carModal={this.state.carModal} carInfo={this.state.carInfo[this.state.slideIndex]} closeModal={this.closeModal} startSlideShowAgain={this.createSlideShowInterval}/>         
              </div>
            </div>

            <img key={this.state.slideShow[this.state.slideIndex]} className="slideshow-img" src={this.state.slideShow[this.state.slideIndex]} alt="car" />  

         


            
              <button className="slideshow-prev" onClick={this.prev}> <i className="fas fa-arrow-left"></i></button>
              <button className="slideshow-next" onClick={this.next}> <i className="fas fa-arrow-right"></i></button>  
            
        

        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    slideShow: state.slideShow
  }
}
export default connect(mapStateToProps)(SlideShow);
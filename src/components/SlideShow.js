import React from "react";
import { connect } from "react-redux";

// import avalon from "../relativeImages/slideshow/avalonSlide.png";
// import camry from "../relativeImages/slideshow/camrySlide.png";
// import corolla from "../relativeImages/slideshow/corollaSlide.png";

class SlideShow extends React.Component{
  state ={
    slideIndex: 0,
    slideShow: [],
    titles: [],
    prices: [],
    perMonth: [],
    signing: []
   }

  componentWillMount(){

    const images = [];
    const titles = []
    const prices = [];
    const perMonth = [];
    const signing = [];

    this.props.slideShow.forEach(car => {
      images.push(car.img);
      titles.push(car.title);
      prices.push(car.price);
      perMonth.push(car.perMonth);
      signing.push(car.signing);
    });
    this.setState({ 
      slideShow: images,
      titles: titles,
      prices: prices,
      perMonth,
      signing
    })


    setInterval(() => {
      if(this.state.slideIndex > this.state.slideShow.length - 2){
        this.setState({ slideIndex: 0 })
      } else {
        this.setState((prevState) => {
          return {
            slideIndex: prevState.slideIndex + 1,
          }
        });
      }
    },5000)
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

  render(){
    console.log("props", this.props.toyotathon);
    console.log("state", this.state);
    return(
      <div className="slideshow">
        <div className="slideshow-bg">
          <div key={this.state.slideIndex} className="slideshow-container">
            <div className="slideshow-header">Toyotathon is on!</div>
              <p className="slideshow-misc">5 days left</p>
            <div className="slideshow-title">2019 {this.state.titles[this.state.slideIndex]}</div>
            <div className="slideshow-flex">
              <div className="slideshow-flex-box">
                <p className="slideshow-details">${this.state.perMonth[this.state.slideIndex]}</p>
                <p className="slideshow-text">Per Month</p>
              </div>
              <p className="slideshow-text">for</p>
              <div className="slideshow-flex-box">
                <p className="slideshow-details"> 36 </p>
                <p className="slideshow-text">Months</p>
              </div>
              <div className="slideshow-flex-box">
                <p className="slideshow-details">${this.state.signing[this.state.slideIndex]}</p>
                <p className="slideshow-text">Due At Signing</p>
              </div>
            </div>
            <button className="slideshow-button">Learn More</button>           
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
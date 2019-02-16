import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

class SlideShowModal extends React.Component{

  componentDidMount(){
    Modal.setAppElement("body");
  };

  run = () => {
    this.props.closeModal();
    this.props.startSlideShowAgain();
  };

  buildCarSelected = (e) => {
    //slideshowreducer brings in a new image for the slideshow but we want the generic image to appear on the buildcarpage. So we rebuild the object with all props and replace the img from the slideshow with the buildCarImg prop that is holding the generic img of our car  in our slideshowreducer object.
    const replaceCarImageForBuildPage = {
      title: this.props.carInfo.title, 
      img: this.props.carInfo.buildCarImg,
      carAngle: 0,
      color:this.props.carInfo.color,
      engine: 0,
      price: this.props.carInfo.price,
      miles: this.props.carInfo.miles,


      buildCarImg: "/images/avalon/sidefront/blue.jpg"
    };

    this.props.buildCar(replaceCarImageForBuildPage);
  };

  render(){
    // console.log("modal props", this.props.carInfo);

    const { carModal, carInfo } = this.props;

    return(

      <Modal className="modal" isOpen={carModal} onRequestClose={this.props.closeModal}>
        <div className="modal-header">
          <div className="modal-header--text">Regional Offer Details</div>
          <button className="modal-header--close" onClick={this.run}>X</button>
        </div>
        <div className="modal-main">
          <div className="modal-main--info">
            <div className="modal-main--lease">Lease</div>
            <div className="modal-main--title">2018 {carInfo.title.toUpperCase()}</div>
            <div className="modal-main--spec">LE</div>
            <div className="modal-main--exp">Exp 1/02/2019</div>
          </div>
          <div className="">
            <img className="modal-main--img" src={carInfo.img} alt={carInfo.title} />
          </div>
        </div>


        <div className="modal-pricing">
          <div className="modal-pricing--flex">
            <div className="modal-pricing--container">
              <div className="modal-pricing--cash">${carInfo.perMonth}</div>
              <div className="modal-pricing--details">per mos/36Mos</div>
            </div>
            <div className="modal-pricing--container2">
              <div className="modal-pricing--cash">${carInfo.signing}</div>
              <div className="modal-pricing--details">due at signing</div>
            </div>
          </div>
          <div className="modal-pricing-button">
            <button className="modal-pricing-button--main"></button>
            <div className="modal-pricing-button--text">Request A Quote</div>
          </div>
        </div>

        <div className="modal-offer">
          <div className="modal-offer--container1">
            <div className="modal-offer--text">
              Lease a 2018 {carInfo.title} for ${carInfo.perMonth} for 36 Months. (Includes 12000 miles per year for the Lease Term of 36 months)
            </div>
          </div>
          <div className="modal-offer--container2">
       
            <div className="modal-offer-button">
              {/* <Link to="/toyota/car/inventory" className="modal-offer-button--main"></Link> */}
              <Link to={{ pathname: "/toyota/car/inventory", state: {title: carInfo.title, price:carInfo.price} }} className="modal-offer-button--main"></Link>
              <div className="modal-offer-button--text">Search Inventory</div> 
            </div>
            <div className="modal-offer-button">
              <Link to={`/build/${carInfo.title}`} onClick={this.buildCarSelected} className="modal-offer-button--main"></Link>
              <div className="modal-offer-button--text">Build Yours</div>
            </div>
          </div>
        </div>




        <div className="modal-finePrint">
          <div className="modal-finePrint--header">Offer Details</div>
          <div>
          Lease a new 2018 {carInfo.title} for ${carInfo.perMonth} a month for 36 with ${carInfo.signing} due at signing, Total MSRP including freight is ${carInfo.price + carInfo.perMonth + carInfo.signing}. Monthly payments of ${carInfo.perMonth} x 36 months, totals ${carInfo.perMonth * 36}. Capitalized cost of ${carInfo.perMonth * 36 + carInfo.signing} based on down payment and dealer participation which may vary by dealer. Lease-end purchase option is $14224. $350 disposition fee due at lease end unless customer purchases vehicle or decides to re-finance through Toyota Financial Services. Lease does not include taxes, license, title fees, acquisition fee of $650, insurance, regionally required equipment and other dealers’ charges are extra and not included in the amounts shown. Closed-end lease. Payment may vary depending upon final transaction price. Customer responsible for maintenance, excess wear and tear and $.15 per mile over 12,000 miles per year. To qualified Tier 1+ customers through Toyota Financial Services. Must take retail delivery by 01-02-2019. Does not include College Grad or Military Rebate. $2250 Lease Subvention Cash provided by Toyota Financial Service to eligible customers who finance a new, unused or unlicensed 2018 RAV4 model #2018-4432. Offer ends 01-02-2019. *Covers normal factory scheduled service. Plan is 2 years or 25K miles, whichever comes first. The new Toyota vehicle cannot be part of a rental or commercial fleet, or a livery or taxi vehicle. See plan for complete coverage details. See participating Toyota dealer for details. Valid only in the continental United States and Alaska. http://www.toyota.com/toyota-care/
          </div>
        </div>
      </Modal>
   

    )
  }
}




export default SlideShowModal;
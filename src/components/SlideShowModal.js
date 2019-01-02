import React from "react";
import Modal from "react-modal";

class SlideShowModal extends React.Component{

  componentDidMount(){
    Modal.setAppElement("body");
  };

 run = () => {
   this.props.closeModal();
   this.props.startSlideShowAgain();
 };

  render(){
    console.log("modal props", this.props.carInfo);
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
          <div className="modal-pricing--cost">
            <div className="modal-pricing--cost_container modal-pricing--cost_container-first">
              <div className="modal-pricing--cash">${carInfo.perMonth}</div>
                <div className="modal-pricing--perMonth">per mos/36Mos</div>
            </div>
            <div className="modal-pricing--cost_container">
              <div className="modal-pricing--cash">${carInfo.signing}</div>
              <div className="modal-pricing--signing">due at signing</div>
            </div>
          </div>
          <div className="modal-pricing--button"> 
            <button className="modal-pricing--button_quote">&nbsp;request a quote</button>
          </div>
        </div>

        <div className="modal-details">
          <div className="modal-details--text">
          Lease a 2018 {carInfo.title} for ${carInfo.perMonth} for 36 Months. (Includes 12000 miles per year for the Lease Term of 36 months)
          </div>
          <div className="modal-details--buttons">
            <button className="modal-details--buttons_search">search inventory</button>
            <button className="modal-details--buttons_build">build yours</button>
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
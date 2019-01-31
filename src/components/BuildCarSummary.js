import React from "react";
import { connect } from "react-redux";

import Footer from "./Footer";

class BuildCarSummary extends React.Component{


engineChoice() {
  if(this.props.purchase.engineOne){
    return (
      <div>
        2.5 4-Cyl. Super Thruster Engine 8-Speed Automatic
      </div>
    )
  } else {
    return (
      <div>
        2.5 4-Cyl. Super Thrust Engine 8-Speed Manual
      </div>
    )
  }
}

  render(){
    console.log("props", this.props.purchase)

    const { title, price, color, cargoTote, leatherMats, wheelLocks, totalPrice } = this.props.purchase;
    return(
      <div>
          <h1 className="summary-header">&nbsp;</h1>
        <div className="summary-contain">
          <div className="summary-wrapper">
        
            <div className="summary-title">
              2019 Toyota {title.toUpperCase()}
            </div>
            <div className="summary-engine">
              {this.engineChoice()}
            </div>

          
            <div className="summary-flex">
              <div className="summary-desc">
                Starting MSRP
              </div>
              <div className="border"></div>
              <div className="summary-desc--info">
                {price}
              </div>
            
            </div>
        

            <div className="summary-flex">
              <div className="summary-desc">
                Exterior Color
              </div>
              <div className="border"></div>
              <div className="summary-desc--info">
                {color}
              </div>
            </div>
            
            <div className="summary-desc">
              Accessories
            </div>

            <div className="summary-flex">
              <div className="summary-desc">
                Cargo Tote
              </div>
              <div className="border"></div>
              <div className="summary-desc--info">
                {cargoTote}
              </div>
            </div>
            <div className="summary-flex">
              <div className="summary-desc">
                Leather Mats
              </div>
              <div className="border"></div>
              <div className="summary-desc--info">
                {leatherMats}
              </div>
            </div>
            <div className="summary-flex">
              <div className="summary-desc">
                Wheel Locks
              </div>
              <div className="border"></div>
              <div className="summary-desc--info">
                {wheelLocks}
              </div>
            </div>

            <div className="summary-flex">
              <div className="summary-desc">
                Total Price
              </div>
              <div className="border"></div>
              <div className="summary-desc--info">
                {totalPrice}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    purchase: state.purchaseSelections
  }
};

export default connect(mapStateToProps)(BuildCarSummary);
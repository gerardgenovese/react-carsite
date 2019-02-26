import React from "react";
import { connect } from "react-redux";
import Footer from "./Footer";

import { Capitalize, CarPriceToString } from "./Functions";

class BuildCarSummary extends React.Component{
  state={
    engineOne : true,
    loading: true
  };

  //changes our state which will allow a loading animation to play for 500ms
  componentDidMount(){
    setTimeout(() => { this.setState({ loading: false }) }, 500);
  };

  //shows the correct engine choice in our jsx
  engineChoice() {
    return this.props.purchase.engineOne === true ? <div>2.5 4-Cyl. Super Thruster Engine 8-Speed Automatic</div> : <div>2.5 4-Cyl. Super Thrust Engine 8-Speed Manual</div>
  };

  render(){
    // console.log("props", this.props.purchase)
    const { model, color, cargoTote, leatherMats, wheelLocks, totalPrice } = this.props.purchase;
    const container = { height: "40vh" };

    return(
      <div>
        {
          this.state.loading ? <div style={container}><div className="finance-loading"></div></div> :
          <div>
              {/* <h1 className="summary-header">&nbsp;</h1> */}
              <div className="summary-contain">
                <div className="summary-wrapper">
              
                  <div className="summary-title">
                    2019 Toyota {Capitalize(model)}
                  </div>
                  <div className="summary-engineFlex">
                    <div className="summary-engine">
                      {this.engineChoice()}
                    </div>
                    <div className="summary-desc--info">
                      {this.props.purchase.engineOne ? "0" : "$500.00"}
                    </div>
                  </div>
                  <div className="summary-flex">
                    <div className="summary-desc">
                      Starting MSRP
                    </div>
                    <div className="border"></div>
                    <div className="summary-desc--info">
                      { CarPriceToString(this.props.purchase.price) }
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
                  <div className="summary-acc">
                    <div className="summary-acc--text">Accessories</div>
                  </div>
                  <div className="summary-flex">
                    <div className="summary-desc">
                      Cargo Tote
                    </div>
                    <div className="border"></div>
                    <div className="summary-desc--info">
                      {cargoTote === 0 ? "0" : "$75.00"}
                    </div>
                  </div>
                  <div className="summary-flex">
                    <div className="summary-desc">
                      Leather Mats
                    </div>
                    <div className="border"></div>
                    <div className="summary-desc--info">
                    {leatherMats === 0 ? "0" : "$75.00"}
                    </div>
                  </div>
                  <div className="summary-flex">
                    <div className="summary-desc">
                      Wheel Locks
                    </div>
                    <div className="border"></div>
                    <div className="summary-desc--info">
                    {wheelLocks === 0 ? "0" : "$75.00"}
                    </div>
                  </div>
                  <div className="summary-flex">
                    <div className="summary-desc">
                      Total Price
                    </div>
                    <div className="border"></div>
                    <div className="summary-desc--info">
                      { CarPriceToString(totalPrice) }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          } 
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
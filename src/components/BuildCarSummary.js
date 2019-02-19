import React from "react";
import { connect } from "react-redux";

import Footer from "./Footer";

class BuildCarSummary extends React.Component{


  state={
    engineOne : true,
    loading: true
  };

  componentDidMount(){
    setTimeout(() => {
      this.setState({ loading: false })
    },500);
  }


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

  getCarTotalString = (price) => {
    return this.props.getTotalString(price)
  };

  getPriceString = () => {

    if(this.props.purchase.price === undefined){
      return '25000'
    }
    let price = this.props.purchase.price;
    let priceString = price.toString();

    let first = priceString.slice(0,2);
    let second = priceString.slice(2);

    return <div>${first},{second}</div>
  };


  render(){
    console.log("props", this.props.purchase)

    const { model, color, totalPrice } = this.props.purchase;

    const container = {
      height: "40vh"
    };
    return(
      <div>

        {
          this.state.loading ? <div style={container}><div className="finance-loading"></div></div> :

          <div>

              <h1 className="summary-header">&nbsp;</h1>
              <div className="summary-contain">
                <div className="summary-wrapper">
              
                  <div className="summary-title">
                    2019 Toyota {model}
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
                      {this.getPriceString()}
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
                      {this.props.purchase.cargoTote === 0 ? "0" : "$75.00"}
                    </div>
                  </div>
                  <div className="summary-flex">
                    <div className="summary-desc">
                      Leather Mats
                    </div>
                    <div className="border"></div>
                    <div className="summary-desc--info">
                    {this.props.purchase.leatherMats === 0 ? "0" : "$75.00"}
                    </div>
                  </div>
                  <div className="summary-flex">
                    <div className="summary-desc">
                      Wheel Locks
                    </div>
                    <div className="border"></div>
                    <div className="summary-desc--info">
                    {this.props.purchase.wheelLocks === 0 ? "0" : "$75.00"}
                    </div>
                  </div>

                  <div className="summary-flex">
                    <div className="summary-desc">
                      Total Price
                    </div>
                    <div className="border"></div>
                    <div className="summary-desc--info">
                      {this.getCarTotalString(totalPrice)}
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
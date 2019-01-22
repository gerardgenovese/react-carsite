import React from "react";
import Footer from "../Footer";
import ToyotaCareModal from "./ToyotaCareModal";
import imgHeader from "../../relativeImages/whatshappeningpages/toyotacare/tcareheader.jpg";
import img1 from "../../relativeImages/whatshappeningpages/toyotacare/tcare1.jpg";
import img2 from "../../relativeImages/whatshappeningpages/toyotacare/tcare2.jpg";

class ToyotaCare extends React.Component {

  state = {
    toyotaCareModal: false
  }


  openModal = () => {
    this.setState({ toyotaCareModal: true })
  }

  closeModal = () => {
    this.setState({ toyotaCareModal: false })
  };


  render(){
    return(
      <div>



        <div className="tcare-center">
          <img className="tcare-img" src={imgHeader} alt="Toyota Care" onClick={this.openModal}/>
        </div>

        <ToyotaCareModal toyotaCareModal={this.state.toyotaCareModal} closeModal={this.closeModal} />       


        <div>
          <div className="tcare-header">
            Toyotacare
          </div>
          <div>
            <div className="tcare-header--2">
              Peace of Mind everywhere you go.
            </div>
            <div className="tcare-content">
              <div>
                Toyota is devoted to safety and dependability, and proper vehicle maintenance is important to both. That's why we include a no cost maintenance plan with the purchase or lease of every new Toyota for 2 years or 25,000 miles, whichever comes first. 24-hour roadside assistance is also included for 2 years and unlimited miles.
                Welcome to the ToyotaCare advantage.
              </div>
              <br />
              <div className="tcare-main--italic">
                *ToyotaCare covers normal factory scheduled maintenance for 2 years or 25,000 miles, whichever comes first. 24-hour roadside assistance is also included for 2 years, regardless of mileage. See Toyota dealer for details and exclusions. Valid only in the continental U.S. and Alaska.
              </div>
            </div>
          </div>
          <div className="tcare-flexButton">
            <div className="tcare-maint-button">
              <button className="tcare-maint-button--main"></button>
              <div className="tcare-maint-button--text">DownLoad Brochure</div>
            </div>
            <div className="tcare-find-button">
              <button className="tcare-find-button--main"></button>
              <div className="tcare-find-button--text">Find a Dealer</div>
            </div>
          </div>

          <div className="tcare-info--flex">
            <div className="tcare-info">
              <div>
                <img className="tcare-info--img" src={img1} alt="No Cost" />
              </div>
              <div className="tcare-info--header">
                No Cost Maintenance Plan
              </div>
              <div className="tcare-info--header2">
                We'll Make it Easy To Take Care Of Your Toyota.
              </div>
              <div className="tcare-info--main">
                Toyota-trained technicians will help keep your Toyota a Toyota by completing factory recommended maintenance, while keeping a complete history of your service visits. Toyota will also deliver timely reminders before your scheduled maintenance.
              </div>
              <div className="tcare-info--include">
                ToyotaCare Recommended Services Include:
              </div>
              <div className="tcare-info--include_li">
                <li>Replace engine oil and oil filter <sup>28</sup></li>
                <li>Rotate tires</li>
                <li>Multi-point vehicle inspection</li>
                <li>Inspect and adjust all fluid levels</li>
              </div>
            </div>
            <div className="tcare-info">
              <div>
                <img className="tcare-info--img" src={img2} alt="No Cost" />
              </div>
              <div className="tcare-info--header">
                24-Hour Roadside Assistance
              </div>
              <div className="tcare-info--header2">
                We Can Help Get You Moving Again.
              </div>
              <div className="tcare-info--main">
              ToyotaCare features 24-hour roadside assistance <sup>24</sup> available at no cost for 2 years from the effective date, for unlimited miles.
              </div>
              <div className="tcare-info--include">
                24-Hour Roadside Assistance Covers:
              </div>
              <div className="tcare-info--include_li">
                <li>Battery jump start</li>
                <li>Lockout protection</li>
                <li>Emergency fuel delivery</li>
                <li>Tire service <sup>25</sup></li>
                <li>Towing <sup>27</sup></li>
                <li>Winching <sup>26</sup></li>
              </div>
            </div>
          </div>
        </div>


        <Footer />

      </div>
    )
  }
}

export default ToyotaCare;
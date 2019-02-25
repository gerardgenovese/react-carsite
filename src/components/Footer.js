import React from "react";
import FooterModal from "./FooterModal";

class Footer extends React.Component {

  state={
    modal: false
  }

  openModal = () => {
    this.setState({ modal: true })
  }

  closeModal = () => {
    this.setState({ modal: false })
  };

  render(){
    return(
      <div>
        <footer className="footer footer-desktop">
          <div className="footer-social">
            <i className="fab fa-facebook footer-fab" aria-hidden="true"></i>
            <i className="fab fa-youtube footer-fab"></i>
            <i className="fab fa-twitter-square footer-fab" aria-hidden="true"></i>
            <i className="fab fa-google-plus-square footer-fab" aria-hidden="true"></i>
            <i className="fab fa-instagram footer-fab" aria-hidden="true"></i>
            <i className="fab fa-pinterest-square footer-fab" aria-hidden="true"></i>
          </div>
          <div className="footer-main">
            <div>
              <p className="footer-main--title">Shopping Tools</p>
              <p>Build Your Toyota</p>
              <p>Trade-In Value</p>
              <p>Search Inventory</p>
              <p>Find a Dealer</p>
              <p>Local Specials</p>
              <p>Accessories</p>
              <p>Request a Quote</p>
              <p>Find Your Match</p>
              <p>Toyota Certified Used Vehicles</p>
            </div>
            <div>
              <p className="footer-main--title">Vehicles</p>
              <p>All Toyota Vehicles</p>
              <p>SUVs</p>
              <p>Trucks</p>
              <p>Cars</p>
              <p>Crossovers</p>
              <p>Hybrids</p>
              <p>Hybrid Cars</p>
              <p>Hybrid SUVs</p>
              <p>Concept Vehicles</p>
              <p>TRD Pro Series</p>
            </div>
            <div>
              <p className="footer-main--title">Helpful Links</p>
              <div>Safety Recalls & </div>
              <div>Service Campaigns</div>
              <p>Dealers</p>
              <p>Toyota Financial Services</p>
              <p>ToyotaCare</p>
              <p>Toyota Safety Sense</p>
              <p>Audio/Multimedia</p>
              <p>Mobile Phone Compatibility</p>
              <p>Safety Connect</p>
              <p>Toyota Mobility Feature</p>
              <p>Toyota Fleet</p>
              <p>Toyota Rent A Car</p>
              <p>Car Tips & Advice</p>
            </div>
            <div>
              <p className="footer-main--title">About Toyota</p>
              <p>Careers</p>
              <p>Our Company</p>
              <p>Toyota USA Newsroom</p>
              <p>Toyota Worldwide</p>
              <p>Toyota Racing</p>
              <p>TRD USA</p>
            </div>
          </div>
          <FooterModal openModal={this.state.modal} closeModal={this.closeModal}/>
        </footer>

        
        <footer className="footer footer-mobile">
          <div className="footer-tab">
            <input type="checkbox" id="shoppingTools"className="footer-tab--header" />
            <label htmlFor="shoppingTools" className="footer-tab--header-label">Shopping Tools</label>
            <div className="footer-tab--content">
                <p>Build Your Toyota</p>
                <p>Trade-In Value</p>
                <p>Search Inventory</p>
                <p>Find a Dealer</p>
                <p>Local Specials</p>
                <p>Accessories</p>
                <p>Request a Quote</p>
                <p>Find Your Match</p>
                <p>Toyota Certified Used Vehicles</p>
            </div>
          </div>
          <div className="footer-tab">
            <input type="checkbox" id="vehicles"className="footer-tab--header" />
            <label htmlFor="vehicles" className="footer-tab--header-label">Vehicles</label>
            <div className="footer-tab--content">
              <p>All Toyota Vehicles</p>
              <p>SUVs</p>
              <p>Trucks</p>
              <p>Cars</p>
              <p>Crossovers</p>
              <p>Hybrids</p>
              <p>Hybrid Cars</p>
              <p>Hybrid SUVs</p>
              <p>Concept Vehicles</p>
              <p>TRD Pro Series</p>
            </div>
          </div>
          <div className="footer-tab">
            <input type="checkbox" id="helpfulLinks"className="footer-tab--header" />
            <label htmlFor="helpfulLinks" className="footer-tab--header-label">Helpful Links</label>
            <div className="footer-tab--content">
              <p>Safety Recalls & Service Campaigns</p>
              <p>Dealers</p>
              <p>Toyota Financial Services</p>
              <p>ToyotaCare</p>
              <p>Toyota Safety Sense</p>
              <p>Audio/Multimedia</p>
              <p>Mobile Phone Compatibility</p>
              <p>Safety Connect</p>
              <p>Toyota Mobility Feature</p>
              <p>Toyota Fleet</p>
              <p>Toyota Rent A Car</p>
              <p>Car Tips & Advice</p>
            </div>
          </div>
          <div className="footer-tab">
            <input type="checkbox" id="aboutToyota"className="footer-tab--header" />
            <label htmlFor="aboutToyota" className="footer-tab--header-label">About Toyota</label>
            <div className="footer-tab--content">
              <p>Careers</p>
              <p>Our Company</p>
              <p>Toyota USA Newsroom</p>
              <p>Toyota Worldwide</p>
              <p>Toyota Racing</p>
              <p>TRD USA</p>
            </div>
          </div>
        </footer>


      </div>

    )
  }
};

export default Footer;





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
      <footer className="footer">
      
      <div className="footer-social" onClick={this.openModal}>
        <i className="fab fa-facebook footer-fab" aria-hidden="true"></i>
        <i className="fab fa-youtube footer-fab"></i>
        <i className="fab fa-twitter-square footer-fab" aria-hidden="true"></i>
        <i className="fab fa-google-plus-square footer-fab" aria-hidden="true"></i>
        <i className="fab fa-instagram footer-fab" aria-hidden="true"></i>
        <i className="fab fa-pinterest-square footer-fab" aria-hidden="true"></i>
      </div>
      <div className="footer-main" onClick={this.openModal}>
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
    )
  }
};

export default Footer;




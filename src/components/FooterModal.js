import React from "react";
import Modal from "react-modal";
import video from "../relativeImages/footer/rickrolled.mp4";


class FooterModal extends React.Component {


  componentDidMount(){
    Modal.setAppElement("body");
  };


  render(){
    return (
      <div>
        <Modal className="footer-modal" isOpen={this.props.openModal}>
        <div className="footer-header--flex">
          <button className="footer-header--close"onClick={this.props.closeModal}>X</button>
        </div>
            <div className="footer-header--text">THESE LINKS DON'T ACTUALLY GO ANYWHERE.... ¯\_(ツ)_/¯</div>
             
        
           <video controls autoPlay={true}>
            <source src={video}/>
           </video> 
        </Modal>
      </div>
    )
  }
};

export default FooterModal;
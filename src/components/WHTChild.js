import React from "react";


const WHTChild = (props) => {
  console.log(props.className)
  return(
    <div className="whtC">
      <div className="whtC-container">
        <div>
          <img className="whtC-img" src={props.image} alt="#" />
        </div>
          <p className="whtC-callToAction">{props.callToAction}</p>
          <p className="whtC-header1">{props.header}.</p>
          <p className="whtC-header2">{props.header2}.</p>
          <p className="whtC-body">{props.body}</p>
          <p className="whtC-learn">Learn More</p>
      </div>
    </div>

   
  )
};

export default WHTChild;
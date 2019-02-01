import React from "react";
import { Link } from "react-router-dom";

class SectionNav extends React.Component{
  render(){
    console.log("navprops",this.props)
    return(
      <div>
        <div className="sectionNav">
          <div className="sectionNav-spacing sectionNav-spacing--borderRight">
            <Link to="/select_toyota">
              <div className="sectionNav-flex">
                <i className="fas fa-car icon-basic-car icon-basic"></i>
                  <div>
                    <div className="sectionNav-link">Build</div>
                    <div className="sectionNav-link"> & Price</div>
                  </div>
              </div>
            </Link>
          </div> 
          <div className="sectionNav-spacing">
            <Link to="/search">
              <div className="sectionNav-flex">
                <i className="fas fa-search-dollar"></i>
                  <div>
                    <div className="sectionNav-link">Search</div>
                    <div className="sectionNav-link"> &nbsp; Inventory</div>
                  </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default SectionNav;
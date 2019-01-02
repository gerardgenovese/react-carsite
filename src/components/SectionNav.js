import React from "react";


class SectionNav extends React.Component{
  render(){
    return(
      <div>
        {/* <div class="specs__options"> 
         
            <i class="fas fa-car icon-basic-car icon-basic"></i>
            <p class="options-text" align="center">Build <br />& Price</p>
  
       
             <i class="icon-basic-geolocalize-01 icon-basic"></i>
            <i class="fas fa-map-marker icon-basic icon-marker"></i>
            <p class="options-text" align="center">Find a <br /> Search Inventory</p> 
     
        </div> */}



        <div className="sectionNav">
          <div className="sectionNav-spacing sectionNav-spacing--borderRight">
            <div className="sectionNav-flex">
              <i class="fas fa-car icon-basic-car icon-basic"></i>
                <div>
                  <div className="sectionNav-link">Build</div>
                  <div className="sectionNav-link"> & Price</div>
                </div>
            </div>
          </div> 
          <div className="sectionNav-spacing">
            <div className="sectionNav-flex">
              <i class="fas fa-search-dollar"></i>
                <div>
                  <div className="sectionNav-link">Search</div>
                  <div className="sectionNav-link"> &nbsp; Inventory</div>
                </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default SectionNav;
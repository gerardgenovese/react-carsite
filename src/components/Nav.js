import React from "react";
import { NavLink, Link } from "react-router-dom";

import SelectCars from "./SelectCars";

import Toyota from "../relativeImages/toyota-logo.PNG";

class Nav extends React.Component {


state = {
  menu: false,
  selectVecicle: false, 
};


changeMenu = () => {
  this.setState({ menu: !this.state.menu, selectVehicle: true });

  setTimeout(() => {
    this.setState({ menuItems: !this.state.menuItems, });
  },200)
};

closeMenuAfterClick = () => {
  this.setState({ menu: false, menuItems:false })
}

componentWillUnmount(){
  this.setState({ menu:false });
};

  render(){
    return(
      <div className={this.state.menu ? " nav nav-fixed" : "nav"}>

        <div className="nav-container">

          <div></div>
          <div></div>
          
          <div className="nav-flex">
            <NavLink to="/" exact={true} activeClassName="is-active nav-link" className="nav-link" onClick={this.closeMenuAfterClick}>
              <div>Explore</div>
            </NavLink>
            <NavLink to="/search" activeClassName="is-active nav-link" className="nav-link" onClick={this.closeMenuAfterClick}>
              <div className="nav-search--flex" >
                <div onClick={this.getNavLink}>Search</div>
                <i className="fa fa-search nav-search-fa" aria-hidden="true" ></i>
              </div>
            </NavLink>
            <NavLink to="/select_toyota" activeClassName="is-active nav-link" className="nav-link" onClick={this.closeMenuAfterClick}>
            <div>Build & Price</div>
          </NavLink>
          </div>

          <div></div>

        </div>
        <div className="nav-container2">
          <div className="nav-logo-container">
            <Link to="/">
              <img src={Toyota} className="nav-logo" alt="logo" onClick={this.closeMenuAfterClick}/>
            </Link>
            <div className="nav-logo-text">
              Proud Mobility Partner
            </div>
          </div>      
          <div className={this.state.menu ? "nav-flex nav-link--2 nav-link--2-active": "nav-flex nav-link--2 nav-link--2-inactive"} onClick={this.changeMenu}>
            <div>Select Vehicle &nbsp;</div>
            {
              this.state.menu ? 
              <i className="fa fa-arrow-up" aria-hidden="true"></i> : 
              <i className="fa fa-arrow-down" aria-hidden="true"></i>
            }
          </div>

          <div></div>

        </div>
          <div className={this.state.menu ? "select-menu-open" : "select-menu-closed"} onClick={this.closeMenuAfterClick}>
            <div className={this.state.menuItems ? "select-menu-items--show" : "select-menu-items--hidden"}>
              <SelectCars menu={this.state.menu} />
            </div> 
          </div>
      </div>
    )
  }
}

export default Nav;



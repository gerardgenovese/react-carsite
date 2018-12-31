import React from "react";
import { NavLink } from "react-router-dom";
import Toyota from "../relativeImages/toyota-logo.PNG";

const Nav = () => {
  return(
    <div className="nav">
      <img src={Toyota} className="nav-logo" alt="logo" />
      <div className="nav-links">
        <NavLink to="/" className="nav-link" activeClassName="is-active" exact={true}>Explore</NavLink>
        {/* <NavLink to="/models" className="nav-link" activeClassName="is-active">Car Models</NavLink> */}
        <NavLink to="/search" className="nav-link" activeClassName="is-active">Search</NavLink>
      </div>
    </div>
  )
};

export default Nav;
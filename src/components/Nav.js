import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return(
    <div>
      <NavLink to="/" activeClassName="is-active" exact={true}>Explore</NavLink>
      <NavLink to="/models" activeClassName="is-active">Car Models</NavLink>
      <NavLink to="/search" activeClassName="is-active">Search</NavLink>
    </div>
  )
};

export default Nav;
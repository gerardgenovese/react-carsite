import React from "react";
import { NavLink, Link } from "react-router-dom";
import ExploreAllTestChild from "./ExploreAllTestChild";

import Toyota from "../relativeImages/toyota-logo.PNG";

class Nav extends React.Component {


state = {
  menu: false,
  menuItems: false,

  
  camryAnimate: false,
  t86Animate: false,
  corollaAnimate:false,
  avalonAnimate:false,
  yarisAnimate:false,


  testing: false
}



changeMenu = () => {
  this.setState({ menu: !this.state.menu });

  setTimeout(() => {
    this.setState({ menuItems: !this.state.menuItems, });
  },200)

  // this.setState({ menuItems: !this.state.menuItems });


  setTimeout(() => {
    this.setState({ camryAnimate: !this.state.camryAnimate })
  },200);
  setTimeout(() => {
    this.setState({ t86Animate: !this.state.t86Animate })
  },300);
  setTimeout(() => {
    this.setState({ corollaAnimate: !this.state.corollaAnimate })
  },500);
  setTimeout(() => {
    this.setState({ avalonAnimate: !this.state.avalonAnimate })
  },700);
  setTimeout(() => {
    this.setState({ yarisAnimate: !this.state.yarisAnimate })
  },900);

  // if(this.state.menuItems === false){

  //   this.componentWillUnmount()
  // }
};


componentWillUnmount(){
  this.setState({ camryAnimate: false, t86Animate: false, corollaAnimate: false, avalonAnimate: false, yarisAnimate: false });

};

  render(){
    console.log("navstate", this.state)
    return(
      <div className="nav">

        <div className="nav-container">
          <Link to="/">
          <img src={Toyota} className="nav-logo" alt="logo" />
          </Link>
          <div className="nav-links">
            <div className="nav-link" >
              <NavLink to="/" activeClassName="is-active" exact={true}>Explore</NavLink>
            </div>
            <div className="nav-link" >
              <NavLink to="/search" activeClassName="is-active">Search</NavLink>
            </div>
        
              
            <div className="nav-link nav-link--arrow" onClick={this.changeMenu}>
              <div>Select</div>
              {
                this.state.menu ? 
                <i className="fa fa-arrow-up" aria-hidden="true"></i> : 
                <i className="fa fa-arrow-down" aria-hidden="true"></i>
              }
            </div>
          </div>

    
        </div>
        <div className={this.state.menu ? "menu menu-open" : "menu menu-closed"}>
          <div className={this.state.menuItems ? "menu-items--show" : "menu-items--hidden"}>

            <ExploreAllTestChild camryAnimate={this.state.camryAnimate} t86Animate={this.state.t86Animate} corollaAnimate={this.state.corollaAnimate} avalonAnimate={this.state.avalonAnimate} yarisAnimate={this.state.yarisAnimate}/>


          </div> 
        </div>

      </div>
    )
  }
}

export default Nav;



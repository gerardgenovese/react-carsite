import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Page404 from "../components/Page404";

import Supra from "../components/WhatsHappeningPages/Supra";
import Xfinity from "../components/WhatsHappeningPages/Xfinity";
import ToyotaCare from "../components/WhatsHappeningPages/ToyotaCare";

import '../styles/main.scss';


class AppRouter2 extends React.Component {


  render(){
    return(
      <BrowserRouter>

          
            <Switch>
    
              <Route path="/toyota-newsroom/supra" exact={true} component={Supra} />
              <Route path="/toyota-concept-vehicles/supra/xfinity-series" component={Xfinity} />
              <Route path="/toyota-care" component={ToyotaCare} />
    
              <Route component={Page404} />
            </Switch>
      </BrowserRouter>
    )
  }

};

export default AppRouter2;
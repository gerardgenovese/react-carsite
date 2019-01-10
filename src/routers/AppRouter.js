import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "../components/Nav";
import LandingPage from "../components/LandingPage";
import BuildPriceSelection from "../components/BuildPriceSelection";
import BuildCarPageCamry from "../components/BuildCarPages/BuildCarPageCamry";
import BuildCarPage86 from "../components/BuildCarPages/BuildCarPage86";
import BuildCarPageCorolla from "../components/BuildCarPages/BuildCarPageCorolla";
import BuildCarPageAvalon from "../components/BuildCarPages/BuildCarPageAvalon";
import BuildCarPageYaris from "../components/BuildCarPages/BuildCarPageYaris";
import SearchPage from "../components/SearchPage";

import Supra from "../components/WhatsHappeningPages/Supra";

import '../styles/main.scss';



const AppRouter = () => {
  return(
    <BrowserRouter>
      <div className="body-container">
        <Nav />
        <Switch>
          <Route path="/" component={LandingPage} exact={true}/>
          <Route path="/select_toyota" component={BuildPriceSelection}/>
          <Route path="/build/camry" component={BuildCarPageCamry}/>
          <Route path="/build/86" component={BuildCarPage86}/>
          <Route path="/build/corolla" component={BuildCarPageCorolla}/>
          <Route path="/build/avalon" component={BuildCarPageAvalon}/>
          <Route path="/build/yaris" component={BuildCarPageYaris}/>
          <Route path="/search" component={SearchPage} />

          <Route path="/toyota/supra" component={Supra} />
        </Switch>
      </div>
    </BrowserRouter>
  )
};

export default AppRouter;
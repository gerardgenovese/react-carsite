import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "../components/Nav";
import LandingPage from "../components/LandingPage";
import BuildPriceSelection from "../components/BuildPriceSelection";
import BuildCarPage from "../components/BuildCarPage";
import SearchPage from "../components/SearchPage";
import '../styles/main.scss';

const AppRouter = () => {
  return(
    <BrowserRouter>
      <div className="body-container">
        <Nav />
        <Switch>
          <Route path="/" component={LandingPage} exact={true}/>
          <Route path="/select_toyota" component={BuildPriceSelection}/>
          <Route path="/build" component={BuildCarPage}/>
          <Route path="/search" component={SearchPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
};

export default AppRouter;
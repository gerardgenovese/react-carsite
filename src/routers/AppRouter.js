import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "../components/Nav";
import LandingPage from "../components/LandingPage";
import CarModelsPage from "../components/CarModelsPage";
import BuildCarPage from "../components/BuildCarPage";
import '../styles/main.scss';

const AppRouter = () => {
  return(
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route path="/" component={LandingPage} exact={true}/>
          <Route path="/models" component={CarModelsPage}/>
          <Route path="/build" component={BuildCarPage}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
};

export default AppRouter;
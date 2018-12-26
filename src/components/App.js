import React from 'react';
import LandingPage from "./LandingPage";
import BuildCarPage from "./BuildCarPage";
import Nav from "./Nav";
import '../styles/main.scss';

class App extends React.Component {

  render() {
    return (
      <div>
        <Nav />
        <LandingPage />
        <BuildCarPage/>
      </div>
    );
  }
}

export default App;

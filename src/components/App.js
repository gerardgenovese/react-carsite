import React from 'react';
import LandingPage from "./LandingPage";
import BuildCarPage from "./BuildCarPage";
import '../styles/main.scss';

class App extends React.Component {

  render() {
    return (
      <div>
        <LandingPage />
        <BuildCarPage/>
      </div>
    );
  }
}

export default App;

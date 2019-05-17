import React, { Component } from 'react';
import Slider from "./components/Slider/Slider";

import "./App.css";

class App extends Component {
    state = {
        loading: true
    };

    componentDidMount() {
        // Simulation of async action after which component will render the content
        asyncCall().then(() => this.setState({loading: false }))
    }

  render() {
      const {loading} = this.state;

      if (loading) {
          return null;
      }

      return (
          <div className="container">
              <Slider/>
          </div>
      );
  }
}

function asyncCall()  {
    return new Promise((resolve) => setTimeout(() => resolve(), 1000));
}

export default App;

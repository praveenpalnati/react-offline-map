import React, { Component } from 'react';
import Continents from './examples/Continents'
import EuropeanCities from './examples/EuropeanCities'
import Overlays from './examples/Overlays'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
        showing: 0
    })
  }

  toggleShowing = () => {
    this.setState({
        showing: (this.state.showing + 1) % 3
    })
  }

  render() {
    var names = ['Continents', 'EuropeanCities', 'Overlays'];
    return (
        <div>
          <div style={{display: 'flex'}}>

            <h1>Showing {names[this.state.showing]}</h1>
            <button onClick={this.toggleShowing}>Show {names[(this.state.showing+1) % 3]}</button>
          </div>
            {this.state.showing === 0 ? <Continents /> : (this.state.showing === 1 ? <EuropeanCities/> : <Overlays/>)}
        </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    randomTop: "",
    randomBottom: ""
  }

  handleWrapperRandom = () => {
    this.setState({
      randomTop: Math.floor(Math.random() * 6 + 1),
      randomBottom: Math.floor(Math.random() * 6 + 1)
    })
    console.log('click');
  }
  render() {
    return (
      <div className='wrapper' onClick={this.handleWrapperRandom}>
        <div className='dice-container'>
          <div className='dice-up'><p className='random-nr-top dice'>{this.state.randomTop}</p></div>
          <div className='dice-bottom'><p className='random-nr-bottom dice'>{this.state.randomBottom}</p></div>
        </div>
      </div>
    );
  }
}

export default App;

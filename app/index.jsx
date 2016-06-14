import { render } from 'react-dom';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <span>Welcome to Traccon! We're going to get this React / Redux combo rollin and get that full stack notch on our belt officially!</span>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));

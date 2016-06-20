import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import tracconApp from './reducers';
import App from './components/App';

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <span>Welcome to Traccon! We're going to get this React / Redux combo rollin and get that full stack notch on our belt officially!</span>
//       </div>
//     );
//   }
// }

let store = createStore(tracconApp);

render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('app'));

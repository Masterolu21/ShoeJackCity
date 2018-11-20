import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import AppNavigator from './routes/AppNavigator';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;

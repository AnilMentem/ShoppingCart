import React, { Component } from 'react';
import ShoppingCartContainer from './App/Routes';
import { Provider } from 'react-redux';
import store from './App/Reducers/index';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
         <ShoppingCartContainer/>
      </Provider>
    );
  }
}
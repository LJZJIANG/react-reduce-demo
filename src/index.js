import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Content from './components/Content';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from './react-redux';
import createSagaMiddleware from 'redux-saga';
import './index.css';

const themeReducer = (state, action) => {
  debugger;
  if (!state)
    return {
      themeColor: 'red'
    };
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor };
    default:
      return state;
  }
};
// 创建saga中间件
const sagaMiddleware = createSagaMiddleware();

const store = createStore(themeReducer, applyMiddleware(sagaMiddleware));
// sagaMiddleware.run()
class Index extends Component {
  static childContextTypes = {
    store: PropTypes.object
  };
  getChildContext() {
    return { store };
  }
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
);

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
  static contextTypes = {
    themeColor: PropTypes.string
  };


  render() {
    return <h1 style={{ color: this.props.themeColor }}>React.js 小书</h1>;
  }
}

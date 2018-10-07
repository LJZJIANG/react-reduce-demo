import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ThemeSwitch extends Component {
  static contextTypes = {
    store: PropTypes.object,
    onSwtchColor: PropTypes.func
  };

  handleChangeColor(color) {
    debugger;
    if (this.props.onSwtchColor) {
      this.props.onSwtchColor(color);
    }
  }
  render() {
    return (
      <div>
        <button
          style={{ color: this.props.themeColor }}
          onClick={() => {
            this.handleChangeColor('red');
          }}>
          Red
        </button>
        <button
          style={{ color: this.props.themeColor }}
          onClick={() => {
            this.handleChangeColor('blue');
          }}>
          Blue
        </button>
      </div>
    );
  }
}


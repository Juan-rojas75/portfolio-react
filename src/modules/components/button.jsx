// Button.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { text, onClick, className, disabled } = this.props;
    return (
      <button
        className={`px-2 py-1 font-rubik rounded-lg bg-pink-500 hover:bg-pink-600 text-base text-white ${className}`}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onClick: () => {},
  className: '',
  disabled: false,
};

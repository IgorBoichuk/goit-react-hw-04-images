import React, { Component } from 'react';
import style from './style.module.css';

export class Modal extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focus();
  }

  render() {
    return (
      <div
        ref={this.textInput}
        className={style.overlay}
        onKeyDown={this.props.onEscCloseModal}
        tabIndex={5}
      >
        <div className={style.modal}>
          <img src={this.props.largeImg} alt="" />
        </div>
      </div>
    );
  }
}

import React, { useEffect } from 'react';
// import { useState } from 'react';
import style from './style.module.css';

export const Modal = props => {
  const textInput = React.useRef();

  useEffect(() => {
    textInput.current.focus();
  });

  return (
    <div
      ref={textInput}
      className={style.overlay}
      onKeyDown={props.onEscCloseModal}
      tabIndex={5}
    >
      <div className={style.modal}>
        <img src={props.largeImg} alt="" />
      </div>
    </div>
  );
};

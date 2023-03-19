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

// export class Modal extends Component {
//   constructor(props) {
//     super(props);
//     this.textInput = React.createRef();
//   }

//   componentDidMount() {
//     this.textInput.current.focus();
//   }

//   render() {
//     return (
//       <div
//         ref={this.textInput}
//         className={style.overlay}
//         onKeyDown={this.props.onEscCloseModal}
//         tabIndex={5}
//       >
//         <div className={style.modal}>
//           <img src={this.props.largeImg} alt="" />
//         </div>
//       </div>
//     );
//   }
// }

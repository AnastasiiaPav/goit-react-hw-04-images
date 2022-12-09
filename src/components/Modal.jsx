import { Component } from "react";
import { createPortal } from "react-dom";
import { Backdrop } from "./App.styled";

import propTypes from 'prop-types';


const modalPort = document.getElementById("modal-root")

export class Modal extends Component{
  
    closeOnEscape = (event) => {
    if (event.code === 'Escape') {
      this.props.onClose()
    }
    }
    
  componentDidMount() {
    window.addEventListener('keydown', this.closeOnEscape);
    }
    
    componentWillUnmount() {
      window.removeEventListener('keydown', this.closeOnEscape);
    }

    render() {
        const { children, onClose } = this.props;
        return createPortal(
          <Backdrop onClick={onClose}>
            <div>{children}</div>
          </Backdrop>,
          modalPort
        );
      }
    }

    Modal.propTypes = {
      onClose: propTypes.func,
    }
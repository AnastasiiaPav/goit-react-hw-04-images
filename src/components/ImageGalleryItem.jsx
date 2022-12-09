import { Component } from 'react';
import { Image } from './App.styled';
import { Modal } from './Modal';

import propTypes from 'prop-types';


export class ImageGalleryItem extends Component {
    state = {
      isOpen: false,
    };
  
    togleModal = () => {
      this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
    };
  
    render() {
      const { path, tags, largeImg } = this.props;
      return (
        <>
          <Image>
            <img
              src={path}
              alt={tags}
              width="340"
              height="250"
              onClick={this.togleModal}
            />
          </Image>
          {this.state.isOpen && (
            <Modal onClose={this.togleModal}>
              <img src={largeImg} alt={tags} width="900" height="650" />
            </Modal>
          )}
        </>
      );
    }
  }

  ImageGalleryItem.propTypes = {
    path: propTypes.string,
     tags: propTypes.string, 
     largeImg: propTypes.string,
  }
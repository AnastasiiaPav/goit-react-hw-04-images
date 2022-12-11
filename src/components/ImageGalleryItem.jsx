import { useState } from 'react';
import { Image } from './App.styled';
import { Modal } from './Modal';

import propTypes from 'prop-types';


export const ImageGalleryItem = ({path, tags,largeImg}) => {
  const [isOpen, setIsOpen] = useState(false)
  
  const  togleModal = () => {
     setIsOpen(isOpen => (!isOpen ));
    };
  
      return (
        <>
          <Image>
            <img
              src={path}
              alt={tags}
              width="340"
              height="250"
              onClick={togleModal}
            />
          </Image>
          {isOpen && (
            <Modal onClose={togleModal} isOpen={isOpen}>
              <img src={largeImg} alt={tags} width="900" height="650" />
            </Modal>
          )}
        </>
      );
    }


  ImageGalleryItem.propTypes = {
    path: propTypes.string,
     tags: propTypes.string, 
     largeImg: propTypes.string,
  }
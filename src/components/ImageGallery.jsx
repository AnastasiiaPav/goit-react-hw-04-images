import { Button } from './Button';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Loader } from './Loader';
import { FlexImg, DivGallery } from './App.styled';
import propTypes from 'prop-types';

export const ImageGallery =({ gallery, onShowMore, status}) =>  {

    if (status === 'ok' || status === 'pending' ) {
      return (
        <DivGallery>
          <FlexImg>
            {gallery.map(({ webformatURL, largeImageURL, tags }) => {
              return (
                <ImageGalleryItem
                  key={largeImageURL}
                  path={webformatURL}
                  tags={tags}
                  largeImg={largeImageURL}
                />
              );
            })}
          </FlexImg>
          {status === 'pending' ? <Loader /> : <Button onclick={onShowMore} />}
        </DivGallery>
      );
    }
  }

ImageGallery.propTypes = {
  gallery: propTypes.arrayOf(
    propTypes.shape({
      webformatURL: propTypes.string,
      largeImageURL: propTypes.string,
      tags: propTypes.string,
    }) ),

    status: propTypes.string,
    onShowMore: propTypes.func,
}

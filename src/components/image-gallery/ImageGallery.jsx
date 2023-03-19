import { ImageGalleryItem } from 'components/image-gallery-item/ImageGalleryItem';

import style from './style.module.css';

export const ImageGallery = ({ imgStore, onPictureClick, key }) => {
  const galleryElements = imgStore.map(image => {
    return (
      <ImageGalleryItem
        key={image.id}
        imageSrc={image.webformatURL}
        imageAlt={image.tags}
        onClick = {(event) => {onPictureClick(event)}}
      />
    );
  });
  // console.log(galleryElements);
  return (
    <ul className={style.gallery} onClick={onPictureClick}>
      {galleryElements}
    </ul>
  );
};

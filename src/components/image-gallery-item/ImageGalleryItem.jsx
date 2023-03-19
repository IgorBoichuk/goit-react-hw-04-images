import style from './style.module.css';

export const ImageGalleryItem = ({ imageSrc, imageAlt}) => {
  //console.log(imageSrc);
  return (
    <li
      className={style.galleryitem}
    >
      <img src={imageSrc} alt={imageAlt} className={style.image} />
    </li>
  );
};

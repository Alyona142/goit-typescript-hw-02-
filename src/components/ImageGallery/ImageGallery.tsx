import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

type Props = {
  gallery: Photo[];
  openModal: () => void;
  updateModalStateData: (url: string, alt: string) => void;
};

const ImageGallery: React.FC<Props> = ({
  gallery,
  openModal,
  updateModalStateData,
}) => {
  return (
    <ul className={styles.itemsContainer}>
      {gallery.map(({ id, alt_description, urls }) => (
        <li className={styles.cardItem} key={id} onClick={openModal}>
          <ImageCard
            urls={urls}
            alt_description={alt_description}
            updateModalStateData={updateModalStateData}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

import React from "react";
import ImageGallery from "react-image-gallery";
// import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "react-image-gallery/styles/css/image-gallery.css";
import styles from "./detailPage.module.css";
interface DetailPageProps {
  // : string;
}

const DetailPage: React.FC<DetailPageProps> = ({}) => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <div className={styles.detailPage}>
      <div className={styles.image}>
        <ImageGallery
          items={images}
          showThumbnails={true}
          showPlayButton={false}
          showFullscreenButton={false}
          showNav={false}
        />
      </div>
      <div className={styles.container}>
        <p className={styles.category}>Category</p>
        <p className={styles.product}>name</p>
        <p className={styles.price}>$150</p>
        <button className={styles.button}>Add To Cart</button>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        </p>
        
      </div>
    </div>
  );
};

export default DetailPage;

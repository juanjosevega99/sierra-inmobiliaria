import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./styles.module.css";

const HouseDetails = ({ house, handleBackClick }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const onChange = (index) => {
    setSelectedImage(index);
  };

  return (
    <div className={styles.container}>
      <Carousel
        showThumbs={false}
        showArrows={true}
        selectedItem={selectedImage}
        onChange={onChange}
      >
        {house.images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index}`} className={styles.image} />
          </div>
        ))}
      </Carousel>
      <div className={styles.textContainer}>
        <p className={styles.location}>{house.location}</p>
        <p className={styles.price}>{house.price}</p>
        <p className={styles.type}>{house.type}</p>
      </div>
      <button className={styles.backButton} onClick={handleBackClick}>
        Ir atrás
      </button>
    </div>
  );
};

export default HouseDetails;

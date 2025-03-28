import { useState, ReactNode } from "react";

import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";
import styles from "./Carousel.module.css";

interface IProps {
  children: ReactNode[];
}

const Carousel = ({ children }: IProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideWidth = 300;
  const totalSlides = children.length;

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide >= totalSlides - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div
          className={styles.slides}
          style={{
            transform: `translateX(-${currentSlide * slideWidth}px)`,
            transition: "transform 0.5s ease",
          }}
        >
          {children.map((slide, index) => (
            <div key={index} className={styles.slide}>
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={handlePrev}>
          <img src={leftArrow} alt="Previous" className={styles.icons} />
        </button>
        <button className={styles.button} onClick={handleNext}>
          <img src={rightArrow} alt="Next" className={styles.icons} />
        </button>
      </div>
    </>
  );
};

export default Carousel;

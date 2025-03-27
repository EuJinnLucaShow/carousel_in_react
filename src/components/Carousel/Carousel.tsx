import { useState, ReactNode } from "react";
import styles from "./Carousel.module.css";

interface IProps {
  children: ReactNode[];
}

const Carousel = ({ children }: IProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
            transform: `translateX(-${currentSlide * 25}%)`,
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
          Left
        </button>
        <button className={styles.button} onClick={handleNext}>
          Right
        </button>
      </div>
    </>
  );
};

export default Carousel;

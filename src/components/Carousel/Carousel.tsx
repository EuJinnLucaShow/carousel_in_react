import { useState, ReactNode } from "react";
import styles from "./Carousel.module.css";

interface IProps {
  children: ReactNode[];
}

const Carousel = ({ children }: IProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div>
      <div className={styles.wrapper}>
        <div
          className={styles.slides}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {children.map((slide, index) => (
            <div
              key={index}
              className={`${styles.slide} ${
                currentSlide === index ? styles.active : ""
              }`}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() =>
          setCurrentSlide(
            (currentSlide - 1 + children.length) % children.length
          )
        }
      >
        Left
      </button>
      <button
        onClick={() => setCurrentSlide((currentSlide + 1) % children.length)}
      >
        Right
      </button>
    </div>
  );
};

export default Carousel;

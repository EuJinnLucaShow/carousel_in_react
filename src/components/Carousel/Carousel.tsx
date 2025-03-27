import { JSX } from "react";
import styles from "./Carousel.module.css";

interface IProps {
  children: JSX.Element[];
}

const Carousel = ({ children }: IProps) => {
  const activeSlide = children.map((slide) => <>{slide}</>);

  return <div className={styles.wrapper}>{activeSlide}</div>;
};

export default Carousel;

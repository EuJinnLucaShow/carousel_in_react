import useUnsplashPhotos from "../../hooks/useUnsplashPhotos";
import styles from "./Card.module.css";

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  const photos = useUnsplashPhotos(title);
  const imageUrl =
    photos[0]?.url || "https://placehold.co/400?text=image placeholder";

  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <img src={imageUrl} alt={title} />
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;

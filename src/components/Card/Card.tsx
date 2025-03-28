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
      <img src={imageUrl} alt={title} className={styles.images} />
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Card;

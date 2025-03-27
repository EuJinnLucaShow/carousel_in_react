import { useEffect, useState } from "react";
import unsplash from "../api/unsplash";

const useUnsplashPhotos = (query: string) => {
  const [photos, setPhotos] = useState<
    { id: string; url: string; title: string }[]
  >([]);

  useEffect(() => {
    unsplash.search
      .getPhotos({ query, perPage: 15 })
      .then((res) => {
        if (res.response) {
          setPhotos(
            res.response.results.map((photo) => ({
              id: photo.id,
              url: photo.urls.small,
              title: photo.alt_description ?? "Unsplash Image",
            }))
          );
        }
      })
      .catch((err) => console.error("Error fetching images:", err));
  }, [query]);

  return photos;
};

export default useUnsplashPhotos;

import { useEffect, useState } from "react";
import { ReactImageGalleryItem } from "react-image-gallery";
import { getAlbums, getImage } from "../controller";
import { loading } from "../model";

export const useFetch = (): [loading, ReactImageGalleryItem[]] => {
  const [loading, setLoading] = useState<loading>("loading");
  const [images, setImages] = useState<ReactImageGalleryItem[]>([]);
  useEffect(() => {
    const a = async () => {
      const albums = await getAlbums();
      if (albums !== null) {
        const images = await getImage(albums[1]);
        if (images !== null) {
          setImages(images);
          setLoading("success");
          return;
        }
      }
      setLoading("error");
    };
    a();
  }, []);

  return [loading, images];
};

import { useEffect, useState } from "react";
import { ReactImageGalleryItem } from "react-image-gallery";
import { getImages } from "../controller";
import { loading, responseYaDiskAlbums } from "../model";

export const useGetImages = (
  album: responseYaDiskAlbums | null
): [loading, ReactImageGalleryItem[]] => {
  const [loading, setLoading] = useState<loading>("loading");
  const [images, setImages] = useState<ReactImageGalleryItem[]>([]);
  useEffect(() => {
    if (album) {
      const a = async () => {
        const images = await getImages(album);
        if (images === null) {
          setLoading("error");
        } else {
          setImages(images);
          setLoading("loaded");
        }
      };
      a();
    }
  }, [album]);

  return [loading, images];
};

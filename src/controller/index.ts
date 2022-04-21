import { ReactImageGalleryItem } from "react-image-gallery";
import { responseYaDisk, responseYaDiskAlbums } from "../model";
const tempPath =
  "https://cloud-api.yandex.net/v1/disk/public/resources?public_key=";

export const getImages = async (
  album: responseYaDiskAlbums
): Promise<ReactImageGalleryItem[] | null> => {
  try {
    const result = await fetch(`${tempPath}${album.path}`);
    const data: responseYaDisk = await result.json();
    const images: ReactImageGalleryItem[] = [];
    data._embedded.items.forEach((item) => {
      if (
        item.type === "file" &&
        item.media_type === "image" &&
        item.mime_type === "image/jpeg"
      ) {
        images.push({ original: item.file, thumbnail: item.preview });
      }
    });
    return images;
  } catch (error) {
    console.log("error: ", error);
    return null;
  }
};

export const getAlbums = async (): Promise<responseYaDiskAlbums[] | null> => {
  try {
    const result = await fetch(`./albums.json`);
    const albums: responseYaDiskAlbums[] = await result.json();
    return albums;
  } catch (error) {
    console.log("error: ", error);
    return null;
  }
};

import { ReactImageGalleryItem } from "react-image-gallery";
import { image, responseYaDisk, responseYaDiskAlbums } from "../model";
const tempPath =
  "https://cloud-api.yandex.net/v1/disk/public/resources?public_key=";

export const getImages = async (
  album: responseYaDiskAlbums
): Promise<image[] | null> => {
  try {
    const result = await fetch(`${tempPath}${album.path}&preview_size=XXL`);
    const data: responseYaDisk = await result.json();
    const images: image[] = [];
    data._embedded.items.forEach((item) => {
      if (
        item.type === "file" &&
        item.media_type === "image" &&
        item.mime_type === "image/jpeg"
      ) {
        images.push({
          original: item.preview,
          thumbnail: item.preview,
          dowloadPath: item.file,
        });
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

export const pathDowload = (key: string, path: string) =>
  `https://cloud-api.yandex.net/v1/disk/public/resources/download?public_key=${key}&path=${path}`;

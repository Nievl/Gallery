import { responseYaDiskAlbums } from "../model";

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

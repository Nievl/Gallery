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

export const getYears = async (): Promise<number[] | null> => {
  try {
    const result = await fetch(`./years.json`);
    const years: number[] = await result.json();
    return years;
  } catch (error) {
    console.log("error: ", error);
    return null;
  }
};

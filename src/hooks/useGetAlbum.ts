import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getAlbums } from "../controller";
import { loading, responseYaDiskAlbums } from "../model";

export const useGetAlbum = (): [
  loading,
  responseYaDiskAlbums[],
  number,
  number[],
  Dispatch<SetStateAction<number>>,
  responseYaDiskAlbums[]
] => {
  const [loading, setLoading] = useState<loading>("loading");
  const [albums, setAlbums] = useState<responseYaDiskAlbums[]>([]);
  const [years, setYears] = useState<number[]>([]);
  const [currentYear, setCurrentYear] = useState(0);
  const [currentAlbums, setCurrentAlbums] = useState(albums);

  useEffect(() => {
    const a = async () => {
      const albums = await getAlbums();
      if (albums === null) {
        setLoading("error");
      } else {
        setAlbums(albums);
        const years = new Set(albums.map((album) => album.year).sort());
        setYears(Array.from(years));
        setLoading("loaded");
      }
    };
    a();
  }, []);

  useEffect(
    () =>
      setCurrentAlbums(albums.filter((album) => album.year === currentYear)),
    [currentYear]
  );

  return [loading, albums, currentYear, years, setCurrentYear, currentAlbums];
};

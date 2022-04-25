import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getYears } from "../controller";
import { responseYaDiskAlbums } from "../model";

export const useGetYears = (
  albums: responseYaDiskAlbums[]
): [
  number,
  number[],
  Dispatch<SetStateAction<number>>,
  responseYaDiskAlbums[]
] => {
  const [years, setYears] = useState<number[]>([]);
  const [currentYear, setCurrentYear] = useState(0);
  const [currentAlbums, setCurrentAlbums] = useState(albums);

  // get years from backend
  useEffect(() => {
    const a = async () => {
      const years = await getYears();
      if (years === null) {
      } else {
        setYears(years);
      }
    };
    a();
  }, []);

  useEffect(
    () =>
      setCurrentAlbums(albums.filter((album) => album.year === currentYear)),
    [currentYear]
  );

  return [currentYear, years, setCurrentYear, currentAlbums];
};

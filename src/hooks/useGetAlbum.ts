import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { getAlbums } from '../controller';
import { LoadingState, responseYaDiskAlbums } from '../model';

export const useGetAlbum = (): [
  LoadingState,
  responseYaDiskAlbums[],
  number,
  string[],
  Dispatch<SetStateAction<number>>,
  responseYaDiskAlbums[]
] => {
  const [loading, setLoading] = useState<LoadingState>(LoadingState.loading);
  const [albums, setAlbums] = useState<responseYaDiskAlbums[]>([]);
  const [years, setYears] = useState<string[]>([]);
  const [currentYear, setCurrentYear] = useState(0);
  const [currentAlbums, setCurrentAlbums] = useState(albums);

  useEffect(() => {
    const fetchData = async () => {
      const rawAlbums = await getAlbums();
      if (rawAlbums === null) {
        setLoading(LoadingState.error);
      } else {
        const years = new Set<string>();
        const albums: responseYaDiskAlbums[] = [];
        rawAlbums.sort((a, b) => (a.year > b.year ? -1 : 1));
        rawAlbums.forEach((album) => {
          years.add(album.year);
          albums.push(album);
        });
        setAlbums(albums);
        setYears(Array.from(years));
        setLoading(LoadingState.loaded);
      }
    };
    fetchData();
  }, []);

  useEffect(() => setCurrentAlbums(albums.filter((album) => parseInt(album.year) === currentYear)), [currentYear]);

  return [loading, albums, currentYear, years, setCurrentYear, currentAlbums];
};

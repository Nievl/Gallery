import { useEffect, useState } from "react";
import { getAlbums } from "../controller";
import { loading, responseYaDiskAlbums } from "../model";

export const useGetAlbum = (): [loading, responseYaDiskAlbums[]] => {
  const [loading, setLoading] = useState<loading>("loading");
  const [albums, setAlbums] = useState<responseYaDiskAlbums[]>([]);
  useEffect(() => {
    const a = async () => {
      const albums = await getAlbums();
      if (albums === null) {
        setLoading("error");
      } else {
        setAlbums(albums);
        setLoading("loaded");
      }
    };
    a();
  }, []);

  return [loading, albums];
};

import { useGetAlbum } from "../hooks/useGetAlbum";
import { responseYaDiskAlbums } from "../model";
import { Loading } from "./Loading";

type Props = {
  setAlbum: React.Dispatch<React.SetStateAction<responseYaDiskAlbums | null>>;
};

export const ListAlbums = ({ setAlbum }: Props) => {
  const [loading, albums] = useGetAlbum();

  return (
    <ul>
      {loading === "loading" && <Loading />}
      {loading === "loaded" &&
        albums.map((album) => (
          <li key={album.path} onClick={() => setAlbum(album)}>
            {album.name}
          </li>
        ))}
    </ul>
  );
};

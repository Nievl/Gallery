import { useGetAlbum } from "../hooks/useGetAlbum";
import { responseYaDiskAlbums } from "../model";
import { Loading } from "./Loading";

type Props = {
  setAlbum: React.Dispatch<React.SetStateAction<responseYaDiskAlbums | null>>;
};

export const ListAlbums = ({ setAlbum }: Props) => {
  const [loading, albums] = useGetAlbum();

  return (
    <ul className="list list-group">
      {loading === "loading" && <Loading />}
      {loading === "loaded" &&
        albums.map((album) => (
          <li
            key={album.path}
            onClick={() => setAlbum(album)}
            className="list-group-item"
          >
            {album.name}
          </li>
        ))}
    </ul>
  );
};

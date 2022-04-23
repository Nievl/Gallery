import { useGetAlbum } from "../hooks/useGetAlbum";
import { Album } from "./Album";
import { Loading } from "./Loading";

export const ListAlbums = () => {
  const [loading, albums] = useGetAlbum();

  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {loading === "loading" && <Loading />}

          {loading === "loaded" &&
            albums.map((album) => <Album album={album} />)}
        </div>
      </div>
    </div>
  );
};

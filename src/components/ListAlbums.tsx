import { LoadingState, responseYaDiskAlbums } from "../model";
import { Album } from "./Album";
import { Loading } from "./Loading";

type Props = {
  albums: responseYaDiskAlbums[];
  currentAlbums: responseYaDiskAlbums[];
  loading: LoadingState;
  year: number;
};

export const ListAlbums = ({ albums, loading, year, currentAlbums }: Props) => {
  if (loading === LoadingState.loading) {
    return <Loading />;
  }
  if (loading === LoadingState.error) {
    return <div>Ошибка загрузки альбомов</div>;
  } else {
    if (year === 0) {
      return (
        <>
          {albums.map((album) => (
            <Album album={album} />
          ))}
        </>
      );
    } else {
      if (currentAlbums.length === 0) {
        return <div>Нет альбомов за этот год</div>;
      }
      return (
        <>
          {currentAlbums.map((album) => (
            <Album album={album} />
          ))}
        </>
      );
    }
  }
};

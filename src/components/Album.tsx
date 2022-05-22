import { responseYaDiskAlbums } from "../model";
const path = (album: responseYaDiskAlbums) => `./thumbnails/${album.thumbnail}`;

export const Album = ({ album }: { album: responseYaDiskAlbums }) => {
  return (
    <div className="col" key={album.path}>
      <div className="card shadow-sm">
        <img src={path(album)} alt={album.name} />
        <div className="card-body">
          <h5 className="card-title">{album.name}</h5>
          <p className="card-text">{album.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a
                type="button"
                className="btn btn-sm btn-outline-secondary"
                href={album.path}
              >
                Перейти к альбому
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useGetImages } from "../hooks/useGetImages";
import { responseYaDiskAlbums } from "../model";
import { EmptyPlug } from "./EmptyPlug";
import { Loading } from "./Loading";

type Props = {
  album: responseYaDiskAlbums | null;
};

const Gallery = ({ album }: Props) => {
  const [loading, images] = useGetImages(album);

  if (loading === "loaded" && images.length === 0) {
    return <EmptyPlug />;
  }
  return (
    <section>
      {loading === "loading" && <Loading />}
      {loading === "loaded" && (
        <ImageGallery items={images} lazyLoad showBullets />
      )}
      {loading === "error" && <div>Error</div>}
    </section>
  );
};

export default Gallery;

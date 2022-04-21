import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { loading } from "../model";
import { EmptyPlug } from "./EmptyPlug";
import { Loading } from "./Loading";

type Props = {
  images: ReactImageGalleryItem[];
  loading: loading;
};

const Gallery = ({ images, loading }: Props) => {
  if (loading === "success" && images.length === 0) {
    return <EmptyPlug />;
  }
  return (
    <section>
      {loading === "loading" && <Loading />}
      {loading === "success" && <ImageGallery items={images} lazyLoad showBullets/>}
      {loading === "error" && <div>Error</div>}
    </section>
  );
};

export default Gallery;

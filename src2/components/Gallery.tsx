import { memo, useRef, useState } from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useGetImages } from "../hooks/useGetImages";
import { image, responseYaDiskAlbums } from "../model";
import { EmptyPlug } from "./EmptyPlug";
import { Loading } from "./Loading";

type Props = {
  album: responseYaDiskAlbums | null;
};

type ReactImageGalleryItem1 = ReactImageGalleryItem & {
  handleImageLoaded: (event: any, original: string) => void;
  isFullscreen: Boolean;
  onImageError: () => void;
};

const Gallery = ({ album }: Props) => {
  const [loading, images] = useGetImages(album);
  const galeryRef = useRef<ImageGallery>(null);
  const [link, setLink] = useState("");
  const onclick = () => {
    if (galeryRef.current !== null) {
      const index = galeryRef.current.getCurrentIndex();
      const image = images[index] as image;
      setLink(image.dowloadPath);
    }
  };

  if (loading === "loaded" && images.length === 0) {
    return <EmptyPlug />;
  }
  return (
    <div className="card">
      {loading === "loading" && <Loading />}
      {loading === "loaded" && (
        <>
          <ImageGallery
            items={images}
            lazyLoad
            showBullets
            ref={galeryRef}
            // renderItem={(item: ReactImageGalleryItem) => (
            //   <Item {...(item as ReactImageGalleryItem1)} />
            // )}
          />
          <a onClick={onclick} className="btn btn-success" href={link}>
            скачать
          </a>
        </>
      )}
      {loading === "error" && <div>Error</div>}
    </div>
  );
};

export default Gallery;

const Item = memo(
  ({
    description,
    fullscreen, // fullscreen version of img
    isFullscreen,
    onImageError,
    original,
    originalAlt,
    originalHeight,
    originalWidth,
    originalTitle,
    sizes,
    srcSet,
  }: ReactImageGalleryItem1) => {
    const itemSrc = isFullscreen ? fullscreen || original : original;

    return (
      <>
        <img
          className="image-gallery-image"
          src={itemSrc}
          alt={originalAlt}
          srcSet={srcSet}
          height={originalHeight}
          width={originalWidth}
          sizes={sizes}
          title={originalTitle}
          onError={onImageError}
        />
        {description && (
          <span className="image-gallery-description">{description}</span>
        )}
      </>
    );
  }
);

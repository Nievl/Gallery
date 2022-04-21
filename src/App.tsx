import { useEffect, useState } from "react";
import { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Gallery from "./components/Gallery";
import { useFetch } from "./hooks/getAlbum";

const App = () => {
  const [loading, images] = useFetch();
  return (
    <>
      <header>Gallery</header>
      <Gallery images={images} loading={loading} />
      <footer>&copy;Costime 2022</footer>
    </>
  );
};

export default App;

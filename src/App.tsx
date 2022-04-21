import { useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import Gallery from "./components/Gallery";
import { ListAlbums } from "./components/ListAlbums";
import { responseYaDiskAlbums } from "./model";

const App = () => {
  const [album, setAlbum] = useState<responseYaDiskAlbums | null>(null);
  return (
    <>
      <header>Gallery</header>
      <ListAlbums setAlbum={setAlbum} />
      <Gallery album={album} />
      <footer>&copy;Costime 2022</footer>
    </>
  );
};

export default App;

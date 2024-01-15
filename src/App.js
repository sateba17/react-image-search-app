import { useState } from "react";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";

function App() {
  const [imagesResult, setImagesResult] = useState([]);
  const [pages, setPages] = useState(1);

  const handleSubmit = async (value) => {
    const images = await searchImages(value, pages);
    setImagesResult(images);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={imagesResult} />
    </div>
  );
}

export default App;

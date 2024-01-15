import "./ImageList.css";
import ImageShow from "./ImageShow";

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });
  if (images.length > 0) {
    return (
      <div>
        <div className="image-list">{renderedImages}</div>
        <button className="btn-load">Load More...</button>
      </div>
    );
  }
}

export default ImageList;

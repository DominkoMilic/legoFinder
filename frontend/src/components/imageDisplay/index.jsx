import "./imageDisplay.css";

function ImageDisplay({ image }) {
  return (
    <div className="image-container">
      {image && <img src={image} alt="requested image" />}
    </div>
  );
}

export default ImageDisplay;

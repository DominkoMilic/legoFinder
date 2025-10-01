import "./selectImageButton.css";

function SelectImageButton({ setSelectedFile, setImage }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="select-file-button">
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        accept=".jpg,.jpeg,.png"
        onChange={handleFileChange}
      />

      <button onClick={() => document.getElementById("fileInput").click()}>
        Select Image
      </button>
    </div>
  );
}

export default SelectImageButton;

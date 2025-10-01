import "./predictButton.css";

function PredictButton({ selectedFile, setResult, setIsPredictionLoading }) {
  const handleUpload = async () => {
    setIsPredictionLoading(true);

    if (!selectedFile) return alert("Please select a file first!");

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(data);
      setIsPredictionLoading(false);
    } catch (err) {
      console.error("Error uploading image:", err);
    }
  };

  return (
    <div className="predict-button">
      <button onClick={handleUpload} disabled={!selectedFile}>
        Predict
      </button>
    </div>
  );
}

export default PredictButton;

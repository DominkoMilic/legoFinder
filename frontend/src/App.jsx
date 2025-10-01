import "./App.css";
import SelectImageButton from "./components/selectImageButton";
import PredictButton from "./components/predictButton";
import ImageDisplay from "./components/imageDisplay";
import { useState } from "react";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);
  const [image, setImage] = useState(null);
  const [isPredictionLoading, setIsPredictionLoading] = useState(false);

  return (
    <div className="main-container">
      <div>
        <ImageDisplay image={image} />
      </div>

      <div>
        <SelectImageButton
          setSelectedFile={setSelectedFile}
          setImage={setImage}
        />
      </div>

      <div>
        <PredictButton
          selectedFile={selectedFile}
          setResult={setResult}
          setIsPredictionLoading={setIsPredictionLoading}
        />
      </div>

      <div className="result-container">
        {(isPredictionLoading && "Waiting for prediction...") ||
          (result && (
            <div>
              <p>{result.answer}</p>
            </div>
          )) ||
          "Prediction"}
      </div>
    </div>
  );
}

export default App;

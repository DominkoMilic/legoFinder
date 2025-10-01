import os
import json
from flask import Flask, request, jsonify
from dotenv import load_dotenv
from flask_cors import CORS
from google import genai
from google.genai import types

load_dotenv()
app = Flask(__name__)
CORS(app)

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

with open("sets.json") as f:
    sets_mapping = json.load(f)

def extract_character_name(text_output):
    if text_output:
        return text_output.split()[0]
    return None

@app.route("/predict", methods=["POST"])
def predict():
    file = request.files["image"]
    image_bytes = file.read()

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=[
            types.Part.from_bytes(data=image_bytes, mime_type="image/jpeg"),
            "Which LEGO minifigure is this, i only need it's name?"
        ]
    )

    text_output = response.text
   
    return jsonify({
        "answer": text_output
    })

if __name__ == "__main__":
    app.run(debug=True)

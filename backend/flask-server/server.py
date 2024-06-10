from flask import Flask, jsonify, request
from flask_cors import CORS
import numpy as np
import pickle

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000", "supports_credentials": True}})

def load_model(file_path):
    loaded_model = pickle.load(open(file_path, 'rb'))
    return loaded_model

def make_predictions(model, input_array):
    input_array = np.array(input_array).reshape(1, -1)
    predictions = model.predict(input_array)
    return predictions

@app.route('/predict', methods=['GET', 'POST'])
def index():
    if request.method == 'GET':
        model_file_path = '../../ML/finalized_model.sav'
        loaded_model = load_model(model_file_path)

        # Use a hardcoded input_array [1, 2, 3]
        input_data = [2, 4, 3]

        predictions = make_predictions(loaded_model, input_data)
        return jsonify({'predictions': predictions.tolist()})

    return "Hello, this is the index route!"

if __name__ == "__main__":
    app.run(debug=True)

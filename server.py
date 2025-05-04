from FuturLearn_main.RAG.recommendation import get_recommendations
from flask import Flask, request, jsonify
from flask_cors import CORS  # ← CORS support
import numpy as np
import sys
import os

# Add project root to sys.path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

# Import your recommendation logic

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # ← Allow requests from all origins (for dev)


@app.route('/', methods=['GET'])
def home():
    return jsonify({'message': 'Server is running'}), 200


@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.json
    scores = data.get('scores')
    interest = data.get('interest')
    career_goal = data.get('career_goal')

    if not scores or not interest or not career_goal:
        return jsonify({'error': 'Missing input data'}), 400

    try:
        recommendations, learning_path = get_recommendations(
            scores, interest, career_goal)
        return jsonify({
            'recommendations': recommendations,
            'learning_path': learning_path
        }), 200
    except Exception as e:
        print("Error during recommendation:", e)
        return jsonify({'error': 'Internal server error'}), 500


if __name__ == '__main__':
    # ← Accessible from all interfaces
    app.run(debug=True, host="0.0.0.0", port=5000)

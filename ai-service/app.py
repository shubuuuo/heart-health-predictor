from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler
import pickle  # Optional: For saving/loading trained model
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend/backend requests

# Mock training data (synthetic; in production, load from CSV like UCI Heart Disease dataset)
# Features: [age, cholesterol (mg/dL), bloodPressureTop (systolic), familyHistory (0: no, 1: yes)]
# Labels: 0 (low risk), 1 (high risk)
X_train = np.array([
    [40, 180, 110, 0],   # Low risk
    [60, 250, 140, 1],   # High risk
    [50, 200, 120, 0],   # Low risk
    [55, 220, 130, 1],   # High risk
    [45, 190, 115, 0],   # Low risk
    [65, 260, 145, 1],   # High risk
    [48, 210, 125, 0],   # Moderate, but labeled low
    [58, 230, 135, 1],   # High risk
    [42, 185, 112, 0],   # Low risk
    [62, 240, 142, 1]    # High risk
])

y_train = np.array([0, 1, 0, 1, 0, 1, 0, 1, 0, 1])  # Binary labels

# Train the model (simple logistic regression)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)

model = LogisticRegression(random_state=42)
model.fit(X_train_scaled, y_train)

# Optional: Save model for reuse (uncomment if needed)
# with open('heart_model.pkl', 'wb') as f:
#     pickle.dump((model, scaler), f)

# Optional: Load model (if saved previously)
# if os.path.exists('heart_model.pkl'):
#     with open('heart_model.pkl', 'rb') as f:
#         model, scaler = pickle.load(f)

@app.route('/predict', methods=['POST'])
def predict_risk():
    try:
        data = request.json
        if not all(key in data for key in ['age', 'cholesterol', 'bloodPressureTop', 'familyHistory']):
            return jsonify({'error': 'Missing required fields: age, cholesterol, bloodPressureTop, familyHistory'}), 400

        # Prepare features
        features = np.array([[data['age'], data['cholesterol'], data['bloodPressureTop'], data['familyHistory']]])
        
        # Scale features (same as training)
        features_scaled = scaler.transform(features)
        
        # Predict probability of high risk (class 1)
        risk_prob = model.predict_proba(features_scaled)[0][1]  # Probability of class 1
        risk_percentage = round(risk_prob * 100, 2)  # Convert to percentage

        return jsonify({'risk': risk_percentage})

    except Exception as e:
        print(f'Prediction error: {e}')
        return jsonify({'error': 'Failed to predict risk'}), 500

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'AI Service Running', 'model': 'Logistic Regression (Mock)'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
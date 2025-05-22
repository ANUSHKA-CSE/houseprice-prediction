
from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('app.html')

@app.route('/predict_home_price', methods=['POST'])
def predict_home_price():
    return jsonify({'estimated_price': 56.34})

if __name__ == '__main__':
    app.run(debug=True)

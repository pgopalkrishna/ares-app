from flask import Flask, request, jsonify
from business import getdata

app= Flask(__name__)

@app.route('/')
def hello_world():
   return 'Hello World'

@app.route('/api')
def api():
   data = getdata()
   data = {"names": data}
   return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True, port=8000, host='0.0.0.0')
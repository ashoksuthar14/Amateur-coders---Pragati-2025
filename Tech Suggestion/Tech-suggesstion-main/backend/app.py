from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import json
import os
import json
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app, resources={
    r"/*": {
        "origins": ["http://localhost:3000"],
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type"]
    }
})

# Load environment variables
load_dotenv()

# Get API key from environment variable
LLAMA_API_KEY = os.getenv('LLAMA_API_KEY')
if not LLAMA_API_KEY:
    raise ValueError("LLAMA_API_KEY environment variable is not set")

@app.route('/api/get-teaching-suggestion', methods=['POST', 'OPTIONS'])
def get_teaching_suggestion():
    if request.method == 'OPTIONS':
        return '', 204

    try:
        data = request.get_json()
        if not data:
            return jsonify({"success": False, "error": "No data provided"}), 400

        required_fields = ['numStudents', 'level', 'learningStyle', 'subject']
        for field in required_fields:
            if field not in data:
                return jsonify({"success": False, "error": f"Missing required field: {field}"}), 400

        num_students = data['numStudents']
        level = data['level']
        learning_style = data['learningStyle']
        subject = data['subject']
        custom_query = data.get('customQuery', '')

        # Construct the prompt for Llama
        prompt = f"""As an expert educational consultant, provide teaching suggestions for the following scenario:
        Number of Students: {num_students}
        Student Level: {level}
        Learning Style: {learning_style}
        Subject: {subject}
        Additional Requirements: {custom_query}

        Please provide specific teaching strategies, activities, and methods that would be most effective for this group,
        focusing on interactive and engaging approaches."""

        print(f"Making API request with prompt: {prompt}")

        api_url = "https://openrouter.ai/api/v1/chat/completions"
        print(f"Attempting to connect to: {api_url}")
        print(f"Using API Key: {LLAMA_API_KEY}")

        try:
            # First test the connection
            test_connection = requests.get("https://openrouter.ai/")
            test_connection.raise_for_status()
            print("Connection test successful")
        except requests.exceptions.RequestException as e:
            print(f"Connection test failed: {str(e)}")
            return jsonify({
                "success": False,
                "error": f"Cannot connect to API server. Please check your internet connection. Error: {str(e)}"
            }), 503

        # If connection test passes, make the actual API call
        # Debug: Print API key (first few characters)
        print(f"API Key starts with: {LLAMA_API_KEY[:10]}...")
        
        headers = {
            "Authorization": f"Bearer {LLAMA_API_KEY}",
            "Content-Type": "application/json",
            "HTTP-Referer": "http://localhost:3000",
            "X-Title": "Teacher Suggestion API"
        }
        
        # Debug: Print headers
        print("Request headers:", headers)
        
        request_data = {
            "model": "meta-llama/llama-4-maverick:free",
            "messages": [
                {
                    "role": "system",
                    "content": "You are a helpful teaching assistant that provides suggestions to teachers."
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            "temperature": 0.7,
            "max_tokens": 800
        }

        # Debug: Print request data
        print("Request data:", json.dumps(request_data, indent=2))

        response = requests.post(
            url=api_url,
            headers=headers,
            data=json.dumps(request_data)
        )
        
        print(f"API Response status code: {response.status_code}")
        print(f"API Response headers: {response.headers}")
        
        try:
            response_json = response.json()
            print(f"API Response body: {json.dumps(response_json, indent=2)}")
        except json.JSONDecodeError:
            print(f"Raw API Response: {response.text}")
            
        if response.status_code != 200:
            error_message = response_json.get('error', {}).get('message') if 'error' in response_json else 'Unknown error'
            return jsonify({
                "success": False,
                "error": f"API request failed: {error_message} (Status code: {response.status_code})"
            }), response.status_code
        else:
            suggestion = response_json
            print(f"API Response: {suggestion}")
            return jsonify({"success": True, "suggestion": suggestion})

    except requests.exceptions.RequestException as e:
        error_message = f"Network error: {str(e)}"
        print(error_message)
        return jsonify({"success": False, "error": error_message}), 503
    except Exception as e:
        error_message = f"Server error: {str(e)}"
        print(error_message)
        return jsonify({"success": False, "error": error_message}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)

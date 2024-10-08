// Please note that the repository was revamped on 08/09/2024 16:21 due to a submodule repo present in one of the directory, the original commits for the original repo was at on 08/09/2024
at around 2:09 am

Test Instructions Generator A web application that leverages Google Cloud Vision and Gemini APIs to generate test cases from images and textual context.

Tech Stack Frontend: React

Backend: Node.js

APIs: Google Cloud Vision API Google Gemini API

Overview

The Test Instructions Generator is designed to streamline the process of generating test cases from visual and textual inputs. The application performs the following steps:

Image and Text Input: Users provide images and associated textual context via the website interface.

Text Extraction: Images are processed using the Google Cloud Vision API to extract text.

Test Case Generation: Extracted text is then passed to the Google Gemini API to generate test cases based on the provided context and features.

Features

Image Text Extraction: Converts text in images to editable text using Google Cloud Vision.

Automated Test Case Generation: Utilizes Google Gemini API to create detailed test cases from extracted text and user-provided context.

Setup

Prerequisites:

Node.js (v14 or higher)

React

Google Cloud Vision API Key

Google Gemini API Key

Installation: Clone the Repository

```
git clone https://github.com/21-Vaibhav/test-instructions-generator.git
```

Backend Setup Navigate to the backend directory:
```bash
cd backend
```

Install dependencies:
```bash
npm install
```
Create a .env file and add your Google Cloud Vision and Gemini API keys:
```
env
GOOGLE_CLOUD_VISION_API_KEY=your_google_cloud_vision_api_key
GOOGLE_GEMINI_API_KEY=your_google_gemini_api_key
```
Start the backend server:
```bash
npm start
```
Frontend Setup Navigate to the frontend directory:
```bash
cd ../frontend
```
Install dependencies:
```bash
npm install
```
Start the frontend server:
```bash
npm start
```
Access the Application

Open your web browser and go to http://localhost:3000 to use the Test Instructions Generator.

Usage

Upload Images: Use the file upload feature to submit images containing text.

Enter Context: Provide any additional text context that may help in generating relevant test cases.

Generate Test Cases: Click on the generate button to process the input and receive the generated test cases.

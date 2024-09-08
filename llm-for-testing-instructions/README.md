<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
Test Instructions Generator
A web application that leverages Google Cloud Vision and Gemini APIs to generate test cases from images and textual context.

Tech Stack
Frontend: React

Backend: Node.js

APIs:
Google Cloud Vision API
Google Gemini API

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

Installation:
Clone the Repository
```bash
git clone https://github.com/21-Vaibhav/test-instructions-generator.git
```

Backend Setup
Navigate to the backend directory:
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

Frontend Setup
Navigate to the frontend directory:
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
>>>>>>> b9c34b7dc87c437db65a5231cd4d21b0ec0ca9b9

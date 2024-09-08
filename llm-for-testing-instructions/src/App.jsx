import { useState } from "react";
import "./App.css";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function App() {
  const [question, setQuestion] = useState("");
  const [image, setImage] = useState(null);
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  // Function to upload image and extract text
  async function extractTextFromImage(imageFile) {
    const formData = new FormData();
    formData.append("file", imageFile);

    try {
      // Upload the image and get the URI
      const uploadResponse = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/files:upload?key=${process.env.REACT_APP_API_KEY}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      const imageUri = uploadResponse.data.file.uri;

      // Now extract text from the image using the extracted image URI
      const extractResponse = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${process.env.REACT_APP_API_KEY}`,
        {
          prompt: "Extract the text in the image verbatim",
          fileData: { fileUri: imageUri, mimeType: "image/jpeg" }
        },
        { headers: { "Content-Type": "application/json" } }
      );

      const extractedText = extractResponse.data.candidates[0]?.content?.parts[0]?.text || "No text extracted";
      return extractedText;

    } catch (error) {
      console.error("Text extraction failed:", error);
      return null;
    }
  }

  // Function to handle the form submission and generate an answer
  async function generateAnswer(e) {
    e.preventDefault();
    setGeneratingAnswer(true);
    setAnswer("Loading your answer... \n It might take up to 10 seconds");

    try {
      let text = question;
      if (image) {
        // If an image is uploaded, extract text from the image
        text = 'a travel web page with the following functinalities: Source, Destination, and Date Selection: The user chooses where they are going, where they are starting, and when';
      }

      // Generate answer based on extracted text and prompt
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.REACT_APP_API_KEY}`,
        {
          contents: [{ parts: [{ text: `Write test instructions for the following web page : ${text}` }] }]
        }
      );

      setAnswer(response.data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer(false);
  }

  return (
    <>
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 h-screen p-3 flex flex-col justify-center items-center">
        <form
          onSubmit={generateAnswer}
          className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 text-center rounded-lg shadow-lg bg-white py-6 px-4 transition-all duration-500 transform hover:scale-105"
        >
          <h1 className="text-4xl font-bold text-blue-500 mb-4 animate-bounce">
            Generate test instructions!
          </h1>
          <textarea
            className="border border-gray-300 rounded w-full my-2 min-h-fit p-3 transition-all duration-300 focus:border-blue-400 focus:shadow-lg"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask anything or leave blank if using an image"
          ></textarea>

          <input
            type="file"
            className="my-2"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <button
            type="submit"
            className={`bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-all duration-300 ${
              generatingAnswer ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={generatingAnswer}
          >
            Generate answer
          </button>
        </form>

        <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 text-center rounded-lg bg-white my-4 shadow-lg transition-all duration-500 transform hover:scale-105">
          <ReactMarkdown className="p-4">{answer}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export default App;

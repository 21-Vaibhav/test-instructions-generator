const express = require("express");
const multer = require("multer");
const path = require("path");
const { ImageAnnotatorClient } = require("@google-cloud/vision");
const axios = require("axios");
const cors = require("cors");

// Set up Google Cloud Vision API
const visionClient = new ImageAnnotatorClient({
  keyFilename: path.join(__dirname, "service-api.json"),
});

// Initialize Express
const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for cross-origin requests

// Multer setup to handle file uploads
const upload = multer({ dest: "uploads/" });

// Helper function to analyze images using Google Vision API
async function analyzeImage(filePath) {
  const [result] = await visionClient.labelDetection(filePath);
  const labels = result.labelAnnotations.map((label) => label.description);
  return labels.join(", ");
}

// Helper function to extract text using Google Vision API
async function extractTextFromImage(filePath) {
  const [result] = await visionClient.textDetection(filePath);
  const text = result.textAnnotations[0]?.description || "No text detected";
  return text;
}

// Helper function to generate testing instructions using Google PaLM API
async function generateInstructions(text) {
  const response = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.REACT_APP_API_KEY}`,
    {
      contents: [
        {
          parts: [
            { text: `Write test instructions for the following text: ${text}` },
          ],
        },
      ],
    },
    { headers: { "Content-Type": "application/json" } }
  );

  return response.data.candidates[0].content.parts[0].text;
}

// POST route to handle image uploads and process with Vision API & GPT
app.post("/upload", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  try {
    const context = req.body.context || "";
    const image = req.file;

    // Analyze the image (extract text)
    const extractedText = await extractTextFromImage(image.path);

    // Generate instructions based on the extracted text and context
    const instructions = await generateInstructions(extractedText || context);

    res.json({ instructions });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to process image." });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

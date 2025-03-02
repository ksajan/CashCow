const { GoogleGenerativeAI, SchemaType } = require("@google/generative-ai");
const fs = require("fs").promises; // Use fs.promises for async file reading

// Set the environment variable for the GEMINI_API_KEY
const GEMINI_API_KEY = "AIzaSyB-1xW6vMDz5NntvAer45hauCjBiyi4qcQ";

// Configure the API key

const ReceiptCategory = Object.freeze({
  Food: "Food",
  Tech: "Tech",
  Groceries: "Groceries",
  Clothing: "Clothing",
  Entertainment: "Entertainment",
  Utilities: "Utilities",
  Transportation: "Transportation",
  Healthcare: "Healthcare",
  Other: "Other",
});

// const schema = {
//   merchantName: SchemaType.STRING,
//   date: SchemaType.OBJECT,
//   time: SchemaType.STRING,
//   items: {
//     description: "List of items purchased",
//     type: SchemaType.ARRAY,
//     properties: {
//         name: {
//           type: SchemaType.STRING,
//           description: "Name of the item",
//           nullable: false,
//         },
//         quantity: {
//           type: SchemaType.NUMBER,
//           description: "Quantity of the item",
//           nullable: false,
//         },
//         price: {
//           type: SchemaType.NUMBER,
//           description: "Price of the item",
//           nullable: false,
//         },
//       },
//     }
//   },
//   total: SchemaType.NUMBER,
//   tax: SchemaType.NUMBER,
//   paymentMethod: SchemaType.STRING,
//   analytics: {
//     categories: {
//       type: SchemaType.ARRAY,
//       itemType: {
//         category: SchemaType.STRING, // Use STRING instead of ReceiptCategory object
//         amount: SchemaType.NUMBER,
//       },
//     },
//   },
// };
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY); // Make sure you have set the GEMINI_API_KEY environment variable
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  // generationConfig: {
  //   responseMimeType: "application/json",
  //   responseSchema: schema,
  // },
});

async function processReceiptWithGemini(imagePath) {
  try {
    const imageBuffer = await fs.readFile(imagePath);
    const imageBase64 = imageBuffer.toString("base64");

    const mimeType = getMimeTypeFromImagePath(imagePath); // Add this function (see below)

    if (!mimeType) {
      throw new Error("Could not determine MIME type for the image.");
    }

    const imagePart = {
      inlineData: {
        data: imageBase64,
        mimeType: mimeType,
      },
    };

    const prompt = `Extract all the information from this receipt, including store name, date, time, items purchased, prices, subtotal, tax, and total amount. Respond in JSON format.

      Do not include any additional text or explanations or code backticks. The JSON should have the following structure: 
      Output: 
      {
        "merchantName": "",
        "date": "",
        "time": "",
        "items": [
          {
            "name": "",
            "price": 0
          }
        ],
        "total": 0,
        "tax": 0,
        "paymentMethod": ""
      }
`;

    const result = await model.generateContent([prompt, imagePart]);
    const response = await result.response;
    const text = response.text(); // This should now get the model's text response
    // console.log("Gemini's output:", text); // Log the raw output for debugging
    const cleanedText = text.replace(/```json/g, "").replace(/```/g, ""); // Clean the output

    let parsedData;
    try {
      parsedData = JSON.parse(cleanedText); // Attempt to parse Gemini's output as JSON immediately
    } catch (jsonError) {
      console.error("Gemini's output was not valid JSON. Raw output:", text);
      throw new Error(
        "Gemini API returned invalid JSON. Check Gemini's output format.",
      );
    }

    return parsedData;
  } catch (error) {
    console.error("Error processing receipt with Gemini:", error);
    throw error; // Re-throw to be caught by the caller
  }
}

function getMimeTypeFromImagePath(imagePath) {
  const extension = imagePath.split(".").pop().toLowerCase();
  switch (extension) {
    case "jpg":
    case "jpeg":
      return "image/jpeg";
    case "png":
      return "image/png";
    case "gif":
      return "image/gif";
    case "webp":
      return "image/webp";
    default:
      return null; // Or throw an error if you want to be strict
  }
}

async function main() {
  const imagePath = "walmart.jpeg"; // Replace with the actual path

  try {
    const receiptData = await processReceiptWithGemini(imagePath);
    console.log(JSON.stringify(receiptData, null, 2)); // Properly formatted JSON output

    //Perform Analytics
    const analytics = await analyzeSpends(receiptData.items);
    receiptData.analytics = analytics.analytics;

    console.log("Added Analytics:", JSON.stringify(receiptData, null, 2));
    console.log("Receipt processed successfully.");
  } catch (error) {
    console.error("Failed to process receipt:", error);
  }
}

async function analyzeSpends(recieptData) {
  console.log("Analyzing spends...", recieptData);
  // Perform your analytics here using Gemini
  promts = `Categorize the following items into different categories: Food, Tech, Groceries, Clothing, Entertainment, Utilities, Transportation, Healthcare, Fuel, Commute, Travel, Personal Care, Bills, Household, Fees, Fitness, Other. 
    Given the structure of the reciptData as follows:
      items: [
        {
          name: "item name",
          price: 0
        }
      ]
    input: ${JSON.stringify(recieptData)}
    Provide a JSON response with the category and the total amount spent in that category with the following structure:
    output:
    analytics: {
        category: 
          amount: SchemaType.NUMBER,
        },

    Note: Do not include categories that have 0 amount. Also do not include any additional text or explanations or code backticks. 
    `;
  const result = await model.generateContent([promts]);
  const response = await result.response;
  // console.log("Gemini's output:", response); // Log the raw output for debugging
  const text = response.text(); // This should now get the model's text response
  // console.log("Gemini's output:", text); // Log the raw output for debugging
  const cleanedText = text.replace(/```json/g, "").replace(/```/g, ""); // Clean the output
  let parsedData;
  try {
    parsedData = JSON.parse(cleanedText); // Attempt to parse Gemini's output as JSON immediately
  } catch (jsonError) {
    console.error("Gemini's output was not valid JSON. Raw output:", text);
    throw new Error(
      "Gemini API returned invalid JSON. Check Gemini's output format.",
    );
  }
  return parsedData;
}

// Call the main function (uncomment when you are ready to run)
main();

// You might want to export processReceiptWithGemini for use elsewhere
// module.exports = { processReceiptWithGemini };

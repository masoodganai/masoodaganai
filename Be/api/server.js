const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");

const app = express();

// Validate environment variables
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error("Error: EMAIL_USER or EMAIL_PASS environment variables are not set!");
  process.exit(1);
}

// Use CORS middleware to allow cross-origin requests
app.use(cors({
  origin: "https://masoodaganai.vercel.app", // Correct domain for frontend
  methods: "GET,POST", // Allow only GET and POST methods
  credentials: true, // Allow cookies if needed
}));

// Middleware to parse the body of requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a route to handle the contact form submission
app.post("/send-email", async (req, res) => {
  const { name, email, phoneNumber, subject, message } = req.body;

  // Check if all fields are provided
  if (!name || !email || !phoneNumber || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Set up the transporter for Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail", // Use Gmail's SMTP server
    auth: {
      user: process.env.EMAIL_USER, // Make sure EMAIL_USER is set in the .env file
      pass: process.env.EMAIL_PASS, // Make sure EMAIL_PASS is set in the .env file
    },
  });

  // Email options
  const mailOptions = {
    from: `"${name}" <${email}>`, // Sender's email and name
    to: "developermasoodganai@gmail.com", // Your email where the message will be sent
    subject: `Contact Form Submission from ${name}`,
    text: `Message from ${name} (${email})\n\nPhone Number: ${phoneNumber}\n\nSubject: ${subject}\n\nMessage:\n${message}`,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(`Error sending email: ${error.message}`, { stack: error.stack });
    return res.status(500).json({
      error: "Failed to send email. Please try again later.",
      details: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

// Export the app for deployment
module.exports = app;

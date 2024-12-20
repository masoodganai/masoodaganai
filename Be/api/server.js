const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");  // Import the cors package

const app = express();

// Use CORS middleware to allow cross-origin requests
app.use(cors({
  origin: "https://masoodaganai.vercel.app/contact", // Allow requests only from your frontend (React app)
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
    from: email, // Sender's email
    to: "developermasoodganai@gmail.com", // Your email where the message will be sent
    subject: `Contact Form Submission from ${name}`,
    text: `Message from ${name} (${email})\n\nPhone Number: ${phoneNumber}\n\nSubject: ${subject}\n\nMessage:\n${message}`, // The email content
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email: ", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;


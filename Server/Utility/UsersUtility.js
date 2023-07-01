import { v4 as uuidv4 } from 'uuid';
import nodemailer from 'nodemailer';
import UserModel from "../Models/UserModels.js";

// Generate a unique ID with serial number
// export const generateUniqueID = async () => {
//   // Get the latest user with the highest serial number
//   const latestUser = await UserModel.findOne().sort({ serialNumber: -1 });
//   const latestSerialNumber = latestUser ? latestUser.serialNumber : 0;

//   // Generate a unique ID with serial number
//   const uniqueID = `${uuidv4()}-${latestSerialNumber + 1}`;
// console.log("Uniq ID", uniqueID);
//   return uniqueID;
// };

export const generateUniqueID = async () => {
    // Get the latest user with the highest serial number
    const latestUser = await UserModel.findOne().sort({ serialNumber: -1 });
    const latestSerialNumber = latestUser ? latestUser.serialNumber : 0;
  
    // Generate a unique timestamp as a string
    const timestamp = Date.now().toString();
  
    // Generate a numeric-only unique ID with serial number
    const uniqueID = parseInt(timestamp + (latestSerialNumber + 1), 10);
    console.log("Uniq ID", uniqueID);
  
    return uniqueID;
  };
  

// Generate a unique password
export const generateUniquePassword = () => {
  const passwordLength = 6;
  const allowedCharacters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
    password += allowedCharacters.charAt(randomIndex);
  }

  return password;
};

// Send email with user's login details
export const sendEmail = async (email, userId, password) => {
  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "YOUR_MAILTRAP_USERNAME",
      pass: "YOUR_MAILTRAP_PASSWORD",
    },
  });

  // Create the email message
  const message = {
    from: "YOUR_EMAIL_ADDRESS",
    to: email,
    subject: "Login Details",
    text: `Your login details:\nUser ID: ${userId}\nPassword: ${password}`,
  };

  // Send the email
  await transporter.sendMail(message, (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

import UserModel from "../Models/UserModels.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import nodemailer from "nodemailer";
import { generateUniqueID, generateUniquePassword, sendEmail } from "../Utility/UsersUtility.js";


const JWT_SECRET =
  ";li]r885949-tg89fdm0omxturomji7fit,i9e['rljhduskoojhijuurr;/.],06y3yf,fjyd1";

// creating a User
export const createUser = async (req, res) => {
  // const newUser = new UserModel(req.body);
  const { name, roll, email, department, semester } = req.body;
  const existingUser = await UserModel.findOne({ email });
  // console.log(existingUser);
  // console.log("bcryPass", newUser);
  try {
    // if (existingUser) {
    //   return res.status(400).json({ status: "User already exists" });
    // } else {
      
      // Generate a unique ID with serial number
      const userId = await generateUniqueID();
      console.log("Created UserID: ", userId);
      // Generate a unique password
      const password = generateUniquePassword();
      console.log("Created Password: ", password);

      // Hash the password
      const hashedPassword = await bcryptjs.hash(password, 6);
      console.log("Hashed Password: ", hashedPassword);

      const newUser = new UserModel({
        userId,
        name,
        roll,
        email,
        department,
        semester,
        password: hashedPassword
      });
      console.log("New User: ", newUser);

      await newUser.save();

      // Send the user's login details to their email
      await sendEmail(email, userId, password);

      return res.status(200).json({ status: "success", userId, password });
    // }
  } catch (error) {
    res.status(500).json(error);
  }
};

// creating a User
// export const createUser = async (req, res) => {
//   const newUser = new UserModel(req.body);
//   const { userId, name, roll, email, password, department, semester } = req.body;
//   const existingUser = await UserModel.findOne({ userId });
//   console.log(userId, existingUser);
//   // Password
//   const bcryptedPassword = await bcryptjs.hash(password, 6);
//   newUser.password = bcryptedPassword;
//   // console.log("bcryPass", newUser);
//   try {
//     if (existingUser) {
//       return res.status(400).json({ status: "User already exists" });
//     } else {
//       // Generate a unique userID
//       // const userID = generateUserID();

//       // // Generate a unique password
//       // const password = generatePassword();

//       await newUser.save(); // Inserting the new user into the database
//       res.status(200).json({ status: "success" });
//     }
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// Login a user
export const loginUser = async (req, res) => {
  const { userId, password } = req.body;

  // console.log(req.body);

  const user = await UserModel.findOne({ userId });

  if (!user) {
    return res.status(201).json({ error: "User not found" });
  }
  if (await bcryptjs.compare(password, user.password)) {
    const token = jwt.sign({ userId: user.userId }, JWT_SECRET);

    if (res.status(201)) {
      return res.json({ status: "success", data: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "Invalid password" });
};

// Get auth data
export const getAuthData = async (req, res) => {
  const { token } = req.body;

  try {
    const user = jwt.verify(token, JWT_SECRET);
    const userId = user.userId;

    const authenticatedUser = await UserModel.findOne({ userId });
    console.log(authenticatedUser);

    res.status(200).json({ status: "success", data: authenticatedUser });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// Update a User
export const updateUser = async (req, res) => {
  const userId = req.params.id;
  // console.log(userId);
  const { name, email } = req.body;
  // console.log('Update User', name);
  try {
    const result = await UserModel.findByIdAndUpdate(
      userId,
      { $set: { name, email } },
      { new: true }
    );

    if (result.nModified === 0) {
      res.status(404).json({ message: "Document not found" });
    } else {
      res.status(200).json({ message: "Document updated successfully" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};


export const getUsers = async (req, res) => {
  try {
    const user = await UserModel.find({});
    if (user) {
      res.status(200).json({
        result: user,
        message: "Success",
      });
    } else {
      res.status(404).json("No such User");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

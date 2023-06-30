import UserModel from "../Models/UserModels.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET =
  ";li]r885949-tg89fdm0omxturomji7fit,i9e['rljhduskoojhijuurr;/.],06y3yf,fjyd1";

// creating a User
export const createUser = async (req, res) => {
  const newUser = new UserModel(req.body);
  const { userId, name, roll, email, password, department, semester } = req.body;
  const existingUser = await UserModel.findOne({ userId });
  // console.log(userId, existingUser);
  // Password
  const bcryptedPassword = await bcryptjs.hash(password, 6);
  newUser.password = bcryptedPassword;
  // console.log("bcryPass", newUser);
  try {
    if (existingUser) {
      return res.status(400).json({ status: "User already exists" });
    } else {
      // Generate a unique userID
      // const userID = generateUserID();

      // // Generate a unique password
      // const password = generatePassword();

      await newUser.save(); // Inserting the new user into the database
      res.status(200).json({ status: "success" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Login a user
export const loginUser = async (req, res) => {
  const { userId, password } = req.body;

  // console.log(req.body);

  const user = await UserModel.findOne({ userId });

  if (!user) {
    return res.status(201).json({ error: "User not found" });
  }
  if (await bcryptjs.compare(password, user.password)) {
    const token = jwt.sign({userId: user.userId}, JWT_SECRET);

    if (res.status(201)) {
      return res.json({status: 'success', data: token})
    } else {
      return res.json({error: "error"})
    }
  }
  res.json({status: "error", error: "Invalid password"});
};

// Get auth data
// export const getAuthData = async (req, res) => {
//   const {token} = req.body;

//   try {
//     const user = jwt.verify(token, JWT_SECRET);
//     // console.log(user);
//     const userId = user.userId;

//     const authenticatUser = await UserModel.findOne({ userId });
//     console.log(authenticatUser);

//     req.status(200).json({status: "success", data: authenticatUser})
//   } catch (error) {
//     res.status(500).json({"error": error})
//   }
// }

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

export const getUser = async (req, res) => {
  const userEmail = req.query.email;
  // console.log(userEmail);

  try {
    const user = await UserModel.findOne({ email: userEmail });
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

export const getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await UserModel.findById(userId);
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

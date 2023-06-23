import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // ensure the email field is unique
  },
  roll: {
    type: String,
  },
  department: {
    type: String,
  },
  semester: {
    type: String,
  },
});

const UserModel = mongoose.model("users", UserSchema);
export default UserModel;

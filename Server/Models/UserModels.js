import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
  },
  roll: {
    type: String,
    required: true
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    required: true,
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

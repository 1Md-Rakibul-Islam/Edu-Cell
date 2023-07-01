import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  serialNumber: {
    type: Number,
    required: true,
    default: 0,
  },
  name: {
    type: String,
    required: true,
  },
  roll: {
    type: String,
    required: true,
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
},
{timestamp: true}
);

const UserModel = mongoose.model("users", UserSchema);
export default UserModel;

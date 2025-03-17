// import { Schema, model } from "mongoose";
let mongoose = require("mongoose");
var jwt = require("jsonwebtoken");
const UserSchema = new mongoose.Schema({
  username: { type: "string", default: "" },
  email: { type: "string", default: "" },
  password: {
    type: "string",
    default: "",
    required: true,
  },
});
// UserSchema.methods.generateWebToken = async function () {
//   return await jwt.sign({ id: this.id }, "12345", { expiresIn: "30d" });
//   return next();
// };

const User = mongoose.model("User", UserSchema);
module.exports = User;

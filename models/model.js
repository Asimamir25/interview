// import { Schema, model } from "mongoose";
let mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
var jwt = require("jsonwebtoken");
const UserSchema = new Schema({
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

const User = model("User", UserSchema);
module.exports = User;

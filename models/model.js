let mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const TodoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const User = model("Task", TodoSchema);
module.exports = User;

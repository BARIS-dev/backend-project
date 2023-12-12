import { Schema, model } from "mongoose";

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
  lastname: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    min: 6,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 1024,
  },
  status: {
    enum: [
      "free",
      "premium",
      "premium-plus",
      "admin",
      "banned",
      "deleted",
      "unverified",
    ],
  },
  timestamps: true,
});

export const UserModel = model("User", userSchema);

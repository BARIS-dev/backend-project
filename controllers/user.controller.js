import { UserModel } from "../models/users.model.js";

export async function createUser(req, res) {
  try {
    const newUser = await UserModel.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      status: req.body.status,
    });
    res.status(201).json({
      message: "User created successfully.",
      data: newUser,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

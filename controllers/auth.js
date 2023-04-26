import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* REGISTER USER */
export const register = async (req, res) => {
  try {
    const {
      name,
      socialName,
      taxpayerRegister,
      zipCode,
      password,
      district,
      state,
      city,
      houseNumber,
      phone,
      email
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      socialName,
      taxpayerRegister,
      zipCode,
      password: passwordHash,
      district,
      state,
      city,
      houseNumber,
      phone,
      email
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
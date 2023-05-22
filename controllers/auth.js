import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const maxAge = 3 * 24 * 60 * 60;

// handle errors
const handleErrors = (err) => {
  let errors = { general: '' }

  // incorrect credentials
  if (err.message === 'incorrect credentials') {
    errors.general = 'incorrect credentials'
  }

  return errors
}

// Token Creation
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge
  })
}


/* REGISTER USER */
export const register_get = (req, res) => {
  res.send("registro de usuário")
};

export const register_post = async (req, res) => {
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
      email,
      registration
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
      email,
      registration
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const login_get = (req, res) => {
  //res.render("login")
  res.send("user login")
  console.log('login')
};

export const login_post = async (req, res) => {
  const { registration, password } = req.body

  try {
    const user = await User.login(registration, password)
    console.log("test2")
    const token = createToken(user._id)
    // alterar para https!!!
    res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000})
    res.status(200).json({ user: user._id})
  }
  catch (err) {
    console.log(err)
    const errors = handleErrors(err)
    res.status(400).json({errors})
  }
}
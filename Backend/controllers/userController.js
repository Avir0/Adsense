const User = require('../models/User');

const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const newUser = await User.create({ name, email, password, role });
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { registerUser };

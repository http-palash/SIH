const express = require('express');
const router = express.Router();
const User = require('../database/schema');
const cors = require('cors');

router.use(cors());
router.use(express.json());

// POST route for user registration
router.post('/register', async (req, res) => {
  try {
    const {
      name,
      mobile,
      aadhar,
      dropout_class,
      school_college,
      address,
      gender,
      religion,
      dropout_reasons,
      how_can_we_help,
      area,
      classes,
      reasons
    } = req.body;

    // Validation: Check if all required fields are present
    if (
      !name ||
      !mobile ||
      !aadhar ||
      !dropout_class ||
      !school_college ||
      !address ||
      !gender ||
      !religion ||
      !dropout_reasons ||
      !how_can_we_help ||
      !area ||
      !classes ||
      !reasons
    ) 
    {
      return res.status(422).json({ error: 'Please fill all the fields properly' });
    }

    // Check if the user already exists
    const userExist = await User.findOne({ mobile: mobile });

    if (userExist) {
      return res.status(422).json({ error: 'User already exists' });
    }

    // Create a new user instance and save it to the database
    const newUser = new User({
      name,
      mobile,
      aadhar,
      dropout_class,
      school_college,
      address,
      gender,
      religion,
      dropout_reasons,
      how_can_we_help,
      area,
      classes,
      reasons
    });

    const savedUser = await newUser.save();
    if (savedUser) {
      return res.status(201).json({ message: 'User registered successfully' });
    } else {
      return res.status(500).json({ error: 'Failed to register' });
    }
  } 
  catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// GET route to fetch all users
router.get('/getUsers', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

module.exports = router;

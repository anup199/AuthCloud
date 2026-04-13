const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const ApplyNow = require('../models/ApplyNow');

const SECRET_KEY = process.env.SECRET_KEY || "mysecretkey"; // Prefer .env

// Contact form route
router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ success: true, message: 'Form submitted!' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.json({ success: false, message: 'User not found' });
    }
    if (user.password !== password) {
      return res.json({ success: false, message: 'Invalid password' });
    }
    const token = jwt.sign(
      { userId: user._id, username: user.username },
      SECRET_KEY,
      { expiresIn: "1h" }
    );
    return res.json({ success: true, token });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});
 
// ApplyNow Form route
router.post('/applynow', async(req,res) =>{
    try{
        console.log(req.body);
        
        const {name, number,pannumber,mobileno,address,gender,dob,city,state,email,pincode} = req.body;
        const newApplyNow = new ApplyNow({name, number,pannumber,mobileno,address,gender,dob,city,state,email,pincode});
        await newApplyNow.save();
        res.status(201).json({success:true,message:'Form Submitted'});
    }catch(err)
    {
        res.status(500).json({
        success: false,
        error: err.message
    });
    }
});
router.post('/applynow', async (req, res) => {
  try {
    console.log("/applynow hit", req.body);

    // Basic validation for debugging
    const requiredFields = ["name", "email", "mobileno", "pannumber"];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ success: false, error: `${field} is required` });
      }
    }

    // Try to save
    const { name, number, pannumber, mobileno, address, gender, dob, city, state, email, pincode } = req.body;
    const newApply = new ApplyNow({ name, number, pannumber, mobileno, address, gender, dob, city, state, email, pincode });
    await newApply.save();
    res.status(201).json({ success: true, message: 'Form Submitted' });
  } catch (err) {
    console.error("ApplyNow save error:", err);
    // Send full error for debugging
    res.status(500).json({ success: false, error: err.message, stack: err.stack });
  }
});

module.exports = router;

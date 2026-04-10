// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');

// // POST /api/login
// router.post('/', async (req, res) => {
//   console.log(req.body);
//   const { username, password } = req.body;
//   try {
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.json({ success: false, message: 'User not found' });
//     }
//     // Simple password check (no hashing)
//     if (user.password === password) {
//       return res.json({ success: true, token: 'abc123' });
//     }
//     res.json({ success: false, message: 'Invalid password' });
//   } catch (err) {
//     res.status(500).json({ success: false, error: err.message });
//   }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const SECRET_KEY = "mysecretkey"; // .env me rakhna best practice

router.post('/', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.json({ success: false, message: 'User not found' });
    }

    // password check
    if (user.password !== password) {
      return res.json({ success: false, message: 'Invalid password' });
    }

    // 🔥 JWT Token generate
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

module.exports = router;
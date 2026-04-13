const express = require('express');
const router = express.Router();

// ✅ SAFE IMPORT (no destructuring for now)
const controller = require('../controllers/applyControllers');

// console.log(controller); 

router.post('/applynow', controller.createApplication);
router.get('/applications', controller.getApplications);
router.get('/application/:id', controller.getApplicationById);

module.exports = router;
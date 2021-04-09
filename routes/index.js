const express = require("express");
const { Router } = express;
const { VerifyCode, HealthCheck } = require('../controllers')
const router = Router();

router.post('/verify', VerifyCode)
router.get('/health', HealthCheck)


module.exports = router;
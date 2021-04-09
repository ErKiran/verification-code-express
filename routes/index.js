const express = require("express");
const { Router } = express;
const { VerifyCode} = require('../controllers')
const router = Router();

router.post('/verify', VerifyCode)


module.exports = router;
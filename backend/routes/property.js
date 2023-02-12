const express = require('express')
const Basic = require('../model/basic-info')
const bodyParser = require('body-parser')
const UUser = require('../model/register')
const bcrypt = require('bcrypt')
const { jwt_token } = require('../keys')
const jwt = require('jsonwebtoken');

const router = express.Router()
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())
router.use(express.Stringify());


//Post api for register
router.post('/register', async (req, res) => {
  console.log(req.body);
  try {
    const { mailID, password } = req.body;

    const existemail = await UUser.findOne({ mailID: mailID })
    if (existemail) {
      return res.status(422).json({
        status: "signup failed",
        error: "email already exist"
      })
    }
    

    bcrypt.hash(password, 10, async (err, hashedPass) => {
      if (err) {
        return res.status(409).json({
          status: "failed",
          message: "error"
        })
      }
      const data = await UUser.create({
        mailID,
        password: hashedPass,
        customId: nextId,
      })
      return res.status(200).json({
        status: "success",
        message: "signup successfully",
        data,
      })
    })
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

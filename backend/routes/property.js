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

    const highestId = await UUser.findOne({ customId: /^06PPD\d{3}$/ }).sort({ customId: -1 });
    let nextId = "06PPD001";
    if (highestId) {
      const num = parseInt(highestId.customId.substr(5));
      nextId = `06PPD${("000" + (num + 1)).substr(-3)}`;
    }

    bcrypt.hash(password, 10, async (err, hashedPass) => {
      if (err) {
        return res.status(409).json({
          status: "failed",
         
          message: err.message
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



//Post api for login

router.post('/login', async (req, res) => {
  try {
    const { mailID, password } = req.body;
    if (!mailID || !password) {
      return res.status(422).json({
        error: "add all the fields"
      })
    }
    const userData = await UUser.findOne({ mailID })
    if (!userData) {
      return res.status(404).json({
        error: "user not found"
      })
    }
    bcrypt.compare(password, userData.password, function (err, result) {
      if (err) {
        return res.status(500).json({
          error: err.message
        })
      }
      if (result) {
        const token = jwt.sign({ _id: userData.id }, jwt_token)
        const { _id, mailID, password, customId } = userData
        return res.json({
          token: token,
          user: { _id, mailID, password, customId },
          message: "user logged in successully"
        })
      }
      else {
        return res.status(500).json({
          error: "password not matched"
        })
      }
    })
  } catch (e) {
    return res.status(500).json({
      error: e.message
    })
  }
})

// Post api for filling form

let counter = 0
router.post('/basic', async (req, res) => {
  console.log(req.body);
  try {
    let { propertyType, mobile, area, views, ppd, user } = req.body;
    if (propertyType && mobile && area && ppd) {
      let customId = "PPD1" + (counter++).toString().padStart(3, '0');
      let existingDocument = await Basic.findOne({ _id: customId });
      while (existingDocument) {
        customId = "PPD1" + (counter++).toString().padStart(3, '0');
        existingDocument = await Basic.findOne({ _id: customId });
      }
      let data = await Basic.create({
        _id: customId,
        propertyType,
        mobile,
        area,
        views,
        ppd,
        user
      });
      return res.status(201).json({ message: "data created", data });
    } else {
      return res.status(400).json({ message: 'details are missing' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router


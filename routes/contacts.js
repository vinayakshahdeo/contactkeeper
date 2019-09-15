const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');
const auth = require('../middleware/auth');
const Contact = require('../models/Contact');
//@route  GET api/contacts
// @desc get all users contacts
//@access public
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route  POST api/contacts
// @desc Add new contact
//@access public
router.post(
  '/',
  [
    auth,
    check('name', 'Name is Required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        users: req.user.id
      });

      const contact = await newContact.save();

      res.json(contact);
    } catch (error) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

//@route  PUT api/contacts/:id
// @desc update contacts
//@access public
router.put('/:id', (req, res) => {
  res.send('Update contacts');
});

//@route  DELETE api/contacts/:id
// @desc update contacts
//@access public
router.delete('/:id', (req, res) => {
  res.send('Delete contacts');
});

module.exports = router;

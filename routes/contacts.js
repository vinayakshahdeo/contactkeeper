const express = require('express');

const router = express.Router();

//@route  GET api/contacts
// @desc get all users contacts
//@access public
router.get('/', (req, res) => {
  res.send('Get all contacts');
});

//@route  POST api/contacts
// @desc get all users contacts
//@access public
router.get('/', (req, res) => {
  res.send('Add contacts');
});

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

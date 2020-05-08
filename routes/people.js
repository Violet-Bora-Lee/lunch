const express = require('express');
const router = express.Router();

const Person = require('../models/Person');

// @route     GET api/people
// @desc      get people(all person)
router.get('/', async (req, res) => {
  try {
    const people = await Person.find();
    res.json(people)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error')
  }
});

// @route     POST api/people
// @desc      get people
router.post('/', (req, res) => {
  res.send('post people');
});



module.exports = router;

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
router.post('/', async (req, res) => {
  const { name } = req.body;

  let person = await Person.findOne({ name });

  if (person) {
    return res.status(400).json({ msg: 'Duplicated name.'})
  }

  try {
    const newPerson = new Person({
      name
    });

    const person = await newPerson.save();

    res.json(person);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error')
  }
  res.send('post people');
});



module.exports = router;

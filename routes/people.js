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
});

// @route     PUT api/people/:id
// @desc      Update people
router.put('/:id', async (req, res) => {
  const { name } = req.body;

  const nameFields = {};
  if (name) nameFields.name = name;

  try {
    let person = await Person.findById(req.params.id);

    if(!person) {
      return res.status(404).json({ msg: '해당하는 사람이 없습니다.'});
    }

    person = await Person.findByIdAndUpdate(
      req.params.id,
      { $set: nameFields },
      { new: true }
    );

    res.json(person);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
})

// @route     DELETE api/people/:id
// @desc      Delete person
router.delete('/:id', async (req, res) => {

  try {

    let person = await Person.findById(req.params.id);

    if(!person) return res.status(404).json({ msg: '삭제할 항목을 찾을 수 없습니다.' });

    await Person.findByIdAndRemove(req.params.id);

    res.json({ msg: `${person.name} 이/가 삭제되었습니다.` });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }

});


module.exports = router;

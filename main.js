const express = require("express");
const bodyParser = require('body-parser');
const {create, get} = require('./src/student');

const app = express();

app.use(bodyParser.json());

app.get('/', async (req, res) => {
  const students = await get();
  res.send(students);
});

app.post('/', async (req, res) => {
  const student = req.body;
  console.info(JSON.stringify(student, null, 2));
  await create(student);
  res.sendStatus(204);
});

app.listen(3000, () => {
  console.info("Listening on port 3000 ...");
});

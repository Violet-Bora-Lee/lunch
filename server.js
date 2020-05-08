const express = require('express');
const compress = require('compression');

const app = express();
app.use(compress());


app.get('/', (req, res) =>
  res.json({msg: 'Welcome to the lunch app API...'}));

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

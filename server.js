const express = require('express');
const json = require('./resources/mock_data.json')

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: json.data });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
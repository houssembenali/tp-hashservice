import express from 'express';
import md5 from 'md5';
import cors from 'cors';
import sha256 from 'sha256';

const PORT = 3000;

const app = express();

app.use(cors());

app.get('/md5/:str', (req, res) => {
  var cleartext = req.params.str;

  res.json({
    hash: 'md5',
    cleartext: cleartext,
    hashedtext: md5(cleartext)
  })
})

app.get('/sha256/:str', (req, res) => {
  var cleartext = req.params.str;

  res.json({
    hash: 'sha256',
    cleartext: cleartext,
    hashedtext: sha256(cleartext)
  })
})

app.listen(PORT, () => {
  console.log('Server express on port ' + PORT)
})
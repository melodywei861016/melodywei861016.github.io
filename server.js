const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post('/api/check-password', (req, res) => {
  const { password } = req.body;
  const workPassword = process.env.WORK_SECTION_PASSWORD || 'melody1016';

  if (password === workPassword) {
    res.status(200).json({ success: true, message: 'Password is correct' });
  } else {
    res.status(401).json({ success: false, message: 'Unauthorized: Incorrect password' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

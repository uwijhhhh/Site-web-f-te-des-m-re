const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Site en ligne sur le port ${port}`);
});

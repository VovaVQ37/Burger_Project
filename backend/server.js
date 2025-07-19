const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('Burger API работает!');
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});

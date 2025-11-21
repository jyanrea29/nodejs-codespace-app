const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>IT 412 - Final Project Activity</h1>
    <p><strong>Full Name:</strong> Rea, Jyan Christian B.</p>
    <p><strong>Class Section:</strong> BA 4102</p>
    <p><strong>Inspirational Quote:</strong> "You've got a life to live and a story to tell, put them up and ring your bells."</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});

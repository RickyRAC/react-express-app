require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const cors = require('cors');



const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors())





app.get('/', (req, res) => {
    res.send("Hello World!!")
  })
  app.use('/post', routes.posts)


app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`);
});
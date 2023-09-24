import express from 'express';
import connect from '../config/database.js'


const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, async() => {
  console.log(`Server started at Port: ${PORT}`);

  await connect();
 console.log("MongoDB connected");

})
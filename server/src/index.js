import express from 'express';
import bodyParser from 'body-parser';

import connect from './config/database.js';
import apiRoutes from './routes/index.js';
import { dbConfig } from './config/serverConfig.js';

const router = express.Router();


const app = express();
const PORT = dbConfig.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.listen(PORT, async () => {
  console.log(`Server started at Port: ${PORT}`);

  await connect();
  console.log("MongoDB connected");

});


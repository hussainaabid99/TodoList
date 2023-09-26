import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

dotenv.config();

export const dbConfig = {
     PORT: process.env.PORT,
     SALT: bcrypt.genSaltSync(8),
     JWT_KEY: process.env.JWT_KEY
}
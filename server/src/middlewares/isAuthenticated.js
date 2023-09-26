import jwt from 'jsonwebtoken';
import { dbConfig } from '../config/serverConfig.js';

const isAuthenticated = async (req, res, next) => {
     try {
          const token = req.headers["x-access-token"];
          const response = jwt.verify(token, dbConfig.JWT_KEY);

          if (!response) {
               throw {
                    error: "Invalid token"
               }
          }

          next();

     } catch (error) {
          return res.status(404).json({
               success: false,
               message: 'Invalid token',
               error: error.message
          })

     }
}

export default isAuthenticated;
import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import { dbConfig } from "../config/serverConfig.js";
const { Schema } = mongoose;

const userSchema = new Schema({
     username: {
          type: String,
          required: true,
          unique: true
     },
     email: {
          type: String,
          required: true,
          unique: true,
     },
     password: {
          type: String,
          required: true
     },
     todos: [{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Todo'
     }]

}, { timestamps: true });

userSchema.pre('save', function (next) {
     const user = this;
     const encryptedPassword = bcrypt.hashSync(user.password, dbConfig.SALT);
     user.password = encryptedPassword;
     next();
})

userSchema.methods.comparePassword = function compare(password) {
     return bcrypt.compareSync(password, this.password);
}

const User = mongoose.model('User', userSchema);

export default User;
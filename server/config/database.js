import mongoose from 'mongoose';

const connect = async () => {
     await mongoose.connect('mongodb://127.0.0.1:27017/todo_Dev');
}

export default connect;
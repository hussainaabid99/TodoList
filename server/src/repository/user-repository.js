
import User from "../models/user.js";

class UserRepository {

     async create(data) {

          try {
               const user = await User.create(data);
               return user;

          } catch (error) {
               console.log(error);
               throw error;
          }
     }

     async update(id, data) {

          try {
               const user = await User.findByIdAndUpdate(id, data, { new: true });
               return user;

          } catch (error) {
               console.log(error);
               throw error;
          }
     }

     async getByEmail(userEmail) {
          try {
               const user = await User.find({
                    where: {
                         email: userEmail
                    }
               });
               return user;
          } catch (error) {
               console.log(error);
               throw error;
          }
     }

     async get(id) {
          try {
               const user = await User.findById(id);
               return user;

          } catch (error) {
               console.log(error);
               throw error;
          }
     }

     async remove(id) {
          try {
               const user = await User.findByIdAndRemove(id);
               return user;

          } catch (error) {
               console.log(error);
               throw error;
          }
     }

     async getWithTodos(id) {
          try {
               const user = await User.findById(id).populate({
                    path: 'todos'
               }).lean();
               return user;

          } catch (error) {
               console.log(error);
               throw error;
          }
     }

}

export default UserRepository;
import User from "../models/user.js";

class UserRepository {

     async create(data) {
         
          try {
               const user = await User.create(data);
               return user;

          } catch (error) {
               console.log(error);
          }
     }

     async update(id, data) {
         
          try {
               const user  = await User.findByIdAndUpdate(id, data,{new:true});
               return user;

          } catch (error) {
               console.log(error);
          }
     }

     async get(id) {
          try {
               const user = await User.findById(id);
               return user;
               
          } catch (error) {
               console.log(error);
          }
     }

     async remove(id) {
          try {
               const user = await User.findByIdAndRemove(id);
               return user;
               
          } catch (error) {
               
          }
     }

}
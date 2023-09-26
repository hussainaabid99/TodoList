import UserRepository from '../repository/user-repository.js';

class UserService {

     constructor() {
          this.userRepository = new UserRepository();
     }

     async signUp(data) {
          const user = await this.userRepository.create(data);
          return ({
               username: user.username,
               email: user.email,
               userId: user._id,
               createdAt: user.createdAt,
               updatedAt: user.updatedAt
          });
     }

     async signIn(data) {

          try {
               const user = await this.userRepository.getByEmail({
                    email: data.email
               });
               console.log(user);
               if (!user) {
                    throw {
                         message: 'No user found',
                         success: false,
                    };
               }
               if (!user.comparePassword(data.password)) {
                    throw {
                         message: 'Incorrect Password',
                         success: 'false'
                    };
               }
               const token = user.genJWT();
               return {
                    token: token,
                    userId: user._id,
               };
          } catch (error) {
               console.log("Something went wrong in service layer");
               throw error;
          }

     }

     async get(userId) {
          const user = await this.userRepository.getWithTodos(userId);
          console.log(user.todos);
          return ({
               id: user._id,
               username: user.username,
               todos: user.todos,
               createdAt: user.createdAt,
               updatedAt: user.updatedAt
          });
     }

     async update(id, data) {
          const user = await this.userRepository.update(id, data);
          return user;
     }

     async remove(id) {
          const user = await this.userRepository.remove(id);
          return user;
     }


}

export default UserService;
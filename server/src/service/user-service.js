import UserRepository from "../repository/user-repository.js";

class UserService {

     constructor() {
          this.userRepository = new UserRepository();
     }

     async create(data) {

          const user = await this.userRepository.create(data);
          return user;
     }

     async getByEmail(data) {
          const user = await this.userRepository.getByEmail(data);
          return user;
     }

     async get(userId) {
          const user = await this.userRepository.getWithTodos(userId);
          return ({
               _id: user._id,
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
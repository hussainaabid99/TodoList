import UserRepository from "../repository/user-repository.js";

class UserService {

     constructor() {
          this.userRepository = new UserRepository();
     }

     async create(data) {

          const user = await this.userRepository.create(data);
          return user;
     }

     async get(id) {
          const user = await this.userRepository.get(id);
          return user;
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
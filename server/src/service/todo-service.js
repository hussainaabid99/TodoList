import TodoRepository from "../repository/todo-repository.js";
import UserRepository from "../repository/user-repository.js";

class TodoService {

     constructor() {
          this.todoRepository = new TodoRepository();
          this.userRepository = new UserRepository();
     }

     async create(data) {

          const userId = data.userId;
          var user = await this.userRepository.get(userId);
          if (!user) {
               throw new Error('Unknown User');
          }
          const todo = await this.todoRepository.create({
               taskName: data.taskName,
               description: data.description,
               date: data.date,
               completed: data.completed,
               userId: data.userId,
               priority: data.priority
          });
          user.todos.push(todo);
          await user.save();

          return todo;
     }

     async get(id) {
          const todo = await this.todoRepository.get(id);
          return todo;
     }

     async update(id, data) {
          const todo = await this.todoRepository.update(id, data);
          return todo;
     }

     async remove(id) {
          const todo = await this.todoRepository.remove(id);
          return todo;
     }

     async getAll() {
          const todo = await this.todoRepository.getAll();
          return todo;
     }
}

export default TodoService;
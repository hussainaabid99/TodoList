import TodoRepository from "../repository/todo-repository.js";

class TodoService {

     constructor() {
          this.todoRepository = new TodoRepository();
     }

     async create(data) {

          const todo = await this.todoRepository.create(data);
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
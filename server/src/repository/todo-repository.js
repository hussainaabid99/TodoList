import Todo from "../models/todo.js";

class TodoRepository {

     async create(data) {
          try {
               const todo = await Todo.create(data);
               return todo;

          } catch (error) {
               console.log(error);
               throw error;
          }
     }

     async get(id) {
          try {
               const todo = await Todo.findById(id);
               return todo;

          } catch (error) {
               console.log(error);
               throw error;
          }
     }

     async update(id, data) {
          try {
               const todo = await Todo.findByIdAndUpdate(id, data, { new: true });
               return todo;

          } catch (error) {
               console.log(error);
               throw error;
          }
     }

     async remove(id) {
          try {
               const todo = await Todo.findByIdAndRemove(id);
               return todo;
          } catch (error) {
               console.log(error);
               throw error;
          }
     }

     async getAll() {
          try {
               const todo = await Todo.find({});
               return todo;
          } catch (error) {
               console.log(error);
               throw error;
          }
     }
}

export default TodoRepository;
import Todo from "../models/todo.js";

class TodoRepository {
     
     async create(data) {
          try {
               const todo = await Todo.create(data);
               return todo;

          } catch (error) {
               console.log(error);
          }
     }

     async get(id) {
          try {
               const todo = await Todo.findById(id);
               return todo;
               
          } catch (error) {
               console.log(error);
          }
     }

     async update(id, data) {
          try {
               const todo = await Todo.findByIdAndUpdate(id, data, {new:true});
               return todo;
               
          } catch (error) {
               console.log(error);
          }
     }

     async remove(id) {
          try {
               const todo = await Todo.findByIdAndRemove(id);
               return todo;
          } catch (error) {
               console.log(error);
          }
     }
}

export default TodoRepository;
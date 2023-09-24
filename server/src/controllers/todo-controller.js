import TodoService from "../service/todo-service.js";

const todoService = new TodoService();

export const createTodo = async (req, res) => {
     try {
          const response = await todoService.create(req.body);

          return res.status(201).json({
               success: true,
               message: "Sucessfully created a todo",
               data: response,
               err: {}
          });
     } catch (error) {
          return res.status(500).json({
               success: false,
               message: "Something went wrong",
               data: {},
               err: error.message
          });
     }
}

export const getTodo = async (req, res) => {
     try {
          console.log("params", req.params.id);
          const response = await todoService.get(req.params.id);

          return res.status(200).json({
               success: true,
               message: "Sucessfully fetched a todo",
               data: response,
               err: {}
          });

     } catch (error) {
          return res.status(500).json({
               success: false,
               message: "Something went wrong",
               data: {},
               err: error.message
          });
     }
}

export const removeTodo = async (req, res) => {
     try {
          const response = await todoService.remove(req.params.id);
          return res.status(200).json({
               success: true,
               message: "Sucessfully removed a todo",
               data: response,
               err: {}
          });

     } catch (error) {
          return res.status(500).json({
               success: false,
               message: "Something went wrong",
               data: {},
               err: error.message
          });
     }
}

export const updateTodo = async (req, res) => {
     try {
          const response = await todoService.update(req.params.id, req.body);
          return res.status(200).json({
               success: true,
               message: "Sucessfully updated a todo",
               data: response,
               err: {}
          });

     } catch (error) {
          return res.status(500).json({
               success: false,
               message: "Something went wrong",
               data: {},
               err: error.message
          });
     }
}

export const getAllTodo = async (req, res) => {
     try {
          const response = await todoService.getAll();
          return res.status(200).json({
               success: true,
               message: "Sucessfully fetched all todos",
               data: response,
               err: {}
          });

     } catch (error) {
          return res.status(500).json({
               success: false,
               message: "Something went wrong",
               data: {},
               err: error.message
          });
     }
}

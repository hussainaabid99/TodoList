import UserService from "../service/user-service.js";

const userService = new UserService();

export const createUser = async (req, res) => {
     try {
          const response = await userService.create(req.body);

          return res.status(201).json({
               success: true,
               message: "Sucessfully created a user",
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

export const getUserWithTodos = async (req, res) => {
     try {
          const response = await userService.get(req.params.userId);

          return res.status(200).json({
               success: true,
               message: "Sucessfully fetched a user",
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

export const removeUser = async (req, res) => {
     try {
          const response = await userService.remove(req.params.id);
          return res.status(200).json({
               success: true,
               message: "Sucessfully removed a user",
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

export const updateUser = async (req, res) => {
     try {
          const response = await userService.update(req.params.id, req.body);
          return res.status(200).json({
               success: true,
               message: "Sucessfully updated a user",
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

export const getUserByEmail = async (req, res) => {
     try {
          console.log(req.body.email);
          const response = await userService.getByEmail(req.body.email);
          return res.status(200).json({
               success: true,
               message: "Successfully fetched a user via email",
               data: response,
               err: {}
          })
     } catch (error) {
          return res.status(500).json({
               success: false,
               message: "Something went wrong",
               data: {},
               err: error.message
          });
     }
}

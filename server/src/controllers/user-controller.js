import UserService from "../service/user-service.js";

const userService = new UserService();

export const signUp = async (req, res) => {
     try {
          const response = await userService.signUp(req.body);

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

export const signIn = async (req, res) => {
     try {
          console.log(req.body.email);
          const response = await userService.signIn(req.body);
          console.log(response);
          return res.status(200).json({
               success: true,
               message: "Successfully signed in",
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

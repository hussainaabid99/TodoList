const validateUserEmail = (req, res, next) => {
     if (!req.body.email) {
          return res.status(400).json({
               success: false,
               data: {},
               message: 'Something went wrong',
               err: 'Email is missing in the request'
          })
     }
     next();
}

export default validateUserEmail;
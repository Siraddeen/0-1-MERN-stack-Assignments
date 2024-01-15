const { Admin } = require("../db");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const usrename = req.headers.usrename;
  const password = req.headers.password;

  Admin.findOne({
    usrename: usrename,
    password: password,
  }).then(function (value) {
    if (value) {
      next();
    } else {
      res.status(403).json({
        msg: " Admin do not exist",
      });
    }
  });
}

module.exports = adminMiddleware;

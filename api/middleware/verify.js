const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const cookie = req.headers.cookie;
  if (cookie) {
    const token = cookie.split("=")[1];
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) res.status(403).json("Token is not valid !");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated ! ");
  }
}
// // verify user
const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return res.status(401).json({
        message:
          "you are not authorized . you cannot do this belong to other data",
      });
    }
  });
};

module.exports = verifyToken;
module.exports = verifyUser;

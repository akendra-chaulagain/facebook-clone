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
module.exports = verifyToken;

// const jwt = require("jsonwebtoken");
// function verifyToken(req, res, next) {
//   const authHeader = req.headers.token;
//   if (authHeader) {
//     const token = authHeader.split(" ")[1];
//     jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
//       if (err) res.status(403).json("Token is not valid !");
//       req.user = user;
//       next();
//     });
//   } else {
//     return res.status(401).json("You are not authenticated !");
//   }
// }

// module.exports = verifyToken;

// const verifyToken = (req, res, next) => {
//   const cookie = req.cookies.jsonwebToken;
//   if (!cookie) {
//     return res.status(401).json("you are not authenticated");
//   }
//   jwt.verify(cookie, process.env.JWT_SECRET_KEY, (err, user));
//   if (err) res.status(403).json("token not valid");
//   req.user = user;
//   next();
// };

function verifyToken(req, res, next) {
  const token = req.cookies.jsonwebToken;
  if (!token) {
    return res.status(401).json({ message: "you are not authenticated" });
  }
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) res.status(403).json({ message: "token is not valid" });
    req.user = user;
    next();
  });
}

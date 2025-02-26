const validateHeader = (req, res, next) => {
  const userId = req.headers["user-id"] == "ifabula";
  const scope = req.headers["scope"] == "user";

  if (!userId || !scope) {
    res.status(403).json({
      status: false,
      message: "Invalid Header Authorization",
    });
  } else {
    next();
  }
};
module.exports = {
  validateHeader,
};

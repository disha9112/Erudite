const errorHandler = (err, req, res, next) => {
  console.log(err.message);

  const status = err.status || 500;
  const message = err.message || "Error occurred";
  return res.status(status).json({
    status: false,
    message: message,
  });
};
module.exports = errorHandler;

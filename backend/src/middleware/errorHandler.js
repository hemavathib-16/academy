const errorHandler = (err, req, res, next) => {
  console.error(err);

  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation error.",
      errors: Object.values(err.errors).map((e) => e.message),
    });
  }

  return res.status(500).json({
    message: "Internal server error.",
  });
};

module.exports = errorHandler;

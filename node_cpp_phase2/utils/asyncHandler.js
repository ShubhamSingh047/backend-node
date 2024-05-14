const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (err) {
    res.status(err.code || 500).json({
      success: false,
      message: err.message,
    });
  }
};


// doing same thing using promises
const promiseHandler = (requestHanlder) => {
  (req, res, next) => {
    Promise.resolve(requestHanlder(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

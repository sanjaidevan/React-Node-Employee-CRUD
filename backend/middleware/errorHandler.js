export const commonErrorHandler = (error, req, res, next) => {
    console.error(error);
    if (error.name === "SequelizeValidationError") { return res.status(400).json({ errors: error.errors.map(err => err.message) }); }
    if (error.name === "SequelizeUniqueConstraintError") { return res.status(409).json({ errors: error.errors.map(err => err.message) }); }
    return res.status(error.statusCode || 500).json({ error: error.message || "Internal Server Error" });
};
// Generic error handler is creATED

function errorMiddleware(err,req,res,next){
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        success: false,
        message: error.message || "Internal server error"
    });
}

module.exports = errorMiddleware;
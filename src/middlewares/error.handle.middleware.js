// custom error middleware ------------------------------------>
const errorMiddleware = (err, req, res, next) => {
    const status = err.status || 500;
    const code = err.code || 'INTERNAL_SERVER_ERROR';
    const message = err.message || 'Internal server error!';

    return res.status(status).json({
        success: false,
        status,
        code,
        message,
    });
};

// export modules --------------------------------------------->
export default errorMiddleware;

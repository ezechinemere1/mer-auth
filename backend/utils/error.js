export const errorHandler = (erroStatus, errorMessage) =>{
    const error = new Error();
    error.statusCode = erroStatus;
    error.message = errorMessage;
    return error
}
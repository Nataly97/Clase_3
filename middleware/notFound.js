//Se pueden definir middleware después de las rutas, esto se usa más que todo 
//para el manejo de errores, recibe una propiedad adicional que es next, la cual le
//indica al programa, si ya ejecuto el middleware correctamente, continua con la siguiente
//instrucción 
const notFoundMiddleware = (req, res, next) => {
    const err = new Error("Resource not found");
    err.status = 404;
    next(err);
    // if (error) {
    //     return res.status(500).send("Error");//En método status ayuda a mostrar el estado de la petición si es 200, 300, 400 o 500
    // }
}

module.exports = {
    notFoundMiddleware,
}
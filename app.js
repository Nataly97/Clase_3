require("dotenv").config(); //Paquete para usar las variables de entorno
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require('mongoose'); //Paquete para usar mongo

//Puesto para desplegar en producción o puerto local
const port = process.env.PORT || 3000;

const router = require("./routes");
const { notFoundMiddleware } = require("./middleware/notFound")
const { errorHandlerMiddleware } = require("./middleware/errorHandler")
const app = express();//Para crear un servidor web con express

app.use(express.json());
app.use(express.urlencoded({
    extended: false,
}));
//Morgan es un middleware que sirve para mostrar el tiempo de ejecución del recurso
//Muestra en milisegundos cuanto tarda la ruta, o petición en ejecutarse
app.use(morgan("dev"));//use es un metodo de express que se usa para idicarle al sistema 
// que utilice morgan como middleware, se le pueden pasar middleware de terceros o propios
//"dev" indica que se va a usar en modo desarrollador, tiene una estructura de como se va a 
//ver la respuesta que morgan va a dar

//Los middleware se definen antes de las rutas o peticiones, porque sino asume que no hay peticiones

//CORS
//Se usa para indicarle al servidor que acepte peticiones desde cualquier dominio
//también es un middleware
//Se le pueden pasar options, como el dominio de origen de las peticiones cuando
//hay restricciones para la entrada de solicitudes. También recibe los métodos 
//que se pueden recibir en la petición, GET, POST, PUT, etc
app.use(cors());

app.use("/api", router());

//Se pueden definir middleware después de las rutas, esto se usa más que todo 
//para el manejo de errores, recibe una propiedad adicional que es next, la cual le
//indica al programa, si ya ejecuto el middleware correctamente, continua con la siguiente
//instrucción 
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
//El método listen escucha las peticiones, se le define un puerto donde el servidor se va a alojar
//Por lo general es superior a 3000 porque los inferiores los usa el sistema operatvo para otras tareas

app.listen(port, () => {
    console.log(process.env.CONNECTION_MONGOBD)
    mongoose.connect(process.env.CONNECTION_MONGOBD)
        .then(() => console.log('DB Connected!'))
    console.log(`Sever is running on http://localhost:3000/`)
})



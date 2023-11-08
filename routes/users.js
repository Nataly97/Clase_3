const express = require("express");
const controller = require("../controllers/users")
const routerUser = express.Router();

//Define la ruta, y a su vez recibe un callback con una petición y la respuesta a 
//esa petición
//Se usa el metodo get para mostrar información 
// Para definir una ruta diferente se debe poner despues del /
//La ruta es opcional, si no se pone "/" por defecto es "/"
// routerUser.get("/users", (req,res) => {
//     //Aqui va el codigo que queremos ejecutar cuando se haga GET en /users
// })

// routerUser.get("/", controller.GetUsers);

// routerUser.get("/:Id", controller.GetUserById);

routerUser.get("/", controller.findUser);
routerUser.get("/:Id", controller.findUserById);
routerUser.post("/", controller.CreateNewUser)
routerUser.put("/:Id", controller.uptadeUser);
routerUser.delete("/:Id", controller.deleteUser);



// routerUser.put("/",(rep, res)=>{
//     res.send('<h1>Usuario actualizado</h1>');
// })

// routerUser.delete("/",(rep, res)=>{
//     res.send('<h1>Usuario Eliminado</h1>');
// })

module.exports = routerUser;
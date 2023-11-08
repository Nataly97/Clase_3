const express = require("express");
const routerUser = require("./users");

const routerIndex = express.Router();

module.exports = () => {
    //En las rutas se deben llamar sustantivos plurales
    //auth/login es una excepción, hay varias, donde se definen acciones 
    routerIndex.use("/users", routerUser);
    // routerIndex.use("/products", routerUser);
    // routerIndex.use("/clients", routerUser);
    // routerIndex.use("/invoices", routerUser);
    // routerIndex.use("/orders", routerUser);

    return routerIndex;
};

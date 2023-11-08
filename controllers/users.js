const service = require("../services/users")

const GetUsers = async (req, res) => {
    console.log(req.query)
    const result = await service.GetAllUser();
    // req.routerUser.set("env") = "prod" // Esta línea se usa para forzar un error en la petición y probar el 
    //middleware de los status
    // res.send("<h1>Hola mundo</h1>"); //send se usa para imprimir la respuesta en pantalla
    res.status(200).json(result);

}

const GetUserById = (req, res) => {
    // console.log(req.params)
    const { Id } = req.params;
    const result = service.GetUserById(Id);
    res.status(200).json(result);
}

// Controlador para Crear usuario 
const CreateNewUser = async (req, res) => {
    try {
        //  const result = await service.createUser(req.body)
        const { success, result, message } = await service.createUser(req.body)
        console.log(result)
        if (!success) {
            return res.status(400).json({ result, message })
        }
        return res.status(201).json({
            result,
            message
        })
    } catch (error) {
        return res.status(500).json({
            result: null,
            message: error,
        })
    }
}

const findUser = async (req, res) => {
    try {
        const { success, result, message } = await service.findUser()
        console.log(result)
        if (!success) {
            return res.status(400).json({ result, message })
        }
        return res.status(200).json({
            result,
            message
        })
    } catch (error) {
        return res.status(500).json({
            result: null,
            message: error,
        })
    }
}

const findUserById = async (req, res) => {
    try {
        const idContact = req.params.Id
        const { success, result, message } = await service.findByIdUser(idContact);
        // console.log(result)
        if (!success) {
            return res.status(400).json({ result, message })
        }
        return res.status(200).json({
            result,
            message
        })
    } catch (error) {
        return res.status(500).json({
            result: null,
            message: error,
        })
    }
}

const uptadeUser = async (req, res) => {
    try {
        const { Id } = req.params
        const { success, result, message } = await service.updateUser(Id, req.body);
        // console.log(result)
        if (!success) {
            return res.status(400).json({ result, message })
        }
        return res.status(200).json({
            result,
            message
        })
    } catch (error) {
        return res.status(500).json({
            result: null,
            message: error,
        })
    }
}
const deleteUser = async (req, res) => {
    try {
        const { Id } = req.params
        const { success, result, message } = await service.deleteUser(Id);
        // console.log(result)
        if (!success) {
            return res.status(400).json({ result, message })
        }
        return res.status(200).json({
            result,
            message
        })
    } catch (error) {
        return res.status(500).json({
            result: null,
            message: error,
        })
    }
}
module.exports = {
    GetUsers,
    GetUserById,
    //Busqueda, crear, Actualizar, Aliminar
    findUser,
    CreateNewUser,
    findUserById,
    uptadeUser,
    deleteUser,
}
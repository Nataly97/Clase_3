const fs = require("fs").promises;
const path = require("path");
const pathUsers = path.join(__dirname, "../db/contacts.json")

const User = require('../models/users')

const GetAllUser = async () => {
    try {
        const result = (await fs.readFile(pathUsers)).toString()
        // console.log(result);
        return JSON.parse(result);
    } catch (error) {
        console.log(error)
    }
};

const GetUserById = async (Id) => {
    try {
        const result = JSON.parse((await fs.readFile(pathUsers)).toString());
        for (user of result) {
            if (user.id === Id) {
                return user
            }
        }
    } catch (error) {
        console.log(error)
    }
}

const createUser = async (Data) => {
    try {
        // console.log(Data)
        const userRegistered = await User.create(Data);
        console.log(userRegistered);
        if (!userRegistered) {
            return {
                success: false,
                result: null,
                message: "Error al crear el usuario"
            };
        }
        return {
            success: true,
            result: userRegistered,
            message: "Usuario Creado Correctamente"
        };
        // return "User registered successfully" //Respuesta si no se requiere retornar el usuario creado al front
    } catch (error) {
        // console.log(error)
        return {
            success: false,
            result: null,
            message: error
        }
    }
}

const findUser = async () => {
    try {
        const users = await User.find();
        console.log(users)
        // return users;
        return {
            success: true,
            result: users,
            message: "Lista de usuarios"
        }
    } catch (error) {
        return {
            success: false,
            result: null,
            message: error
        }
    }
}

const findByIdUser = async (id) => {
    try {
        const user = await User.findById(id)
        console.log(user)
        if (!user) {
            return {
                success: false,
                result: null,
                message: "Error al filtrar el usuario"
            };
        }
        return {
            success: true,
            result: user,
            message: "Usuario encontrado"
        }
    } catch (error) {
        return {
            success: false,
            result: null,
            message: error
        }
    }
}

const updateUser = async (id, data) => {
    try {
        // console.log(data)
        const user = await User.findByIdAndUpdate(id, data);
        // console.log(user)
        if (!user) {
            return {
                success: false,
                result: null,
                message: "Error al actualizar el usuario"
            };
        }
        return {
            success: true,
            result: user,
            message: "Usuario Actualizado Correctamente"
        }

    } catch (error) {
        return {
            success: false,
            result: null,
            message: error
        }
    }
}

const deleteUser = async (id) => {
    try {
        const user = await User.findByIdAndDelete(id);
        // console.log(user)
        // if (!user) {
        //     return {
        //         success: false,
        //         result: null,
        //         message: "Error al actualizar el usuario"
        //     };
        // }
        return {
            success: true,
            result: user,
            message: "Usuario Eliminado Correctamente"
        }

    } catch (error) {
        return {
            success: false,
            result: null,
            message: error
        }
    }
}
module.exports = {
    GetAllUser,
    GetUserById,
    createUser,
    findUser,
    findByIdUser,
    updateUser,
    deleteUser,
}
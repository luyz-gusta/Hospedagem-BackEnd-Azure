/**************************************************************************************
 *  Objetivo: Responsável pela regra de negócios referente ao crud de usuário
 *  Autor: Luiz Gustavo
 *  Data: 04/09/2023
 *  Versão: 1.0
 **************************************************************************************/

var message = require('./modulo/config.js')
var userDAO = require('../model/userDAO.js');

const ctlGetUsuario = async () => {
    let dadosUsuarios = await userDAO.mdlSelectAllUsers()

    if (dadosUsuarios) {

        let dadosUsuariosJSON = {
            status: message.SUCCESS_REQUEST.status,
            message: message.SUCCESS_REQUEST.message,
            quantidade: dadosUsuarios.length,
            dados: dadosUsuarios
        }

        return dadosUsuariosJSON
    } else {
        return message.ERROR_INTERNAL_SERVER
    }
}

const ctlGetUsuarioByID = async function (id) {
    if (id == null || id == undefined || isNaN(id)) {
        return message.ERROR_REQUIRE_FIELDS
    } else {
        let dadosUsuario = await userDAO.mdlSelectUserByID(id)

        if (dadosUsuario) {

            let dadosUsuarioJSON = {
                status: message.SUCCESS_REQUEST.status,
                message: message.SUCCESS_REQUEST.message,
                dados: dadosUsuario[0]
            }

            return dadosUsuarioJSON
        } else {
            return message.ERROR_REGISTER_NOT_FOUND
        }
    }
}

module.exports = {
    ctlGetUsuario,
    ctlGetUsuarioByID
}
/**************************************************************************************
 *  Objetivo: Responsável pela manipulação de dados dos Usuários
 *  Autor: Luiz Gustavo
 *  Data: 10/01/2023
 *  Versão: 1.0
 **************************************************************************************/

//Import da biblioteca do prisma client
var { PrismaClient } = require('@prisma/client')

//Instancia da Classe PrismaClient 
var prisma = new PrismaClient()

const mdlSelectAllUsers= async () => {
    let sql = `select * from tbl_user`

    let rsUser = await prisma.$queryRawUnsafe(sql)

    if (rsUser.length > 0) {
        return rsUser
    } else {
        return false
    }
}

const mdlSelectUserByID = async (id) => {
    let sql = `select * from tbl_user where id = ${id}`

    let rsUser = await prisma.$queryRawUnsafe(sql)

    if (rsUser.length > 0) {
        return rsUser
    } else {
        return false
    }
}

module.exports = {
    mdlSelectAllUsers,
    mdlSelectUserByID
}
/*********************************************************************************************************
 * Objetivo: Arquivo responsavel por padronizar as mensagens de ERRO, SUCESSO, FUNÇÕES, VARIAVEIS
 * Autor: Luiz Gustavo 
 * Data: 10/01/2023
 * Versão: 1.0
*********************************************************************************************************/

/*************************************** MENSAGENS DE ERRO ***************************************/
const ERROR_REQUIRE_FIELDS = {status: 400, message: 'NÃO FORAM PREENCHIDO TODOS OS CAMPOS OBRIGATÓRIOS'}

const ERROR_INTERNAL_SERVER = {status: 500, message: 'DEVIDO A UM ERRO INTERNO NO SERVIDOR, NÃO FOI POSSIVEL PROCESSAR A REQUISIÇÃO'}

const ERROR_INVALID_CONTENT_TYPE = {status: 415, message: 'O TIPO DE MÍDIA CONTENT-TYPE DA SOLICITAÇÃO NÃO É COMPATÍVEL COM O SERVIDOR. TIPO ACEITÁVEL: [application/json]'}

const ERROR_INVALID_ID = {status: 400, message: 'O ID INFORMADO NA REQUISIÇÃO NÃO É VALIDO, OU NÃO FOI ENCAMINHADO'}

const ERROR_REGISTER_NOT_FOUND= {status: 404, message: 'O SERVIDOR NÃO ENCONTROU O RECURSO SOLICITADO.'}

/*************************************** MENSAGENS DE SUCESSO ***************************************/
const SUCCESS_CREATED_ITEM = {status: 201, message: 'ITEM CRIADO COM SUCESSO'}

const SUCCESS_UPDATED_ITEM = {status: 200, message: 'ITEM ATUALIZADO COM SUCESSO'}

const SUCCESS_DELETED_ITEM = {status: 200, message: 'ITEM DELETADO COM SUCESSO'}

const SUCCESS_REQUEST = {status: 200, message: 'REQUISIÇÃO BEM SUCEDIDA'}

module.exports = {
    //Exportes de erro
    ERROR_REGISTER_NOT_FOUND,
    ERROR_INTERNAL_SERVER,
    ERROR_INVALID_ID,
    ERROR_INVALID_CONTENT_TYPE,
    ERROR_REQUIRE_FIELDS,

    //Exportes de sucesso
    SUCCESS_CREATED_ITEM,
    SUCCESS_UPDATED_ITEM,
    SUCCESS_DELETED_ITEM,
    SUCCESS_REQUEST
}
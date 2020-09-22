const Sequelize = require('sequelize')
const RolesOperations = require ('../models/RolesOperations')
const Operations = require ('../models/Operations')
const Roles = require ('../models/Roles')

class RolesOperationsController {

    checkAuthorization(idrole, url){
        const promise= new Promise( (resolve, reject) => { 
            RolesOperations.findAll({
                attributes: ['authorization','roleId'], // seleciona quais campos vai mostrar
                include:[{
                    model:Operations,
                    attributes:['route']
                }], // determina trazer dados do RolesOperations tambem
                where: {
                    '$operation.route$':url,
                    roleId:idrole
                },
                raw:true // retorna apenas os valores do registro achado
            })
            .then(function(rolesoperations) {
                if(!rolesoperations){
                    resolve(null)
                }
                resolve( rolesoperations[0].authorization===1 )
            })
            .catch(function(err) {
                console.warn('Falhou: ', err)
                reject(err);
            });
               
        });
        return promise;
    }
}

module.exports = new RolesOperationsController()
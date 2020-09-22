const Users = require ('../models/Users')

class UsersController {

    findOne(email){
        const promise = new Promise( (resolve, reject) => { 

            console.log(email)
            Users.findOne(
                {  where: {email:email} }
            )
            .then( function(umUsuario){
                console.log(umUsuario)
                if (umUsuario){
                    resolve (umUsuario.dataValues)
                }
                resolve(null)
                                
            })
            .catch( function(erro){
                console.log(erro)
            })     
            
        });
        return promise;
    }
}

module.exports = new UsersController()
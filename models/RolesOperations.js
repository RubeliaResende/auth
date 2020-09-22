const Banco = require ('./BD')

	//modelos
	var RolesOperations = Banco.bd.define('rolesoperations',{
        
		authorization: {type: Banco.Sequelize.BOOLEAN, allowNull: false}
	}) 

module.exports = RolesOperations
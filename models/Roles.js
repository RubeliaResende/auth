const Banco = require ('./BD')

	var Roles = Banco.bd.define('roles',{
        nameRole: {type: Banco.Sequelize.STRING(30), allowNull: false }
    })    

    module.exports = Roles
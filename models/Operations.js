const Banco = require ('./BD')

	//modelos
	var Operations = Banco.bd.define('operations',{
        route: {type: Banco.Sequelize.STRING, allowNull: false},
        desc: {type: Banco.Sequelize.STRING, allowNull: false}
	}) 

module.exports = Operations
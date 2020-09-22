const Banco = require ('./BD')

	//modelos
	var Users = Banco.bd.define('users',{
        email: {type: Banco.Sequelize.STRING, allowNull: false},
        name: {type: Banco.Sequelize.STRING, allowNull: false},
        pwd: {type: Banco.Sequelize.STRING, allowNull: false},
        idRole: {
			type: Banco.Sequelize.INTEGER,
			allowNull: false,
			references: { model: 'roles',  key: 'id' },
			onUpdate: 'CASCADE',
			onDelete: 'CASCADE'
		}
	}) 

module.exports = Users
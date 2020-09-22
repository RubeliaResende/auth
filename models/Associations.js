const Roles = require('./Roles')
const Users = require('./Users')
const Operations = require('./Operations')
const RolesOperations = require('./RolesOperations')

Users.belongsTo(Roles, {foreignKey: 'id', as: 'UsersParaRoles'})
Roles.hasMany(Users, {foreignKey: 'idRole', as: 'RolesParaUsers'})

Operations.belongsToMany(Roles, { through: RolesOperations })
Roles.belongsToMany(Operations, { through: RolesOperations })
RolesOperations.belongsTo(Roles)
RolesOperations.belongsTo(Operations)

Operations.hasMany(RolesOperations)
Roles.hasMany(RolesOperations)
         
Roles.sync({force: false})
Users.sync({force: false})
Operations.sync({force: false})
RolesOperations.sync({force: false})
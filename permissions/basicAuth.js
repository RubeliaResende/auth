const RolesOperations = require('../controllers/RolesOperations')

function authUser(req, res, next){
    if( req.user == null)   {
        res.status(403)
        return res.send('You need to sign in')
    }
    acesso = (req.user.pwd === req.body.password)

    if (!acesso){
        res.status(403)
        return res.send('login failed!!!')
    }
    next()
}

async function authRole(req, res, next){
    acesso = await RolesOperations.checkAuthorization(req.user.idRole, req.originalUrl)
    if( !acesso ){
        res.status(401)
        return res.send('Not Allowed')       
    }
    next()
}

module.exports = {
    authUser,
    authRole
}
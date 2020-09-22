const express = require('express')
const app = express()
const { authUser, authRole } = require('./permissions/basicAuth')
const Associacoes = require('./models/Associations')
const Users = require('./controllers/UsersController')
const criptografia = require('./Utils/Criptografia')
//const projectRouter = require('./routes/projects')

senha = criptografia.criptografar("ana", 'sha512','pergaminho')
console.log(senha,'X')

resultado = criptografia.validaSenhar('ana', 'sha512',senha,'pergaminho')
console.log(resultado)

app.use(express.json()) 
app.use(setUser)
//app.use('/projects', projectRouter)

app.get('/', authUser, authRole, (req, res) => {
    res.send('Home Page1')
})

app.get('/dashboard', authUser, authRole, (req, res) => {
    res.send('Dashboard1')
})

app.get('/admin',authUser, authRole, (req, res) => {
    res.send('Admin Page1')
})

app.get('/projects',authUser, authRole, (req, res) => {
    res.send('listagens de todos pojetos')
})

app.listen(3000, (req, res) => {
    console.log('executando')
})

async function setUser( req, res, next ){
    const userEmail = req.body.email
    if (userEmail){
        req.user = await Users.findOne(userEmail)
    }
    next()
}
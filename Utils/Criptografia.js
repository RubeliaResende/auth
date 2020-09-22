var crypto = require('crypto');

class Criptografia {

    gerarSalt(){ // gerar chave aleatória para usar na criptografia
        return crypto.randomBytes(Math.ceil(length/2))
                .toString('hex')
                .slice(0,16); 
    }

    criptografar(texto, metodo, salt){ 
        var hash = crypto.createHmac(metodo, salt); 
        hash.update(texto);
        var hash = hash.digest('hex');
        return hash

    }   //senha = this.criptografar(senha, 'sha512', 'meu caminhao')

    criptografarComChaveAleatoria(texto, metodo){
        var salt = this.gerarSalt()
        var hash = this.criptografar(texto, metodo, salt)
        return {
            salt,
            hash,
        }
    }

    validaSenhar(senhaDigitada, metodo,  senhaNoBanco, SaltNoBanco){
        senhaDigitada = this.criptografar(senhaDigitada, metodo, SaltNoBanco )
        return (senhaDigitada === senhaNoBanco)
    }

}

module.exports = new Criptografia()
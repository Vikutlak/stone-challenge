// servidor
const express = require('express')
const server = express()

const { 
    pageLanding, 
    pageStudy, 
    pageGiveClasses, 
    saveClasses 
} = require('./pages')

// configurar nunjucks - template engine// (pasta das páginas, objeto com as opções)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server, // a variável que recebe o express()
    noCache: true, // desativa o guardar na memória para poder sempre estar atualizado
})

// Início e configuração do servidor
server
// receber os dados do req.body
.use(express.urlencoded({ extended: true}))
// configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
// rotas de aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// start do servidor
.listen(5500) 



const express = require('express')

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT

        // Middlewares
        this.middlewares();
        //Rutas de mi aplicacion
        this.routes();
    }

    middlewares(){
        // Directorio Publico
        this.app.use( express.static('public'))
    }

    routes() {
        this.app.get('/hola', (req, res) => {
            res.json({
                ok:true,
                msg:'get API'
            });
          });
          this.app.put('/hola', (req, res) => {
            res.json({
                ok:true,
                msg:'put API'
            });
          });
          this.app.post('/hola', (req, res) => {
            res.json({
                ok:true,
                msg:'post API'
            });
          });
          this.app.delete('/hola', (req, res) => {
            res.json({
                ok:true,
                msg:'delete API'
            });
          });
    }

    listen(){
            this.app.listen(this.port, () => {
            console.log(`Puerto activo: ${this.port}`)
          })
    }
}

module.exports = Server;
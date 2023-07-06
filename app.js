import dotenv from "dotenv";
import express from "express";

dotenv.config()

//Crear servidor

const appExpress = express();
//middleware pre-definidas
appExpress.use(express.json())
appExpress.use(express.text())

//router: acá usare el método POST para enviar los datos al servidor
appExpress.post('/:nombre',(req,res)=>{
    let obj ={
        Data:req.body,
        "URL":req.query,
        PARAMETROS:req.params
    }
    res.send(obj);
})

//Levantar servidor
let config = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config,()=>{
    console.log(`http://${config.hostname}:${config.port}`)
})

console.log(process.env.MY_CONFIG)

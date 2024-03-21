import express, {Router } from "express";
import EventoController from "./controller/EventoController";
import UsuarioController from "./controller/UsuarioController";


const app = express();

const router = Router()

EventoController.eventoRotas(router)
UsuarioController.usuarioRotas(router)
app.use(express.json())
app.use(router)

app.listen(3000, ()=>{
    console.log(`Aplicação online na porta: ${3000}`)
})


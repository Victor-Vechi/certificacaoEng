import { Router } from "express";
import { Usuario } from "../database/Usuario";


class UsuarioController {
    private static usuario:Usuario = Usuario.instance;
    public static usuarioRotas(router: Router): void {

        router.get("/all/usuario", (req, res) => {
            res.status(200).send(this.usuario.usuarios);
        })

        router.get("/usuario/:id", (req, res) => {
            const id: number = Number(req.params.id)
            const usuario = this.usuario.getUsuario(id)

            res.status(200).send(this.usuario);
        });

        router.post("/usuario", (req, res) => {
            const user = req.body;
            console.log(req)
            this.usuario.addUsuario(user);
            console.log(user)
            res.status(201).send({ message: "Usuario criado com sucesso"});
            
        });

        router.put("/usuario", (req, res) => {
            const usuario = req.body;

            this.usuario.updateUsuario(usuario);

            res.status(200).send({ message: "Usuario atualizado com sucesso"});
        });

        router.delete("/usuario/:id", (req, res) => {
            const id: number = Number(req.params.id);
            this.usuario.removeUsuario(id)
            res.status(200).send({ message: "Usuario removido com sucesso"});
        });

        router.post("/usuario/:id/amigo/:idamigo", (req, res)=>{
            const id: number = Number(req.params.id)
            const idAmigo: number = Number(req.params.idamigo)

            this.usuario.addAmigo(id, idAmigo)
            res.status(200).send({ message: "Amigo adicionado"});
        })

    }
} export default UsuarioController;
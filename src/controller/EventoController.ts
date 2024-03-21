import { Router } from "express";
import { Evento } from "../database/Evento";


class EventoController {
    private static evento:Evento = Evento.instance;
    public static eventoRotas(router: Router): void {
        router.get("/all/evento", (req, res) => {
            res.status(200).send(this.evento.eventosList);
        })

        router.get("/evento/:id", (req, res) => {
            const id: number = Number(req.params.id)
            const evento = this.evento.getEventoById(id)

            res.status(200).send(evento);
        });

        router.post("/evento", (req, res) => {
            const evento = req.body;

            this.evento.addEvento(evento);

            res.status(201).send({ message: "Evento criado com sucesso"});
            
        });

        router.put("/evento", (req, res) => {
            const evento = req.body;

            this.evento.updateEvento(evento);

            res.status(200).send({ message: "Evento atualizado com sucesso"});
        });

        router.delete("/evento/:id", (req, res) => {
            const id: number = Number(req.params.id);
            this.evento.removeEvento(id);
            res.status(200).send({ message: "Evento removido com sucesso"});
        });
    }

} export default EventoController
import { IEvento } from "../interface/IEvento";
import { IUsuario } from "../interface/IUsuario";
import { Usuario } from "./Usuario";


export class Evento {
    private static instancia: Evento | null = null;

    private eventos: IEvento[] = [];

    private constructor() {}

    public static get instance(): Evento {
        if (!this.instancia) {
            this.instancia = new Evento();
        }
        return this.instancia;
    }

    public getEventoById(id: number): IEvento | undefined {
        return this.eventos.find((evento) => evento.id === id);
    }

    public addEvento(evento: IEvento): void {
        this.eventos.push(evento);
    }

    public removeEvento(id: number): void {
        this.eventos = this.eventos.filter((evento) => evento.id !== id);
    }

    public updateEvento(evento: IEvento): void {
        this.eventos = this.eventos.map((e) => {
            if (e.id === evento.id) {
                return evento;
            }
            return e;
        });
    }

    public get eventosList(): IEvento[] {
        return this.eventos;
    }

    public addParticipante(eventoId: number, usuarioId:number): void {
        const usuarioInstance:Usuario = Usuario.instance
        const usuario:IUsuario = usuarioInstance.getUsuario(usuarioId)

        const evento = this.getEventoById(eventoId);
        if (evento && usuario) {
            evento.participantes.push(usuarioId);
        }
    }


}
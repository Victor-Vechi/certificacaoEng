import { IUsuario } from "./IUsuario";

export interface IEvento {
    id: number,
    nome: string,
    descricao: string,
    data: string,
    local: string,
    participantes: any[] 
}
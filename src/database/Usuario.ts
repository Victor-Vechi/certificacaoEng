import { IUsuario } from "../interface/IUsuario";

export class Usuario {
    private static instancia: Usuario | null = null;
    private users: IUsuario[] = [];

    private constructor() {}

    public static get instance(): Usuario {
        if (!this.instancia) {
            this.instancia = new Usuario();
        }
        return this.instancia;
    }

    public get usuarios(): IUsuario[] {
        return this.users;
    }

    public addUsuario(usuario: IUsuario): void {
        this.users.push(usuario);
    }

    public removeUsuario(id: number): void {
        this.users = this.users.filter((usuario) => usuario.id !== id);
    }

    public updateUsuario(usuario: IUsuario): void {
        this.users = this.users.map((u) => {
            if (u.id === usuario.id) {
                return usuario;
            }
            return u;
        });
    }

    public getUsuario(id: number): IUsuario | undefined {
        return this.users.find((usuario) => usuario.id === id);
    }

    public addAmigo(idUsuario:number, idAmigo:number): void {
        const usuario:IUsuario = this.getUsuario(idUsuario)
        const amigo:IUsuario = this.getUsuario(idAmigo)

        usuario.amigos.push(idAmigo)
        amigo.amigos.push(idUsuario)
    }

}   
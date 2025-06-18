export class Curriculo {
    constructor(
        private _id: number,
        private _nome: string,
        private _formacao: string,
        private _experiencia: string,
    ){}

    public get id(): number {
        return this._id;
    }

    public set id(v: number) {
        this._id = v;
    }


    public get nome(): string {
        return this._nome;
    }

    public set nome(value: string) {
        this._nome = value;
    }


    public get formacao(): string {
        return this._formacao;
    }

    public set formacao(value: string) {
        this._formacao = value;
    }

    public get experiencia(): string {
        return this._experiencia;
    }

    public set experiencia(value: string) {
        this._experiencia = value;
    }

    static fromMap(map:any): Curriculo {
        return new Curriculo(
            map.id,
            map.nome,
            map.formacao,
            map.experiencia
        );
    }

}
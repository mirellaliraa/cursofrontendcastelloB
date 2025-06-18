export class Curriculo {
    constructor(
        public id: number,
        public nome: string,
        public formacao: string,
        public experiencia: string,
    ){}

    static fromMap(map:any): Curriculo {
        return new Curriculo(
            map.id,
            map.nome,
            map.formacao,
            map.experiencia
        );
    }

    public toMap():{[key:string]:any}{
        return {
            id: this.id,
            nome: this.nome,
            formacao: this.formacao,
            experiencia: this.experiencia,
        }
    }
}
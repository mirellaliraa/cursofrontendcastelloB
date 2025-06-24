export class Curriculo {
    constructor(
        public id: number,
        public habilidades: string,
        public linkedin: string,
        public formacao: string,
        public experiencia: string,
    ){}

    static fromMap(map:any): Curriculo {
        return new Curriculo(
            map.id,
            map.habilidades,
            map.linkedin,
            map.formacao,
            map.experiencia
        );
    }

    public toMap():{[key:string]:any}{
        return {
            id: this.id,
            habilidades: this.habilidades,
            linkedin: this.linkedin,
            formacao: this.formacao,
            experiencia: this.experiencia,
        }
    }
}
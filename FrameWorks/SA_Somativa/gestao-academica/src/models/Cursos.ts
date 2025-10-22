import mongoose, { Schema, Model } from "mongoose";

export interface ICurso {
    _id: string;
    nome: string;
    descricao: string;
    duracaoHoras: number;
    nivel: 'Iniciante' | 'Intermediario' | 'Avancado';
    professor: string;
}

const CursoSchema: Schema<ICurso> = new Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true},
    duracaoHoras: { type: Number, required: true },
    nivel: { type: String, enum: ['Iniciante', 'Intermediario', 'Avancado'], required: true },
    professor: { type: String, required: true},
})

const Curso: Model<ICurso> = mongoose.models.Curso
|| mongoose.model<ICurso>("Curso", CursoSchema);

export default Curso;
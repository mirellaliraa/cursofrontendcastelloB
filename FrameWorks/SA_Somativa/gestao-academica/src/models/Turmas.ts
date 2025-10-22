import mongoose, { Model, Schema } from "mongoose";

export interface ITurma {
    _id: string;
    cursoId: string;
    professorId: string;
    nome: string;
    ano: number;
    semestre: number;
}

const TurmaSchema: Schema<ITurma> = new Schema({
    cursoId: { type: String, required: true },
    professorId: { type: String, required: true },
    nome: { type: String, required: true },
    ano: { type: Number, required: true },
    semestre: { type: Number, required: true },
})

const Turma: Model<ITurma> = mongoose.models.Turma
|| mongoose.model<ITurma>("Turma", TurmaSchema);

export default Turma;

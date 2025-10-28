import mongoose, { Model, Schema, Document } from "mongoose";

export interface IAluno extends Document {
  nome: string;
  email: string;
  matricula?: string;
  curso?: string;
  turma?: string;
  createdAt?: Date;
}

const AlunoSchema: Schema<IAluno> = new Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  matricula: { type: String },
  curso: { type: String },
  turma: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Aluno: Model<IAluno> = mongoose.models.Aluno || mongoose.model<IAluno>("Aluno", AlunoSchema);

export default Aluno;

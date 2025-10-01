import mongoose, { Schema, Model } from "mongoose";

export interface IMaquina {
    _id: string;
    nome: string;
    modelo: string;
    numeroSerie: string;
    localizacao: string;
    status: string;
}

const MaquinaSchema: Schema<IMaquina> = new Schema({
    nome: { type: String, required: true },
    modelo: { type: String, required: true },
    numeroSerie: { type: String, required: true, unique: true },
    localizacao: { type: String, required: true },
    status: { type: String, enum: ["ativo", "inativo", "manutencao"], default: "ativo" },
})

const Maquina: Model<IMaquina> = mongoose.models.Maquina
|| mongoose.model<IMaquina>("Maquina", MaquinaSchema);

export default Maquina;
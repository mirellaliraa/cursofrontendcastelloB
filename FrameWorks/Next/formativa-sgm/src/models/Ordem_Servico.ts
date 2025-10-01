import mongoose, { Model, Schema } from "mongoose";

export interface IOrdemServico {
    _id: string;
    title: string;
    description: string;
    tipoManutencao: string;
    status: string;
    dataCriada: Date;
    dataCompleta: Date;
    idTecnico: string;
    maquinaId: string;
}

const OrdemServicoSchema: Schema<IOrdemServico> = new Schema({
    title: { type: String, required: true},
    description: { type: String, required: true},
    tipoManutencao: { type: String, enum: ["ao fazer", "em andamento", "concluida"], required: true },
    status: {type: String, enum: ["corretiva", "preventiva"], default: "corretiva"},
    dataCriada: { type: Date, default: Date.now},
    dataCompleta: { type: Date},
    idTecnico: { type: String, required: true},
    maquinaId: { type: String, required: true},
})

const OrdemServico: Model<IOrdemServico> = mongoose.models.OrdemServico
|| mongoose.model<IOrdemServico>("Ordem usuário", OrdemServicoSchema);

export default OrdemServico;
import mongoose, { Document, Model, Schema } from "mongoose";

export interface Itarefa extends Document{
    // herdammos a base documents do moongose
    // vamos criar os atributos do obj
    titulo: string;
    concluida: boolean;
    criadaEm: Date;
}

// criar a regra (schema) do mongoDB

const TarefaSchema: Schema<Itarefa> = new mongoose.Schema({
    titulo:{
        type: String,
        required: [true, "O título é obrigatório"],
        trim: true,
        maxlength:[50, "maxímo de 50 char"]
    },
    concluida:{
        type: Boolean,
        default: false
    },
    criadaEm: {
        type: Date,
        default: Date.now // pega o carimbo de data e hora que a tarefa foi criada
    }
})

// export do modelo

const Tarefa: Model<Itarefa> = mongoose.models.Tarefa || mongoose.model<Itarefa>("Tarefa", TarefaSchema);

export default Tarefa;

// will i wait a lonely lifetime?
// if you want me to - i will! tanananana~~
// love you forever and nananever (?)
// love you with all my heart
// love you whenever we're together 
// nanana nana nanaaaa
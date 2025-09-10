// montar o schema da tabela

import mongoose from "mongoose";

//function para definir o schema
const TodoSchema = new mongoose.Schema({
    title:{ type: String,
        required:[true,"O título é obrigatório"],
        trim: true, // remove os espaços do início e do fim
        maxlength: [100, "não pode mais de 100char"] // limite de caracteres
    },
    completed:{
        type: Boolean,
        default: false, // o padrão é que seja falsa
    },
    createdAt:{
        type: Date,
        default: Date.now, // registra a data do momento da criação da tarefa
    }
});

export default TodoSchema;
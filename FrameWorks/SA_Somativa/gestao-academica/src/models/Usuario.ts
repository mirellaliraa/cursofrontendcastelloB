import mongoose, { Model, Schema, Document } from "mongoose";
import bcrypt from "bcrypt";

export interface IUsuario extends Document {
    _id: string;
    nome: string;
    email: string;
    senha?: string;
    funcao: string;
    compareSenha(senhaUsuario: string):Promise<boolean>;
}

const UsuarioSchema: Schema<IUsuario> = new Schema({
    nome: { type : String, required: true},
    email: { type: String, required: true, unique: true},
    senha: { type: String, required: true},
    funcao: {type: String, enum: ['Aluno', 'Professor', 'Coordenador'], required: true}
})

UsuarioSchema.pre<IUsuario>('save', async function (next){
    if(!this.isModified('senha') || !this.senha) return next;
    try {
        const salt = await bcrypt.genSalt(10); // todas as senhas usarão o mesmo padrão
        this.senha = await bcrypt.hash(this.senha, salt);
        next();
    } catch (error:any) {
        next(error);
    }
});

// método para comparar a senha antes de fazer o login
// quando faz o login ( compara a senha digita e criptografada, com a senha criptografada do banco)
UsuarioSchema.methods.compareSenha = function (senhaUsuario:string):Promise<boolean>{
    return bcrypt.compare(senhaUsuario, this.senha);
}

const Usuario: Model<IUsuario> = mongoose.models.Usuario 
|| mongoose.model<IUsuario>("Usuario", UsuarioSchema);

export default Usuario;
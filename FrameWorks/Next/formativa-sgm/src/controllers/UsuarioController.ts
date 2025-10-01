import Usuario, { IUsuario } from "@/models/Usuario";
import connectMongo from "@/services/mongodb"

//getAll
export const getAllUsuario = async() =>{
    await connectMongo(); // estabelece conexão
    const usuarios = await Usuario.find({}); // listar todos os usuários da coleção
    return usuarios;
}

//getOne
export const getOneUsuario = async(id:string) =>{
    await connectMongo(); // estabelece conexão
    const usuario = await Usuario.findById(id);
    return usuario;
}

//create
export const createUsuario = async(data: Partial<IUsuario>) => {
    await connectMongo();
    const novoUsuario = new Usuario(data); // cria um usuário a partir do Schema
    const novoUsuarioId = novoUsuario.save();
    return novoUsuarioId; // retorna o novo usuário já com o ID
}

//update
export const updateUsuario = async(id:string, data: Partial<IUsuario>) =>{
    await connectMongo();
    const usuarioAtualizado = await Usuario.findByIdAndUpdate(id, data, {new:true});
    return usuarioAtualizado; // retorna o novo usuário atualizado
}

//delete

export const deleteUsuario = async(id:string) =>{
    await connectMongo();
    await Usuario.findByIdAndDelete(id);
}
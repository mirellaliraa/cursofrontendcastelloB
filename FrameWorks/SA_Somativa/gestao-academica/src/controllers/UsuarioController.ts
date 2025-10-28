import Usuario, { IUsuario } from "../models/Usuario";
import connectMongo from "../services/mongodb"
import bcrypt from "bcrypt";

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
    const novoUsuario = new Usuario(data); 
    const novoUsuarioId = novoUsuario.save();
    return novoUsuarioId; 
}

//update
export const updateUsuario = async(id:string, data: Partial<IUsuario>) =>{
    await connectMongo();
    const usuarioAtualizado = await Usuario.findByIdAndUpdate(id, data, {new:true});
    return usuarioAtualizado;
}

//delete

export const deleteUsuario = async(id:string) =>{
    await connectMongo();
    await Usuario.findByIdAndDelete(id);
}

//autenticação
export const autenticaUsuario = async(email: string, senha: string) => {
    await connectMongo();
    const usuario = await Usuario.findOne({ email, senha });
    return usuario;
}

import Maquina, { IMaquina } from "@/models/Equipamento";
import Usuario from "@/models/Usuario";
import connectMongo from "@/services/mongodb"

//getAll
export const getAllMaquinas = async() =>{
    await connectMongo(); 
    const maquinas = await Maquina.find({});
    return maquinas;
}

//getOne
export const getOneMaquina = async(id:string) =>{
    await connectMongo(); 
    const maquina = await Maquina.findById(id);
    return maquina;
}

//create
export const createMaquina = async(data: Partial<IMaquina>) => {
    await connectMongo();
    const novaMaquina = new Maquina(data); 
    const novaMaquinaId = novaMaquina.save();
    return novaMaquinaId;
}

//update
export const updateMaquina = async(id:string, data: Partial<IMaquina>) =>{
    await connectMongo();
    const maquinaAtualizada = await Maquina.findByIdAndUpdate(id, data, {new:true});
    return maquinaAtualizada; 
}

//delete
export const deleteMaquina = async(id:string) =>{
    await connectMongo();
    await Maquina.findByIdAndDelete(id);
}

export const autenticaUsuario = async(email:string, senha: string) => {
    await connectMongo();
    // buscar o usuário pelo email
    const usuario = await Usuario.find({email}).select("+senha");
    // se caso usuário não encontrado
    if(!usuario || usuario.length == 0) return null;
    // se caso usuário for encontrado
    const senhaSecreta = await usuario[0].compareSenha(senha);
    if(!senhaSecreta) return null;
    // se deu certo
    return usuario[0];
}
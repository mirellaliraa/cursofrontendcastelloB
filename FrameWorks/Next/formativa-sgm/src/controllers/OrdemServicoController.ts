import OrdemServico, { IOrdemServico } from "@/models/Ordem_Servico";
import connectMongo from "@/services/mongodb"

//getAll
export const getAllOrdemServico = async() =>{
    await connectMongo(); // estabelece conexão
    const ordens = await OrdemServico.find({}); // listar todos os usuários da coleção
    return ordens;
}

//getOne
export const getOneOrdemServico = async(id:string) =>{
    await connectMongo(); // estabelece conexão
    const ordem = await OrdemServico.findById(id);
    return ordem;
}

//create
export const createOrdemServico = async(data: Partial<IOrdemServico>) => {
    await connectMongo();
    const novaOrdem = new OrdemServico(data); // cria um usuário a partir do Schema
    const novaOrdemId = novaOrdem.save();
    return novaOrdemId; // retorna o novo usuário já com o ID
}

//update
export const updateOrdemServico = async(id:string, data: Partial<IOrdemServico>) =>{
    await connectMongo();
    const ordemAtualizada = await OrdemServico.findByIdAndUpdate(id, data, {new:true});
    return ordemAtualizada; // retorna o novo usuário atualizado
}

//delete

export const deleteOrdemServico = async(id:string) =>{
    await connectMongo();
    await OrdemServico.findByIdAndDelete(id);
}
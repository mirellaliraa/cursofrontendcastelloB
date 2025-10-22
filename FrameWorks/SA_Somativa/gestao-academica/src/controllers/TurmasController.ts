import connectMongo from "../services/mongodb";
import Turma, { ITurma } from "../models/Turmas";

export const getAllTurmas = async() =>{
    await connectMongo();
    const turma = await Turma.find({});
    return turma;
}

export const getOneTurma = async(id:string) =>{
    await connectMongo();
    const turma = await Turma.findById(id);
    return turma;
}

export const createTurma = async(data: Partial<ITurma>) => {
    await connectMongo();
    const novaTurma = new Turma(data);
    const novaTurmaId = novaTurma.save();
    return novaTurmaId;
}

export const updateTurma = async(id:string, data: Partial<ITurma>) => {
    await connectMongo();
    const turmaAtualizada = await Turma.findByIdAndUpdate(id, data, {new:true});
    return turmaAtualizada;
}

export const deleteTurma = async(id:string) =>{
    await connectMongo();
    await Turma.findByIdAndDelete(id);
}
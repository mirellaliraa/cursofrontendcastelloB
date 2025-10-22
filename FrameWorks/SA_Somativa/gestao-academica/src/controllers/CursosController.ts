import Curso, { ICurso } from "../models/Cursos";
import Usuario from "../models/Usuario";
import connectMongo from "../services/mongodb"

export const getAllCursos = async() =>{
    await connectMongo();
    const cursos = await Curso.find({});
    return cursos;
}

export const getOneCurso = async(id:string) =>{
    await connectMongo();
    const curso = await Curso.findById(id);
    return curso;
}

export const createCurso = async(data: Partial<ICurso>) => {
    await connectMongo();
    const novoCurso = new Curso(data);
    const novoCursoId = novoCurso.save();
    return novoCursoId;
}

export const updateCurso = async(id:string, data: Partial<ICurso>) => {
    await connectMongo();
    const cursoAtualizado = await Curso.findByIdAndUpdate(id, data, {new:true});
    return cursoAtualizado;
}

export const deleteCurso = async(id:string) =>{
    await connectMongo();
    await Curso.findByIdAndDelete(id);
}

export const autenticaUsuario = async(email:string, senha:string) => {
    await connectMongo();
    const usuario = await Usuario.find({email}).select("+senha");
    if(!usuario || usuario.length == 0) return null;
    const senhaSecreta = await usuario[0].compareSenha(senha);
    if(!senhaSecreta) return null;
    return usuario[0];
}
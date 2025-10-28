import Aluno, { IAluno } from "@/src/models/Alunos";
import connectMongo from "@/src/services/mongodb";

export const getAllAlunos = async () => {
  await connectMongo();
  const alunos = await Aluno.find({});
  return alunos;
};

export const getOneAluno = async (id: string) => {
  await connectMongo();
  const aluno = await Aluno.findById(id);
  return aluno;
};

export const createAluno = async (data: Partial<IAluno>) => {
  await connectMongo();
  const novo = new Aluno(data);
  const saved = await novo.save();
  return saved;
};

export const updateAluno = async (id: string, data: Partial<IAluno>) => {
  await connectMongo();
  const atualizado = await Aluno.findByIdAndUpdate(id, data, { new: true });
  return atualizado;
};

export const deleteAluno = async (id: string) => {
  await connectMongo();
  await Aluno.findByIdAndDelete(id);
};

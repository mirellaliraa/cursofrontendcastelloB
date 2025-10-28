import { NextRequest, NextResponse } from "next/server";
import { deleteAluno, getOneAluno, updateAluno } from "@/src/controllers/AlunosController";

interface Parametro {
  id: string;
}

// PATCH
export async function PATCH(req: NextRequest, { params }: { params: Parametro }) {
  try {
    const { id } = params;
    const data = await req.json();
    const atualizado = await updateAluno(id, data);
    if (!atualizado) {
      return NextResponse.json({ success: false, message: "Not Found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: atualizado });
  } catch (error) {
    console.error("PATCH /api/alunos/[id] error:", error);
    return NextResponse.json({ success: false, message: "Erro ao atualizar aluno" });
  }
}

// GET (one)
export async function GET({ params }: { params: Parametro }) {
  try {
    const { id } = params;
    const aluno = await getOneAluno(id);
    if (!aluno) {
      return NextResponse.json({ success: false, message: "Not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: aluno });
  } catch (error) {
    console.error("GET /api/alunos/[id] error:", error);
    return NextResponse.json({ success: false, message: "Erro ao buscar aluno" });
  }
}

// DELETE
export async function DELETE({ params }: { params: Parametro }) {
  try {
    const { id } = params;
    await deleteAluno(id);
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    console.error("DELETE /api/alunos/[id] error:", error);
    return NextResponse.json({ success: false, message: "Erro ao deletar aluno" });
  }
}

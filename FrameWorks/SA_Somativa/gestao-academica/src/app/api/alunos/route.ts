import { NextRequest, NextResponse } from "next/server";
import { createAluno, getAllAlunos } from "@/src/controllers/AlunosController";

export async function GET() {
  try {
    const alunos = await getAllAlunos();
    return NextResponse.json({ success: true, data: alunos });
  } catch (error) {
    console.error("GET /api/alunos error:", error);
    return NextResponse.json({ success: false, message: "Erro ao buscar alunos" });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const novo = await createAluno(data);
    return NextResponse.json({ success: true, data: novo });
  } catch (error) {
    console.error("POST /api/alunos error:", error);
    return NextResponse.json({ success: false, message: "Erro ao criar aluno" });
  }
}

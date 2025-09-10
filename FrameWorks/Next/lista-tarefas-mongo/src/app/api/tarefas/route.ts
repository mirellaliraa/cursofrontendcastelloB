// criar as rotas que não precisam de id

import { createTarefa, getAllTarefas } from "@/controllers/tarefaController";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const tarefas = await getAllTarefas();
        // trata a resposta obitida da conexão com o MongoDB
        return NextResponse.json({sucess:true, data:tarefas});
    } catch (error) {
        return NextResponse.json({
            sucess:false,
            error:`Falha ao buscar as tarefas: ${error}`
        }, {status: 500})
    }
}

export async function POST(req: NextResponse) {
    try {
        const data = await req.json(); // verifica se o conteúdo está em JSON
        const newTarefa = await createTarefa(data);
        return NextResponse.json({sucess:true, data: newTarefa}, {status:201});
    } catch (error) {
        return NextResponse.json({
            sucess: false, 
            error:`Falha ao buscar as tarefas: ${error}`}, {status:400})
    }
}
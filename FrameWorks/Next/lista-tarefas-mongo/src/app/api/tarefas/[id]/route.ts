// PUT e DELETE que usam ID para fazer as requisições HTTP

import { deleteTarefa, updateTarefa } from "@/controllers/tarefaController";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

interface Parametros{
    id: string
}

export async function PUT(req: NextRequest, {params}:{params:Parametros}) {
    try {
        const {id} = params;
        const data = await req.json();
        const tarefaAtualizada = await updateTarefa(id, data);
        if(!tarefaAtualizada) { // se não achou
            return NextResponse.json({sucess: false, error: "Not Found"}, {status:404});    
        }
        return NextResponse.json({sucess: true, data: tarefaAtualizada})
    } catch (error) {
        return NextResponse.json({
            sucess: true,
            error: `Erro ao atualizar tarefa: ${error}`
        }, {status: 400});
    }
}

export async function DELETE(req: NextRequest, {params}:{params:Parametros}){
    try {
        const {id} = params;
        const resultado = await deleteTarefa(id);

        if(!resultado){
            return NextResponse.json({sucess:false, error: "Not Found"},{status:404});
        }
        return NextResponse.json({sucess: true, data:{}});
    } catch (error) {
        
    }
}
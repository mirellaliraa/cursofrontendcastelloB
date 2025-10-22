import { deleteTurma, getOneTurma, updateTurma } from "@/src/controllers/TurmasController";
import { NextRequest, NextResponse } from "next/server";

interface Parametro{
    id: string;
}

export async function PATH(req: NextRequest, {params}:{params:Parametro}) {
    try {
        const {id} = params;
        const data = await req.json();
        const turmaAtualizada = await updateTurma(id, data);
        if(!turmaAtualizada){
            return NextResponse.json({success:false, error:"Not found"});
        }
        return NextResponse.json({success:true, data: turmaAtualizada});
    } catch (error) {
        return NextResponse.json({success:false, error:error});
    }
}

export async function GET({params}:{params:Parametro}) {
    try {
        const {id} = params;
        const turma = await getOneTurma(id);
        if(!turma){
            return NextResponse.json({success:false, error:"Not found"});
        }
    } catch (error) {
        return NextResponse.json({success:false, error:error});
    }
}

export async function DELETE({params}:{params:Parametro}) {
    try {
        const {id} = params;
        await deleteTurma(id);
        return NextResponse.json({success:true, data:{}});
    } catch (error) {
        return NextResponse.json({success:false, error:error});
    }
}
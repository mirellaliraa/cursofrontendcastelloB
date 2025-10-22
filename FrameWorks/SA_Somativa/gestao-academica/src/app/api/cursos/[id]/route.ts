import { deleteCurso, getOneCurso, updateCurso } from "@/src/controllers/CursosController";
import { NextRequest, NextResponse } from "next/server";

interface Parametro{
    id: string;
}

export async function PATH(req: NextRequest, {params}:{params:Parametro}) {
    try {
        const {id} = params;
        const data = await req.json();
        const cursoAtualizado = await updateCurso(id, data);
        if(!cursoAtualizado){
            return NextResponse.json({success:false, error:"Not found"});
        }
        return NextResponse.json({success:true, data: cursoAtualizado});
    } catch (error) {
        return NextResponse.json({success:false, error:error});
    }
}

export async function GET({params}:{params:Parametro}) {
    try {
        const {id} = params;
        const curso = await getOneCurso(id);
        if(!curso){
            return NextResponse.json({success:false, error:"Not found"});
        }
    } catch (error) {
        return NextResponse.json({success:false, error:error});
    }
}

export async function DELETE({params}:{params:Parametro}) {
    try {
        const {id} = params;
        await deleteCurso(id);
        return NextResponse.json({success:true, data:{}});
    } catch (error) {
        return NextResponse.json({success:false, error:error});
    }
}
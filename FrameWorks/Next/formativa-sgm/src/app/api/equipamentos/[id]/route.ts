// rotas que precisam do id (patch, put, delete, get(one))

import { deleteMaquina, getOneMaquina, updateMaquina } from "@/controllers/EquipamentoController";
import { NextRequest, NextResponse } from "next/server";

// criar uma interface, parametro == id:string
interface Parametro{
    id: string;
}

// PATCH
export async function PATH(req: NextRequest, {params}:{params:Parametro}) {
    try {
        const {id} = params;
        const data = await req.json();
        const maquinaAtualizada = await updateMaquina(id, data);
        if(!maquinaAtualizada){
            return NextResponse.json({success:false, error:"Not Found"});
        }
        return NextResponse.json({success:true, data: maquinaAtualizada});
    } catch (error) {
        // quando não consegue conexão com o BD
        return NextResponse.json({success:false, error:error});
    }
}

// GET(One)
export async function GET({params}:{params:Parametro}) {
    try {
        const {id} = params;
        const maquina = await getOneMaquina(id);
        if(!maquina){
            return NextResponse.json({sucess:false, error:"Not found"});
        }
        return NextResponse.json({sucess:true, data: maquina});
    } catch (error) {
        // quando não consegue conexão com o BD
        return NextResponse.json({sucess:false, error:error});
    }
}

// DELETE
export async function DELETE({params}:{params:Parametro}) {
    try {
        const {id} = params;
        await deleteMaquina(id);
        return NextResponse.json({sucess:true, data:{}});
    } catch (error) {
        return NextResponse.json({success:false, error:error});
    }
}

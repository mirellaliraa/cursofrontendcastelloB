// rotas de requisição api que não usam ID 

import { createMaquina, getAllMaquinas } from "@/controllers/EquipamentoController";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        // requisição HTTP -> é front -> request -> backend
        const maquinas = await getAllMaquinas(); // busca todos os usuários no bd
        return NextResponse.json({success:true, data: maquinas});
    } catch (error) {
        return NextResponse.json({success:false, error:error});
    }
}

export async function POST(req:NextRequest) { // pega o conteúdo do HTML (visual)
    try {
        const data = await req.json(); // converte html = json
        const novaMaquina = await createMaquina(data);
        return NextResponse.json({success:true, data:novaMaquina});
    } catch (error) {
        return NextResponse.json({success:false, error:error});
    }
}


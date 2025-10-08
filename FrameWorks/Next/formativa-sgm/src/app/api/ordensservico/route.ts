// rotas de requisição api que não usam ID 


import { createOrdemServico, getAllOrdemServico } from "@/controllers/OrdemServicoController";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        // requisição HTTP -> é front -> request -> backend
        const ordemServico = await getAllOrdemServico(); // busca todos os usuários no bd
        return NextResponse.json({success:true, data: ordemServico});
    } catch (error) {
        return NextResponse.json({success:false, error:error});
    }
}

export async function POST(req:NextRequest) { // pega o conteúdo do HTML (visual)
    try {
        const data = await req.json(); // converte html = json
        const novaOrdemServico = await createOrdemServico(data);
        return NextResponse.json({success:true, data:novaOrdemServico});
    } catch (error) {
        return NextResponse.json({success:false, error:error});
    }
}


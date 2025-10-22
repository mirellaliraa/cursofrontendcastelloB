import { createCurso, getAllCursos } from "@/src/controllers/CursosController";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        const turmas = await getAllCursos();
        return NextResponse.json({success:true, data: turmas});
    } catch (error) {
        return NextResponse.json({success:false, error:error});
    }
}

export async function POST(req:NextRequest) {
    try {
        const data = await req.json();
        const novoCurso = await createCurso(data);
        return NextResponse.json({success:true, data:novoCurso});
    } catch (error) {
        return NextResponse.json({success:false, error:error});
    }
}
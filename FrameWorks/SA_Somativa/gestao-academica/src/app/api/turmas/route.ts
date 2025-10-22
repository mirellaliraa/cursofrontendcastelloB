import { createTurma, getAllTurmas } from "@/src/controllers/TurmasController";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        const turmas = await getAllTurmas();
        return NextResponse.json({success:true, data: turmas});
    } catch (error) {
        return NextResponse.json({success:false, error:error});
    }
}

export async function POST(req:NextRequest) {
    try {
        const data = await req.json();
        const novaTurma = await createTurma(data);
        return NextResponse.json({success:true, data:novaTurma});
    } catch (error) {
        return NextResponse.json({success:false, error:error});
    }
}
// duas rotas de navegação -> GET / POST

import TodoSchema from "../../../models/todo";
import connectMongo from "../../../util/mongodb";

import{ NextResponse} from 'next/server';

export async function GET() {
    try {
    await connectMongo();
    const _todo = await TodoSchema.find({sucess: true, data: todos});
} catch (error) {
    return NextResponse.json({sucess: false}, {status: 500});
}

}

export async function POST(req) {
    try {
        await connectMongo();
        const body = await req.json();
        const todo = await TodoSchema.create(data);
        return NextResponse.json({sucess: true, data: todo});
    } catch (error) {
        return NextResponse.json({sucess: false},{status:400});
    }
}
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import { autenticaUsuario } from "@/src/controllers/UsuarioController";

const JWT_SECRET = process.env.JWT_SECRET;
if(!JWT_SECRET){
    throw new Error("JWT_SECRET não está definido nas variáveis locais");
}

// começar o método
export async function POST(req: NextRequest) {
    try {
        const{email, senha} = await req.json();
        // validar os dados
        if(!email || !senha){
            return NextResponse.json(
                {success: false, message: "Usuário e senha são obrigatórios"}
            );
        }
        // método de autenticação do usuário
        const usuario = await autenticaUsuario(email, senha);
        // se não encontrou um usuário
        if(!usuario){
            return NextResponse.json(
                {success: false, message: "Usuário ou senha inválidos"}
            );
        }
        // se foi encontrado => gerar o token => acessar as próximas páginas
        const token = jwt.sign(
            {id:usuario._id, nome: usuario.nome, funcao:usuario.funcao},
            JWT_SECRET as string,
            {expiresIn: "1h"}
        );
        return NextResponse.json({
            success: true,
            token,
            usuario: {
                id: usuario.id,
                nome: usuario.nome,
                funcao: usuario.funcao
            }
        });
    } catch (error) {
        console.error('Erro durante o login:', error);
        return NextResponse.json({
            success: false, 
            message: "Erro interno do servidor"
        });
    }
}

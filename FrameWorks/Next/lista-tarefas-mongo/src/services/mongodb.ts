// Pega a string de conexão nas variaveis de ambiente do projeto (environment)

import mongoose from "mongoose";

// transformo em um endereço URL (URI)
const MONGODB_URI = process.env.DATABASE_URL; // 1

if (!MONGODB_URI) {
    throw new Error("Defina o DATABASE_URL no .env.local");
}

// cache do sistema (mongoose), armazenar as conexões já estabelecidas
let cached = (global as any).mongoose; // 2

// se cached não existir (primeira vez que acesso o site)
if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null };
}

async function connectMongo() {
    if (cached.conn) return cached.conn; // 3
    // verificar se não existe uma promessa de conexão em andamento
    if (!cached.promise) { // isso é nulo // 4
        const aguard = { bufferCommands: false };
        // crio uma promissa de conexão
        cached.promise = mongoose.connect(MONGODB_URI!, aguard)
            .then((mongoose) => {
                console.log("Conectado ao Mongo");
                return mongoose
            });
    }

    // aguardar a conexão ser criada

    try { // 5
        // cria a conexão a partir da promessa que estava pendente
        cached.conn = await cached.promise;
    } catch (error) {
        // se conexão falhar
        cached.promise = null;
        throw error;
    }

    return cached.conn;

}

// transforma em um componente reutilizável
export default connectMongo;

// 1. Passo criar o endereço de conexão
// 2. Passo criar o cached para armazenar as conexões ao longo do projeto
// 3. Passo verificar se já existe uma conexão estabelecida com DB
// 4. Passo verifica se não existe uma promessa de conexão, e cria uma promise
// 5. Passo com a promise criada, estabelece uma conexão com o banco
// 6. 
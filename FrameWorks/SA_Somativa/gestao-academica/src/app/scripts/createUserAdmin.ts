import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import Usuario from '@/src/models/Usuario';
import connectMongo from '@/src/services/mongodb';

async function createUserAdmin() {
    try {
        await connectMongo();

        const adminEmail = 'teste@gmail.com';
        const adminSenha = '123'; // Troque por uma senha segura!
        const adminNome = 'Administrador';
        const adminFuncao = 'coordenador'; // ou 'professor'

        const usuarioExistente = await Usuario.findOne({ email: adminEmail });
        
        if (usuarioExistente) {
            console.log('⚠️  Usuário admin já existe!');
            console.log('📧 Email:', usuarioExistente.email);
            console.log('👤 Nome:', usuarioExistente.nome);
            
            // Perguntar se quer atualizar a senha
            const readline = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout
            });
            
            readline.question('Deseja atualizar a senha? (s/n): ', async (resposta: string) => {
                if (resposta.toLowerCase() === 's') {
                    const salt = await bcrypt.genSalt(10);
                    const senhaHash = await bcrypt.hash(adminSenha, salt);
                    
                    await Usuario.findByIdAndUpdate(usuarioExistente._id, { senha: senhaHash });
                    console.log('✅ Senha atualizada com sucesso!');
                }
                
                readline.close();
                await mongoose.connection.close();
                console.log('👋 Desconectado do MongoDB');
            });
            
            return;
        }

        // Hashear a senha
        const salt = await bcrypt.genSalt(10);
        const senhaHash = await bcrypt.hash(adminSenha, salt);

        // Criar o usuário admin
        const novoAdmin = new Usuario({
            nome: adminNome,
            email: adminEmail,
            senha: senhaHash,
            funcao: adminFuncao
        });

        await novoAdmin.save();

        console.log('✅ Usuário admin criado com sucesso!');
        console.log('📧 Email:', adminEmail);
        console.log('🔑 Senha:', adminSenha);
        console.log('⚠️  IMPORTANTE: Troque a senha após o primeiro login!');

        // Desconectar do MongoDB
        await mongoose.connection.close();
        console.log('👋 Desconectado do MongoDB');

    } catch (error) {
        console.error('❌ Erro ao criar usuário admin:', error);
        process.exit(1);
    }
}

// Executar o script
createUserAdmin();
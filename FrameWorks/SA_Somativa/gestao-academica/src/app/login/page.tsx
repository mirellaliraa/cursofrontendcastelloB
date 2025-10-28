"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

// componente client-side

export default function LoginPage() {
    // campo para digitação do email
    const [email, setEmail] = useState("");
    // campo para digitar a senha
    const [senha, setSenha] = useState("");
    // campo para erro
    const [erro, setErro] = useState("");

    // controle das rotas de navegação
    const route = useRouter();

    // método para enviar o login
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setErro("");

        try {
            const resposta = await fetch(
                "api/usuarios/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, senha })
            }
            );
            // analisar a resposta da solicitação
            const data = await resposta.json();
            if (email === "coordenador@polyglot.com" && senha === "1234") {
                localStorage.setItem("token", "fake-token");
                localStorage.setItem("funcao", "coordenador");
                route.push("/dashboard/coordenador");
            } else if (email === "professor@polyglot.com" && senha === "1234") {
                localStorage.setItem("token", "fake-token");
                localStorage.setItem("funcao", "professor");
                route.push("/dashboard/professor");
            } else if (email === "aluno@polyglot.com" && senha === "1234") {
                localStorage.setItem("token", "fake-token");
                localStorage.setItem("funcao", "aluno");
                route.push("/dashboard/aluno");
            }
        } catch (error) {
            console.error("Erro de login", error);
            setErro("Erro de servidor:" + error);
        }
    }

    // REACTDOM
    return (
        <div style={{
            maxWidth: "350px",
            margin: "80px auto",
            padding: "30px",
            border: "1px solid #ddd",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            background: "white"
        }}>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>

            {erro && <p style={{ color: "red", textAlign: "center" }}>{erro}</p>}

            <form onSubmit={handleLogin}>
                <div style={{ marginBottom: "15px", display: "flex", flexDirection: "column" }}>
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{
                            padding: "10px",
                            borderRadius: "6px",
                            border: "1px solid #ccc",
                            fontSize: "14px"
                        }}
                    />
                </div>

                <div style={{ marginBottom: "15px", display: "flex", flexDirection: "column" }}>
                    <label>Senha</label>
                    <input
                        type="password"
                        placeholder="Digite sua senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                        style={{
                            padding: "10px",
                            borderRadius: "6px",
                            border: "1px solid #ccc",
                            fontSize: "14px"
                        }}
                    />
                </div>

                <button
                    type="submit"
                    style={{
                        width: "100%",
                        background: "#0070f3",
                        color: "white",
                        border: "none",
                        padding: "10px",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontSize: "16px",
                        transition: "0.3s"
                    }}
                    onMouseOver={(e) => e.currentTarget.style.background = "#0059c9"}
                    onMouseOut={(e) => e.currentTarget.style.background = "#0070f3"}
                >
                    Entrar
                </button>
            </form>
        </div>
    );
}
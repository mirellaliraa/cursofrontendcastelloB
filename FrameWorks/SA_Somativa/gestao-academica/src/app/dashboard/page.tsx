"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DashboardCoordenador from "./coordenador/page";
import DashboardProfessor from "./professor/page";
import DashboardAluno from "./aluno/page";

export default function DashboardPage() {
    const route = useRouter();
    const [userFuncao, setUserFuncao] = useState<string | null>(null);

    useEffect(() => {
        const funcao = localStorage.getItem("funcao");
        if (!funcao) {
            route.push("/login");
        } else {
            setUserFuncao(funcao);
        }
    });

    const handleLogout = async () => {
        localStorage.removeItem("token");
        localStorage.removeItem("funcao");
        route.push("/login");
    };

    const renderDashboard = () => {
        if (userFuncao?.toLowerCase() === "coordenador") {
            return <DashboardCoordenador />;
        } else if (userFuncao?.toLowerCase() === "professor") {
            return <DashboardProfessor />;
        } else if (userFuncao?.toLowerCase() === "aluno") {
            return <DashboardAluno />;
    };
}

  return (
    <>
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "30px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        background: "white",
      }}
    >
        
      <h2 style={{ textAlign: "center", marginBottom: "20px", fontSize: "24px" }}>Painel</h2>

      <p style={{ fontSize: "16px", lineHeight: 1.5 }}>
        Seja bem-vindo ao sistema de gestão acadêmica.
      </p>

      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
        
      </div>
    </div>
    </>
  );
}
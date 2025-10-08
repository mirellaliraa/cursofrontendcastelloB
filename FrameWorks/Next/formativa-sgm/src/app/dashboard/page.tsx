"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DashboardPage(){
    const route = useRouter();
    const [userFuncao, setUserFuncao] = useState<string | null>(null);

    useEffect(()=>{
        const funcao = localStorage.getItem("funcao");
        if(!funcao){
            route.push("/login");
        }else{
            setUserFuncao(funcao);
        }
    });

    //logout
    const handleLogout = async () =>{
        localStorage.removeItem("token");
        localStorage.removeItem("funcao");
        route.push("/login");
    };

    // montar a tela de acordo com a função do usuário
    const renderDashboard = () => {
        if(userFuncao?.toLowerCase() === "admin"){
            return <DashboardAdmin />;
        } else if (userFuncao === "gestor"){
            return <DashboardGestor/>;
        }else if (userFuncao === "tecnico"){
            return <DashboardTecnico/>;
        }
    }

    return (
        <div>
            <header>
                <h1>Bem vindo</h1>
                <button onClick={handleLogout}>Logout</button>
            </header>
            <main>
                {renderDashboard()}
            </main>
        </div>
    );
}
"use client";

export default function Home(){

  // useEffect => criar um usuário admin ao carregar o site
  return(
    <div>
      <h1>Bem vinndo ao sistema de gestão de manutenção</h1>
      <p>Por favor, faça login para continuar</p>
      <a href="/login">Ir para login</a>
    </div>
  );
}
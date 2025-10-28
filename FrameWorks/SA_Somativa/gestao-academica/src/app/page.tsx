"use client";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "10px", fontSize: "20px" }}>
      <h1>Bem-vindo ao Sistema de Gestão Acadêmica</h1>
      <p>Por favor, faça login para continuar.</p>

      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
        <a href="/login">
          <button
            style={{
              background: "#0070f3",
              color: "white",
              border: "none",
              padding: "10px 20px",
              marginRight: "20px",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Ir para login
          </button>
        </a>
      </div>
    </div>
  );
}
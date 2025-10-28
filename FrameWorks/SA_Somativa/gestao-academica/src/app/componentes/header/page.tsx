"use client";

export default function Header() {
    return (
        <nav>
            <ul style={{ display: "flex", listStyle: "none", padding: 0 }}>
                <li style={{ marginRight: "20px" }}>
                    <a href="/cursos">Cursos</a>
                </li>
                <li style={{ marginRight: "20px" }}>
                    <a href="/turmas">Turmas</a>
                </li>
                <li style={{ marginRight: "20px" }}>
                    <a href="/alunos">Alunos</a>
                </li>

                <a href="/">
                    <button
                        style={{
                            display: "flex",
                            alignItems: "right",
                            background: "#0070f3",
                            color: "white",
                            border: "none",
                            padding: "10px 20px",
                            marginRight: "20px",
                            borderRadius: "6px",
                            cursor: "pointer",
                            fontSize: "16px",
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.background = "#0059c9")}
                        onMouseOut={(e) => (e.currentTarget.style.background = "#0070f3")}
                    >
                        Sair
                    </button>
                </a>
            </ul>
        </nav>
    );
}
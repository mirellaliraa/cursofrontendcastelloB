# 🏠 Imobiliária Prime

## 📌 Levantamento de Requisitos

### 🎯 Objetivos SMART
- **Específico:** Desenvolver uma aplicação web que permita cadastro e login de clientes e corretores de imóveis, com autenticação e autorização baseadas em perfis.  
- **Mensurável:** Entregar uma aplicação funcional com protótipos, diagramas, código-fonte completo e README documentado dentro do prazo.  
- **Atingível:** Utilizar tecnologias já estudadas (Angular, JSON Server, SCSS, Angular Material), além de aplicar conceitos de guardas de rota e LocalStorage.  
- **Realista:** Criar uma plataforma imobiliária onde clientes podem demonstrar interesse em imóveis e corretores podem gerenciar seus anúncios.  
- **Tempo:** 3 semanas.  

---

### ✅ Requisitos Funcionais
- **Usuário não autenticado (visitante):**
  - Visualizar página inicial com destaques.  
  - Buscar imóveis disponíveis.  
  - Ver detalhes de imóveis.  
  - Criar conta como **cliente**.  

- **Cliente (logado):**
  - Todas as funcionalidades públicas.  
  - Marcar imóveis como **Tenho Interesse**.  
  - Visualizar lista de interesses.  
  - Editar perfil.  

- **Corretor (logado):**
  - Login com credenciais já criadas pelo administrador.  
  - CRUD completo dos seus próprios imóveis.  
  - Acesso ao **Dashboard de Imóveis**.  
  - Visualizar lista de clientes interessados.  

---

### ⚙️ Requisitos Não-Funcionais
- O sistema deve ser **responsivo**.  
- O sistema deve ser **seguro**, restringindo acesso por tipo de usuário.  
- Armazenamento de sessão via **LocalStorage**.  
- Autenticação e autorização com **guardas de rota**.  
- Interface amigável e intuitiva, seguindo identidade visual definida.  

---

### 👥 Recursos Humanos
- Projeto individual.
- Papéis definidos:
  - **Frontend**: implementação em Angular.  
  - **UI/UX**: protótipos no Figma.  
  - **Database/Backend**: configuração do JSON Server.  
  - **Documentação**: README, diagramas e relatórios.  

---

### 💻 Recursos Tecnológicos
- **Figma** → prototipagem de telas.  
- **Angular 16+** → framework para frontend SPA.  
- **JSON Server** → simulação de backend.  
- **Reactive Forms** → gerenciamento de formulários.  
- **LocalStorage** → persistência de sessão do usuário.  
- **Guardas de Rota (AuthGuard, CorretorGuard)** → segurança de acesso.  
- **SCSS** → estilização.  
- **Angular Material** → componentes de UI e feedback (snackbars).  

---

## 📊 Diagrama de Fluxo

```mermaid
flowchart TD
    Start[Início] --> Login{Usuário já possui conta?}
    Login -- Não --> RegistroCliente[Registrar Cliente]
    Login -- Sim --> Autenticar[Login com Email/Senha]

    Autenticar --> Perfil{Tipo de Usuário}
    Perfil -- Cliente --> MeusInteresses[Meus Interesses]
    Perfil -- Cliente --> BuscarImoveis[Buscar Imóveis]
    Perfil -- Corretor --> Dashboard[Dashboard de Imóveis]
    Perfil -- Corretor --> CRUDImoveis[CRUD de Imóveis]
    BuscarImoveis --> DetalhesImovel[Visualizar Detalhes]
    DetalhesImovel --> Interesse[Marcar Interesse]

    Interesse --> MeusInteresses
    CRUDImoveis --> Dashboard

---

## 📊 Diagrama de classes 

classDiagram
    class Usuario {
      +id: number
      +nome: string
      +email: string
      +senha: string
      +tipo: string
    }

    class Cliente {
      +meusInteresses(): void
    }

    class Corretor {
      +dashboardImoveis(): void
    }

    class Imovel {
      +id: number
      +titulo: string
      +corretorId: number
      +tipo: string
      +cidade: string
      +preco: number
      +descricao: string
      +imagemUrl: string
    }
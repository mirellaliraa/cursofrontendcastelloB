# Sistema de gestão de manutenção (Formativa)

## Briefing

### Visão geral do projeto
O projeto consiste no desenvolvimento de um Sistema de Gestão de Manutenção (SGM) no formato de uma aplicação web.

## Escopo 

- ### Objetivos: 

- ### Público-alvo:
    - Técnicos de manutenção
    - Gestores de manutenção
    - Administradores do sistema

- ### Recursos Tecnológicos:

## Diagramas (Mermaid, Miro, Draw.io)

1. ### Diagrama de classes
Este diagrama modela as principais entidades do sistema:
- Usuários (User/Usuarios);
- Máquinas/Equipamentos (Equipment);
- Ordem de serviço(Service);

```mermaid

classDiagram
    
    class Usuario{
      +string: id
      +nome: string
      +email: string
      +senha: string
      +funcao: string
      +login()
      +logout()
      +create()
      +read()
      +update()
      +delete()
    }
    class Maquinas{
      -id: string
      -nome: string
      -modelo: string
      -numeroSerie: string
      -localizacao: string
      -status: string
      +create()
      +read()
      +update()
      +delete()
    }
    class OrdemServico{
      +id: string
      +titulo: string
      +description: string
      +tipoManutencao: string
      +status: string
      +dataCriada: date
      +dataCompleta: date
      +idTecnico: string
      +maquinaId: string
      +create()
      +read()
      +update()
      +delete()
    }

    Usuario "1" -- "1+" OrdemServico : "é responsável por"
    Maquinas "1" -- "1+" OrdemServico : "associado a"

``` 
### Explicação do diagrama de classe
- Um usuário (técnico) pode ser responsável por várias ordens de serviço

- Um equipamento pode estar associado a várias ordens de serviço

2. ### Diagrama de caso de uso
Ilustrar as interações dos diferentes tipos de usuários (atores) com as funcionalidades do sistema

#### Explicação:
- Atores: Técnico, Gestor, Admin

- Casos de usos:
    - Técnico: Gerenciar ordens de serviço (CRUD) e acessar o dashboard
    - Gestor: Gerenciar ordens de serviço (CRUD), gerenciar equipamentos (CRUD), acessar o dashboard
    - Admin: Gerenciar usuários, acessar o dashboard

    Fazer o login -> Antes de qualquer ação

```mermaid
graph TD
    subgraph "SGM"
        caso1([Fazer login])
        caso2([Gerenciar ordens de serviço - CRUD])
        caso3([Gerenciar equipamentos - CRUD])
        caso4([Gerenciar usuários])
        caso5([Acessar o dashboard])
    end

    Tecnico([Técnico de manutenção])
    Gestor([Gerente de manutenção])
    Admin([Administrador do sistema])

    Tecnico --> caso1
    Tecnico --> caso3
    Tecnico --> caso5

    Gestor --> caso1
    Gestor --> caso2
    Gestor --> caso3
    Gestor --> caso5

    Admin --> caso1
    Admin --> caso4
    Admin --> caso5

    caso2 -.-> caso1
    caso3 -.-> caso1
    caso4 -.-> caso1
    caso5 -.-> caso1

```

3. ### Diagrama de fluxo (Login e Acesso ao Dashboard)
Detalhar o passo a passo que um usuário segue para se autenticar no sistema e acessar o dashboard

#### Explicação:
- O fluxo começa quando o usuário acessa a tela de login
- Insere as credenciais(email e senha)
- O sistema verifica se as credenciais são válidas
    - se sim: gera um JWT (token) => dashboard
    - se não: mensagem de erro e usuário permanece na tela de login

```mermaid

graph TD
    A[Início] --> B{Acessa a tela de login}
    B --> C[Preencher email e senha]
    C --> D{Valida as credenciais}
    D --> Sim --> E[Gera um token JWT]
    E --> F[Dashboard]
    D --> Não --> K[Mensagem de erro]
    K --> B

```

## Análise de risco

# Matriz de análise de risco do projeot SGM

A tabela abaixo apresenta os riscos identificados no projeot **SGM**, organizados por categoria, junto com a probabilidade, impacto e estratégias de mitigação propostas.

---

### Riscos Técnicos

| ID  | Risco                                     | Probabilidade | Impacto | Mitigação |
|-----|-------------------------------------------|---------------|---------|-----------|
| 1   | Chave secreta do JWT comprometida         | Média         | Alto    | Utilizar chaves secretas longas e complexas, armazená-las em variáveis de ambiente e implementar política de rotação de chaves. |
| 2   | Vulnerabilidade de truncamento do Bcrypt  | Baixa         | Alto    | Garantir que a entrada para o hashing de senha nunca exceda 72 bytes e tratar a senha de forma isolada, sem concatenação. |
| 3   | Lentidão do sistema com aumento de dados  | Média         | Média   | Otimizar consultas com indexação, implementar paginação e planejar arquitetura para escalabilidade futura. |
| 4   | Código de baixa qualidade com bugs        | Alta          | Média   | Adotar práticas de código limpo, revisões de código (code review) e testes unitários e de integração contínua. |

---

### Riscos de Gerenciamento

| ID  | Risco                             | Probabilidade | Impacto | Mitigação |
|-----|-----------------------------------|---------------|---------|-----------|
| 5   | Aumento do escopo (Scope Creep)   | Alta          | Média   | Formalizar processo de controle de mudanças e avaliar impacto em prazo/custo antes da aprovação. |
| 6   | Atraso na entrega do projeto      | Alta          | Média   | Utilizar metodologias ágeis, reavaliar cronograma a cada sprint e manter comunicação transparente sobre progresso. |
| 7   | Requisitos mal interpretados      | Média         | Alto    | Validar protótipos e wireframes com usuários finais e manter comunicação constante para esclarecimento. |

---

### Riscos Organizacionais

| ID  | Risco                                    | Probabilidade | Impacto | Mitigação |
|-----|------------------------------------------|---------------|---------|-----------|
| 8   | Resistência dos usuários à nova ferramenta | Média       | Alto    | Envolver usuários-chave desde o início, criar interface amigável (UI/UX) e comunicar benefícios do sistema. |
| 9   | Inserção de dados incorretos no sistema  | Média         | Alto    | Implementar validações robustas nos formulários e, se possível, importar/validar dados existentes. |
| 10  | Falta de treinamento para os usuários    | Média         | Média   | Criar manuais de usuário, realizar treinamentos práticos por perfil (técnico, gestor, administrador) e oferecer suporte. |

---

## Prototipagem

Tela de login -> Unica

DashBoard -> Técnico, Gerente, Admin

---

## Codificaçãõ



https://www.figma.com/design/iJJJo1AQgHweSdfUuSSETs/Untitled?node-id=0-1&m=dev&t=XuQkJfUSQItXrI6X-1

https://www.figma.com/design/iJJJo1AQgHweSdfUuSSETs/Untitled?node-id=0-1&t=XuQkJfUSQItXrI6X-1
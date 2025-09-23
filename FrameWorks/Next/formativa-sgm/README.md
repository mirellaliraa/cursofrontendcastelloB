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
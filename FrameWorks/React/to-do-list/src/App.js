import "./App.css";

import { useState } from "react"
import ToDoForm from "./componetes/ToDoForm";
import ToDoList from "./componetes/ToDoList";

const App = () =>{
  // lógica do componente
  const [tarefas, setTarefa] = useState([]);
  // estado para armazenamento da lista de tarefas

  const addTarefa = (tarefa) => {
    setTarefa([...tarefas, tarefa]);
    // adiciona a nova tarefa ao array de tarefas, ...tarefas => copia todas as tarefas
    // que já estão adicionadas anteriormente
  };

  const removeTarefa = (index) => {
    setTarefa(tarefas.filter((_,i)=> i !== index));
    // filtra o array de tarefas, removendo a tarefa com o índice igual ao index
    //(_,i) mantém o vetor original , com o novo índice
  };
  // VIEW DO COMPONENTE
  return(
    <div>
      <h1>To-do-List APP</h1>
      <ToDoForm addTarefa={addTarefa}/>
      <ToDoList tarefas={tarefas} removerTarefa={removeTarefa}/>
    </div>
  );
}


"use client";
import { Itarefa } from "@/models/tarefa";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

 // indicar que é a tela usada pelo cliente

export default function Home(){
  // useState => armazenamento localStorage
  const [tarefas, setTarefas] = useState<Itarefa[]>([]);
  const [newTarefa, setNewTarefa] = useState<string>("");

  // useEffect
  useEffect(()=>{
    // fazer o useEffect no carregamento da tela inicial
    fetchTarefas(); // carregar todas as tarefas do banco de dados
  }, []);

  // carregar tarefas
  const fetchTarefas = async () => {
    try {
      const resposta = await fetch("/api/tarefas"); // realiza a conexõa http com o backend
      const data = await resposta.json(); // c verificar esta em Json
      if(data.sucess){
        setTarefas(data.data);
      }
    } catch (error) {
      console.error(error);
    } 
  }

  // add tarefa
  const addTarefa = async (e: FormEvent) =>{
    e.preventDefault(); // evita o carregamento da tela
    if(!newTarefa.trim()) return;
    try {
      const resultado = await fetch("/api/tarefas",{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({titulo:newTarefa})
      });
      const data = await resultado.json();
      if(data.sucess){ // se resultado for ok
        setTarefas([...tarefas, data.data]); // adiciona a nova tarefa no vetor
        setNewTarefa(""); // limpo o campo do input
      } 
    } catch (error) {
      console.error(error);
    }
  }

  // update tarefa
  const atualizarTarefa = async () => {
  }

  // delete tarefa
  const deletarTarefa = async () =>{

  }

  return(
    <div>
      <h1>Lista de tarefas</h1>
      <form onSubmit={addTarefa}>
        <input type="text"
        value={newTarefa}
        onChange={(e:ChangeEvent<HTMLInputElement>)=> setNewTarefa(e.target.value)}
        placeholder="Adicione uma nova tarefa"/>
        <button type="submit">Adicionar tarefa</button>
      </form>
      <ul>
        {tarefas.map((tarefa)=> (
          <li key={tarefa.id.toString()}>
          </li>
        ))}
      </ul>
    </div>
  );

}

// do we neeeeeeeeeeeed anybooody ???????????????? i need somebody to love !
// ohhh i get high with a little help from my friends
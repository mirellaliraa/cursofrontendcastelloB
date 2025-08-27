// componente para criar o formulário para inserir uma nova tarefa
import "./ToDoForm.css"

const { useState } = require("react")

const ToDoForm = ({addTarefa}) =>{
    // estado para armazenar o valor do input (campo para inserir a tarefa)
    const [tarefa, setTarefa] = useState("");
    // definir o useState => usa a memória local do navegador para armazenar as mudanças de estado
    //[primeiro campo o armazenamento, segundo campo a função de mundança de estado]

    // função para atualizar o estado com o valor do input
    const handleSubmit = (e) =>{
        // impedir o comportamento padrão do formulário
        e.preventDefault();
        if(tarefa.trim()!==""){
            // adiciono a tarefa ao array de tarefas
            addTarefa(tarefa);
            //limpa o campo do input
            setTarefa("");
        }
    };
    return(
        //retorna o formulário (o view)
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Insira uma nova tarefa"
                value={tarefa}
                onChange={(e) => setTarefa(e.target.value)}/>
                <button type="submit">Adicionar</button>
        </form>
    );
};

// componente para criar um formulário para inserir uma nova tarefa
// pode ser reutilizado em outros componentes (export)
export default ToDoForm;

// i may not always love you ~
// but long as there are stars above you
// you never need to doubt it
// i'll make you so sure about it
// god only knows what i'd be without you

//Seleciona os elementos da página
const campoTarefa = document.getElementById("tarefa");
const campoPrioridade = document.getElementById("prioridade");
const botaoAdicionar = document.getElementById("botaoAdicionar");
const listaTarefas = document.getElementById("listaTarefas");
const mensagemErro = document.getElementById("mensagemErro");


//Quando clica no botão
botaoAdicionar.addEventListener("click", function () {

    //Captura os valores digitados
    const tarefa = campoTarefa.value.trim();

    const prioridade = campoPrioridade.value;

    //Limpa as mensagens que tinham antes
    mensagemErro.textContent = "";

    // Validação dos campos
    if (tarefa === "" || prioridade === "") {

        mensagemErro.textContent =
            "Preencha todos os campos corretamente.";

        return;
    }

    //Faz um novo item da lista
    const novoItem = document.createElement("li");

    //Define o conteúdo do item
    novoItem.textContent =
        `Tarefa: ${tarefa} | Prioridade: ${prioridade}`;

    //Adiciona o item na lista
    listaTarefas.appendChild(novoItem);

    //Limpa os campos após adicionar
    campoTarefa.value = "";

    campoPrioridade.value = "";
});
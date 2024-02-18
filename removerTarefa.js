import { prompt } from './utils.js';
import { listarTarefas } from './listarTarefas.js';

export function removerTarefa(tarefas) {

  if (tarefas.length === 0){
    console.log("Sem tarefas cadastradas");
    return tarefas;
  }

  listarTarefas(tarefas);
  let id = Number(prompt('Qual tarefa deseja remover?: ').trim()?.[0]);

  let tarefaEncontrada = tarefas.find(tarefa => tarefa.id === id);
  if (!tarefaEncontrada) {
    console.log('Tarefa não encontrada.');
    return tarefas;
  }

  console.log(`Você está prestes a remover a seguinte tarefa:\nNome: ${tarefaEncontrada.nome}\nDescrição: ${tarefaEncontrada.descricao}`);
  let confirmacao = prompt('Digite "sim" para confirmar: ');

  if (confirmacao.toLowerCase() === 'sim') {

    tarefas.array.forEach((tarefa, i) => {
      if (tarefa.id === id) {
        tarefas.splice(i, 1);
        console.log('Tarefa removida com sucesso.');
      }
    });
  } else {
    console.log('Operação de remoção cancelada.');
  }

}

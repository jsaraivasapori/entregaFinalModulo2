import { prompt } from './utils.js';
import { listarTarefas } from './listarTarefas.js';

export function removerTarefa(tarefas) {

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

    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    console.log('Tarefa removida com sucesso.');
  } else {
    console.log('Operação de remoção cancelada.');
  }

  return tarefas;
}

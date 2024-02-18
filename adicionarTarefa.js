import { obterIdValido, prompt } from './utils.js';

export function adicionarTarefa(tarefas) {
  
  let nome = '';
  let descricao = '';
  do {
    console.log('Digite o nome da tarefa:\n>');
    nome = prompt();
  } while (!nome || nome.length < 3);

  do {
    console.log('Digite a descrição da tarefa:\n>');
    descricao = prompt();
  } while (!descricao || descricao.length < 8);

  tarefas.push({
    id: obterIdValido(tarefas),
    nome,
    descricao,
    concluido: false,
  });

  return tarefas;
}

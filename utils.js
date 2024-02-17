import { tarefas } from './tarefas.js';
import promptSync from 'prompt-sync';
export const prompt = promptSync();

export function obterIdValido(tarefas) {
  const ids = tarefas.map((tarefa) => tarefa.id).sort((a, b) => a - b);
  const lastId = ids.at(-1) || 0;
  return lastId + 1;
}

export function obterIdTarefa(tarefas) {
  let id = null;
  mostrarTarefas();
}

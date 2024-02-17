export function listarTarefas(tarefas) {
  console.log('----- LISTA DE TAREFAS -----');
  for (const { id, nome, concluido } of tarefas) {
    console.log(id, nome, concluido ? '(concluido)' : '');
  }
}

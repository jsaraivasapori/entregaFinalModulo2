export function listarTarefas(tarefas) {

  console.log('----------------------- LISTA DE TAREFAS ----------------------- \n');

  const transformed = tarefas.reduce((acc, {id, ...x}) => { acc[id] = x; return acc}, {});

  console.table(transformed);

}

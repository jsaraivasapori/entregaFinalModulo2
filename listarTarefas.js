export function listarTarefas(tarefas) {
  console.log(
    "----------------------- LISTA DE TAREFAS ----------------------- \n"
  );

  const transformed = tarefas.map(({ id, nome, descricao, concluido }) => ({
    id,
    nome,
    descricao,
    status: concluido ? "Concluído" : "Pendente",
  }));

  console.table(transformed);
}

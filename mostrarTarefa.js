import { prompt } from "./utils.js";

function centralizeLog(text) {
  const totalWidth = process.stdout.columns;
  const lines = text.split("\n");

  lines.forEach((line) => {
    const leftPadding = Math.floor((totalWidth - line.length) / 2);
    const paddingString = " ".repeat(Math.max(0, leftPadding));
    console.log(paddingString + line);
  });
}

export function mostrarTarefa(tasks) {
  console.clear();
  const printid = Number(
    prompt("Digite o ID da tarefa a ser exibida: ").trim()
  );
  let tarefa = tasks.find((tarefa) => tarefa.id === printid);

  if (tarefa) {
    centralizeLog("===||| Sua Tarefa Buscada é |||===\n");
    centralizeLog(
      `=========================  ${tarefa.id} - ${tarefa.nome}  ========================\n`
    );
    centralizeLog("|| Descrição da Tarefa: ||\n");
    centralizeLog(`${tarefa.descricao}\n`);

    if (tarefa.concluido === true) {
      centralizeLog("||Status||: A tarefa está Concluída😎\n");
    } else {
      centralizeLog("||Status||: A tarefa ainda não foi finalizada 😴\n");
    }
  } else {
    console.log("Tarefa não encontrada.");
  }
}

import { tarefas } from "./tarefas.js";

function centralizeLog(text) {
  const totalWidth = process.stdout.columns;
  const lines = text.split("\n");

  lines.forEach((line) => {
    const leftPadding = Math.floor((totalWidth - line.length) / 2);
    const paddingString = " ".repeat(Math.max(0, leftPadding));
    console.log(paddingString + line);
  });
}

export function mostrarTarefa(id) {
  console.clear();
  centralizeLog("===||| Suas Tarefas Registradas São: |||===\n");
  for (const { id, nome, descricao, concluido } of tarefas) {
    centralizeLog(
      `=========================  ${id} - ${nome}  ========================\n`
    );
    centralizeLog(`|| Descrição da Tarefa: ||\n`);
    centralizeLog(`( ${descricao} )\n`);
    if (concluido === true) {
      centralizeLog("Status: A tarefa está Conclúida😎\n");
    } else if (concluido === false) {
      centralizeLog(`||Status||: A tarefa ainda não foi finalizada 😴\n`);
    }
  }
}



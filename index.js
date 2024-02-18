import { adicionarTarefa } from './adicionarTarefa.js';
import { editarTarefa } from './editarTarefa.js';
import { listarTarefas } from './listarTarefas.js';
import { mostrarTarefa } from './mostrarTarefa.js';
import { removerTarefa } from './removerTarefa.js';
import { tarefas } from './tarefas.js';
import { obterIdValido, prompt } from './utils.js';

let tasks =  [...tarefas];

const menu = [
  'Mostrar tarefas',
  'Adicionar tarefa',
  'Editar tarefa',
  'Remover tarefa',
  'Mostrar tarefa',
];

function mostrarMenu() {
  for (let i in menu) {
    i = Number(i);
    console.log(`${i + 1}. ${menu[i]}`);
  }
}

function iniciar() {
  while (true) {
    let escolha = null;

    do {
      console.clear();
      mostrarMenu();
      console.log();
      escolha = Number(
        prompt('Qual opção deseja? [digite 0 para sair]: ').trim()?.[0]
      );
      if (isNaN(escolha)) {
        continue;
      }
      if (escolha < 0 || escolha > menu.length) {
        continue;
      }
    } while (escolha === null);

    if (escolha == 0) {
      return;
    }

    let id = null;
    if (escolha === 3 || escolha === 4 || escolha === 5) {
      id = obterIdValido(tasks);
    }

    switch (escolha) {
      case 1:
        listarTarefas(tasks);
        break;
      case 2:
        adicionarTarefa(tasks);
        break;
      case 3:
        editarTarefa(id);
        break;
      case 4:
        tasks = removerTarefa(tasks);
        break;
      case 5:
        mostrarTarefa(id);
        break;
    }

    if (escolha !== 1) {
      listarTarefas(tasks);
    }

    prompt('Aperte enter para continuar');
  }
}

iniciar();

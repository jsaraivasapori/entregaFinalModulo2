import { adicionarTarefa } from './adicionarTarefa.js';
import { editarTarefa } from './editarTarefa.js';
import { listarTarefas } from './listarTarefas.js';
import { mostrarTarefa } from './mostrarTarefa.js';
import { removerTarefa } from './removerTarefa.js';
import { tarefas } from './tarefas.js';
import { obterIdValido, prompt } from './utils.js';

let tasks = [...tarefas];

const menu = [
  'Mostrar tarefas',
  'Adicionar tarefa',
  'Editar tarefa',
  'Remover tarefa',
  'Mostrar tarefa',
];

function mostrarMenu() {

  console.clear();
  console.log("Gerenciador de tarefas\n")

  for (let i in menu) {
    i = Number(i);
    console.log(`${i + 1}. ${menu[i]}`);
  }

  console.log();

}

function ehOpcaoValida(escolha, menu) {

  if (escolha === 0)
    process.exit();

  return (escolha === null || !isNaN(escolha) || escolha < 0 || escolha > menu.length);

}

function selecionarTarefa(escolha) {

  let id = null;

  if (escolha === 3 || escolha === 4 || escolha === 5)
    id = obterIdValido(tasks);
  
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
    default:
      console.log("Seleção inválida");
  }

  if (escolha !== 1)
    listarTarefas(tasks);
  
}

function iniciar() {

    let escolha = null;

    do {

      mostrarMenu();

      escolha = Number(
        prompt('Qual opção deseja? [digite 0 para sair]: ').trim()?.[0]
      );

    } while (!ehOpcaoValida(escolha, menu));

    selecionarTarefa(escolha);

}

iniciar();

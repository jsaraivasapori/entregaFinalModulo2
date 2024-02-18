import { prompt } from './utils.js';
import { tarefas } from './tarefas.js';

export function editarTarefa() {
  const idEditar = Number(prompt("Informe o ID da tarefa: ").trim())

 // Busca esse id no array tarefas
 let tarefaEncontrada = tarefas.find(tarefa =>  tarefa.id === idEditar)

 if (!tarefaEncontrada) {
  console.log('Tarefa não encontrada.Repita a operação');
  return tarefas;
}
 const menuEdicao = Number(prompt(
  `
   1 - Alterar nome da tarefa
   2 - Alterar Descrição da tarefa
   3 - Alterar status da tarefa 
   Escolha o que deseja alterar na tarefa ${tarefaEncontrada.nome}: `
  ).trim())

 switch (menuEdicao){
  case 1:
    const nomeAlterado = prompt("Informe novo nome: ").trim()
    tarefaEncontrada.nome = nomeAlterado
    console.log(`Alteração efetuada com sucesso. ${tarefaEncontrada.nome} alterado para ${nomeAlterado} `)
    break

    case 2:
      const descricaoAlterada = prompt("Informe a nova descricao: ").trim()
      tarefaEncontrada.descricao = descricaoAlterada
      console.log(`Alteração efetuada com sucesso. ${tarefaEncontrada.descricao} aletrado para ${descricaoAlterada}`)
      break

    case 3:
      const statusAlterado = prompt("Informe o novo status: ").trim()
      tarefaEncontrada.concluido = statusAlterado
      console.log(`Alteração efetuada com sucesso. ${tarefaEncontrada.concluido} alteradop para ${statusAlterado}`)
      break

    default:
      console.log("Algo deu errado, volte ao menu e refaça a operação");
 }
 
}




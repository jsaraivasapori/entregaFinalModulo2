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
    console.clear()
    const nomeAlterado = prompt("Informe novo nome: ").trim()
    tarefaEncontrada.nome = nomeAlterado
    console.log(`Alteração efetuada com sucesso. ${tarefaEncontrada.nome} alterado para ${nomeAlterado} `)
    break

    case 2:
      console.clear()
      const descricaoAlterada = prompt("Informe a nova descricao: ").trim()
      tarefaEncontrada.descricao = descricaoAlterada
      console.log(`Alteração efetuada com sucesso. ${tarefaEncontrada.descricao} alterado para ${descricaoAlterada}`)
      break

    case 3:
      let statusValido = false
      while(!statusValido){
      console.clear()
      const statusAlterado = Number(prompt(
        `
        0- Tarefa em adamento
        1 - Tarefa concluída
        

        Informe o novo status: `
      ).trim())
      if(statusAlterado === 0 || statusAlterado === 1){

      statusValido = true
      tarefaEncontrada.concluido = Boolean(statusAlterado)

      console.log(`Alteração efetuada com sucesso. ${tarefaEncontrada.concluido} alterado para ${Boolean(statusAlterado)}`)
      }
      else(console.log("Opção inexistente, revise a ação"))
    }break
    

    default:
      console.log("Algo deu errado, volte ao menu e refaça a operação");
 }
 
}




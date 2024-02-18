import { prompt } from './utils.js';

export function editarTarefa(tasks) {
  const idEditar = Number(prompt("Informe o ID da tarefa: ").trim())

 
  let tarefaEncontrada = tasks.find(tarefa =>  tarefa.id === idEditar)

  if (!tarefaEncontrada) {
    console.log('Tarefa não encontrada.Repita a operação');
    return tasks;
  }

    console.log(`
    1 - Alterar nome da tarefa
    2 - Alterar Descrição da tarefa
    3 - Alterar status da tarefa
    `)

    let menuEdicao = null

    while (true) {

        menuEdicao = Number(prompt(`Escolha o que deseja alterar na tarefa *${tarefaEncontrada.nome}*:` 
            ).trim())
            
        if([1,2,3].includes(menuEdicao)) {
            break;
        } else {
            console.log("Digite uma opção válida");
        }
    }
  

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
        console.log(`
        0 - Tarefa em adamento
        1 - Tarefa concluída
        `)
        const statusAlterado = Number(prompt(`Informe o novo status:`).trim())
        if(statusAlterado === 0 || statusAlterado === 1){

        statusValido = true
        tarefaEncontrada.concluido = Boolean(statusAlterado)

        console.log(`Alteração efetuada com sucesso.`)
        }
        else(console.log("Opção inexistente, revise a ação"))
        break
    }
    break
    
    default:
      console.log("Algo deu errado, volte ao menu e refaça a operação");
 }
 
}
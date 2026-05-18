import * as readline from "readline"
import { carregarItens, salvarItens } from "./services/storage"

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function mostrarMenu(): void{
    console.log("\n ======Inventario RPG ======");
    console.log("1 - Ver inventario");
    console.log("2 - Adicionar ao inventario");
    console.log("3 - Remover item do inventario");
    console.log("4 - Filtrar item por classe");
    console.log("5 - Sair")
    rl.question("\nescolha uma opção:", (resposta) => { navegarMenu(resposta)})
}

function navegarMenu(entrada:string){
    switch(entrada){
        case "1":
            verInventario()
            break;
        case "2":
            adicionarItem()
            break;
        case "3":
            removerItem()
            break;
        case "4":
            filtrarItem()
            break;
        case "5":
            sair()
            break
        default:
            console.log("\n opção invalida")
            mostrarMenu()
    }
}

function verInventario(): void {
  const itens = carregarItens()

  console.log("\n ======= INVENTARIO =======")
  
  if(itens.length === 0){
    console.log("Inventario Vazio!")
  }else{
    itens.forEach((item) => {
       console.log(`
        ID: ${item.id}
        Nome: ${item.nome}
        Classe: ${item.classe}
        Tipo: ${item.tipo}
        Valor: ${item.valor}
        Peso: ${item.peso}
        `) 
    });
  }
  mostrarMenu()
}

function adicionarItem(): void {
  rl.question("\nNome do Item:",(nome) => {
    rl.question("\nClasse do Item:",(classe) => {
        rl.question("\nTipo do Item:",(tipo) => {
            rl.question("\nValor do Item:",(valorTexto) => {
                rl.question("\nPeso do Item:",(pesoTexto) => {
                    const itens = carregarItens()

                    const novoItem = {
                        id: itens.length +1,
                        nome: nome,
                        classe: classe,
                        tipo: tipo,
                        valor: Number(valorTexto),
                        peso: Number(pesoTexto)
                    }

                    itens.push(novoItem)

                    salvarItens(itens)

                    console.log("\nItem Adicionado com sucesso!")

                    mostrarMenu()
                })
            })
        })
    })
  })
}

function removerItem(): void {
  console.log("\n Remover item")

  rl.question("\nDigite o Item que deseja remover: ",(idTexto) =>{

    const id = Number(idTexto)
    const itens = carregarItens()
    const indiceItem = itens.findIndex((item) => item.id === id)

    if(indiceItem === -1){
        console.log("\nItem não encontrado!")
        mostrarMenu()
        return
    }

    const itemRemovido = itens[indiceItem]
    itens.splice(indiceItem,1)
    itens.forEach((item,index) => {
        item.id = index + 1
    });
    salvarItens(itens)
    console.log(`\n Item ${itemRemovido.nome} removido com sucesso!`)

    mostrarMenu()
  })
}

function filtrarItem():void{
    rl.question("\nQual a classe do Item que deseja filtrar: ", (classeDigitada) => {
        const itens = carregarItens()
        const itensFiltrados = itens.filter((item) => 
            item.classe.toLowerCase() === classeDigitada.toLowerCase()
    )
    
    console.log("\n=====Itens Filtrados=====")
    if(itensFiltrados.length === 0){
        console.log("Nenhum item encontrado!")
    }else{
         itensFiltrados.forEach((item) => {

                        console.log(`
                ID: ${item.id}
                Nome: ${item.nome}
                Classe: ${item.classe}
                Tipo: ${item.tipo}
                Valor: ${item.valor}
                Peso: ${item.peso}
                -------------------------`)
    })
}
mostrarMenu()
    })
}

function sair(): void {
  console.log("\n Saindo do sistema...")
  rl.close()
}

mostrarMenu();
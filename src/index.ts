import * as readline from "readline"

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function mostrarMenu(): void{
    console.log("\n ======Inventario RPG ======");
    console.log("1 - Ver inventario");
    console.log("2 - Adcionar ao inventario");
    console.log("3 - Remover item do inventario");
    console.log("4 - Sair")
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
            sair()
            break
        default:
            console.log("\n opção invalida")
            mostrarMenu()
    }
}

function verInventario(): void {
  console.log("\n Inventário vazio")

  mostrarMenu()
}

function adicionarItem(): void {
  console.log("\n Adicionar item")

  mostrarMenu()
}

function removerItem(): void {
  console.log("\n Remover item")

  mostrarMenu()
}

function sair(): void {
  console.log("\n Saindo do sistema...")
  rl.close()
}

mostrarMenu();
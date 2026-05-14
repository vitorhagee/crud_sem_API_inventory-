import * as readline from "readline"

const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function mostrarMenu(): void{
    console.log("\n ======Inventario RPG ======");
    console.log("1 - Ver inventario");
    console.log("2 - Adcionar ao inventario");
    console.log("3 - Remover item do inventario");
    console.log("4 - Sair")
    r1.question("\nescolha uma opção:", (resposta) => { navegarMenu(resposta)})
}

function navegarMenu(entrada:string){
    switch(entrada){
        case "1":
            console.log("inventario")
            break;
        case "2":
            console.log("adicionar item")
            break;
        case "3":
            console.log("remover item")
            break;
        case "4":
            console.log("sair");
            break
        default:
            console.log("\n opção invalida")
            mostrarMenu()
    }
}

mostrarMenu();
import fs from "fs";
import path from "path";

import {Item} from "../types/item";

const caminhoarquivo = path.join(__dirname, "../data/inventory.json");

export function carregarItens(): Item[]{
    const dados = fs.readFileSync(caminhoarquivo, "utf-8")
    return JSON.parse(dados);
}

export function salvarItens(itens: Item[]): void{
    const dadosConvertidos = JSON.stringify(itens,null,2)
    fs.writeFileSync(caminhoarquivo,dadosConvertidos);
}
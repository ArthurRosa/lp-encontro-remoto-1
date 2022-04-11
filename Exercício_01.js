// Se a peça possuir um peso superior a 100g, pode cadastrar.

// Dada a capacidade de cada caixa, caso a lista de peças seja superior a 10, imprima uma mensagem informando não ter capacidade suficiente.

// Caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro.


let nomePeca = "HD";
let pesoPeca = 200;

let listaPecas = ["Processador", "Memória", "Cooler", "Placa-Mãe"];

if(listaPecas.length > 10 ){ //Não possuí espaço na caixa.
    console.log("Não é possível cadastrar. Limite atingido.");

} else{ //Possuí espaço na caixa.
    if(pesoPeca >= 100){
        console.log("A peça atende aos requisitos, portanto pode ser cadastrada.");
        if(nomePeca.length < 3){
            console.log("Atenção, a peça deve ter um nome com 3 ou mais caracteres.")
        }
    }
}

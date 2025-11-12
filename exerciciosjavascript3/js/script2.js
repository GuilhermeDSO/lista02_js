// Estrutura de Decisão Encadeada em JavaScript

let idade = prompt("Digite a sua idade expressa em anos")

if(idade <16){
    alert("Não pode entrar na balada")
}else{
    if (idade <18){
        alert("Voto opcional")
    } else {
        alert("Voto Obrigatório")
    }
}
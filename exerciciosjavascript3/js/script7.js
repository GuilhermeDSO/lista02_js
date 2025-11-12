// 2) Faça um programa que leia o nome e a idade de duas pessoas e exiba uma mensagem indicando quem é a pessoa mais velha.


let nome01 = prompt("Digite seu nome completo :")
let idade01 = prompt("Digite sua idade expressa em anos :")

let nome02 = prompt("Digite seu nome completo :")
let idade02 = prompt("Digite sua idade expressa em anos :")

if (idade01 > idade02) {
    alert("A primeira idade é maior que a segunda idade digitada :")
    alert("O nome da pessoa mais velha é : " +nome01)
    alert("Essa pessoa possui " +idade01 +"anos")
}else{
    alert("A primeira idade é maior que a segunda idade digitada ")
    alert("O nome da pessoa mais velha é : " +nome02)
    alert("Essa pessoa possui " +idade02 + " anos")
}
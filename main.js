console.log("Digite o nome do seu jogador")

//Início de jogo
let nickname = "Shadow"

console.log("Bem vindo " + nickname)

//Informações de personagens
let nomespersonagem = ["Sir Cedric" , "Elara", "Grom"]
let xp = [
  ["Grom", 4.500],
  ["Elara", 8.005]
  ["Sir Cedric", 5.100]
]

function classificarXP(xp) {
    if (xp < 1.000) {
        return "Ferro";
    } else if (xp >= 1.001 && xp <= 2.000) {
        return "Bronze";
    } else if (xp >= 2.001 && xp <= 5.000) {
        return "Prata";
    } else if (xp >= 5.001 && xp <= 7.000) {
        return "Ouro";
    } else if (xp >= 7.001 && xp <= 8.000) {
        return "Platina";
    } else if (xp >= 8.001 && xp <= 9.000) {
        return "Ascendente";
    } else if (xp >= 9.001 && xp <= 10.000) {
        return "Imortal";
    } else {
        return "Radiante";
    }
}

// Exemplo de uso:
xp = 5.100; // Substitua pelo valor desejado
const nivel = classificarXP(xp);
console.log(" O nível correspondente a " + xp[1][0] + " é de " + xp[1][2])
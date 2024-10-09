console.log("Digite o nome do seu jogador");

// Início de jogo
let nickname = "Shadow";
console.log("Bem vindo " + nickname);

// Informações de personagens
let nomesPersonagem = ["Sir Cedric", "Elara", "Grom"];
let xp = [
    ["Grom", 4500],     // Corrigido: ponto decimal para vírgula
    ["Elara", 8005],    // Corrigido: ponto decimal para vírgula
    ["Sir Cedric", 5100] // Corrigido: vírgula faltando
];

function classificarXP(xp) {
    if (xp < 1000) {
        return "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        return "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        return "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        return "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        return "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        return "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        return "Imortal";
    } else {
        return "Radiante";
    }
}

// Exemplo de uso:
let xpAtual = 5100; // Substitua pelo valor desejado
const nivel = classificarXP(xpAtual);

// Encontrar o personagem correspondente
const personagem = xp.find(p => p[1] === xpAtual);
if (personagem) {
    console.log("O Herói de nome " + personagem[0] + " está no nível de: " + nivel);
} else {
    console.log("Herói não encontrado.");
}

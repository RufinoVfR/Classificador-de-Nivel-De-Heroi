//let nome = prompt("Escreva o nome do seu heroi: ");
//let xp = prompt("Escreva a quantidade de XP do seu heroi: ");

let nome = "Rafael o Magro";
let xp = 1000000000000000;

if (xp < 1000) {
    console.log("O heroi de nome " + nome + " esta no nivel de  ferro");
} else if (xp > 1001 && xp < 2000) {
    console.log("O heroi de nome " + nome + " esta no nivel de  bronze");
} else if (xp > 2001 && xp < 5000) {
    console.log("O heroi de nome " + nome + " esta no nivel de  prata");
} else if (xp > 5001 && xp < 7000) {
    console.log("O heroi de nome " + nome + " esta no nivel de  ouro");
} else if (xp > 7001 && xp < 8000) {
    console.log("O heroi de nome " + nome + " esta no nivel de  platina");
} else if (xp > 8001 && xp < 9000) {
    console.log("O heroi de nome " + nome + " esta no nivel de  ascendente");
} else if (xp > 9001 && xp < 10000) {
    console.log("O heroi de nome " + nome + " esta no nivel de  imortal");
} else {
    console.log("VO heroi de nome " + nome + " esta no nivel de  radiante");
}
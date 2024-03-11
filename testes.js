/*
1) Observe o trecho de código abaixo:
int INDICE = 13, SOMA = 0, K = 0;
enquanto K < INDICE faça
{
K = K + 1;
SOMA = SOMA + K;
}
imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?

RESPOSTA: 91

CÓDIGO:

*/


let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K = K +1;
    SOMA = SOMA + K;
}

console.log(`A soma é ` + SOMA);

/**
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
 */

function Fibonacci(numero){
    let num1 = 0;
    let num2 = 1;

    while (num2 < numero) {
        let x = num2;
        num2 = num1 + num2;
        num1 = x;
    }
    return num2 === numero;
}
    let numero = 21;

    if(Fibonacci(numero)) {
        console.log(`O número ${numero} pertence à sequência de Fibonacci`);
    } else {
        console.log(`O número ${numero} não pertence à sequência de Fibonacci`);
    }

/*
3) Descubra a lógica e complete o próximo elemento:

a) 1, 3, 5, 7, ___

b) 2, 4, 8, 16, 32, 64, ____

c) 0, 1, 4, 9, 16, 25, 36, ____

d) 4, 16, 36, 64, ____

e) 1, 1, 2, 3, 5, 8, ____

f) 2,10, 12, 16, 17, 18, 19, ____

RESPOSTA:
a) + 2 = 9
b) * 2 = 128
c) Quadrado perfeito. 64
d) Quadrado dos números pares. 10 * 10 = 100
e) Fibonacci. 5 + 8 = 13
f) Número que começam com a letra D. 200
 */

/*
4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

RESPOSTA:
Ligaria o primeiro interruptor e esperaria até a lâmpada esquentar. 
Desligaria o primeiro interruptor e ligaria o segundo.
Saíria até uma das salas. Se a lâmpada estiver apagada, mas quente, corresponde ao primeiro interruptor. Se estiver acessa, corresponde ao segundo. E se estiver apagada e fria, ao terceiro. E assim descobriria o interruptor que controla a primeira sala. 
Voltaria à sala dos interruptores e ligaria o primeiro interruptor que sobrou. 
Iria até a outra sala. Se a lâmpada estiver acessa, corresponde ao interruptor que deixei ligado, se estiver apagada, ao outro interruptor. 
E dessa forma, o interruptor que sobrou corresponde à sala em que estou.
 */

/*
5) Escreva um programa que inverta os caracteres de um string.


IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;
 */

function reverter(string) {
    let revertida = '';
    for (let i = string.length - 1; i >= 0; i --){
        revertida += string[i];
    }
    return revertida;
    
}
let string = "Gabriela";
console.log(reverter(string));

"use strict";
class Calculadora {
    somar(x, y) {
        return x + y;
    }
    subtrair(x, y) {
        return x - y;
    }
    multiplicar(x, y) {
        return x * y;
    }
    dividir(x, y) {
        if (y == 0) {
            return "Não é possivel dividir por zero.";
        }
        return String(x / y);
    }
}
const calculadora = new Calculadora();
console.log(calculadora.somar(5, 7)); //12
console.log(calculadora.subtrair(18, 7)); //11
console.log(calculadora.multiplicar(5, 5)); //25
console.log(calculadora.dividir(12, 2)); //6
console.log(calculadora.dividir(3, 0)); //Deve mostrar mensagem de erro

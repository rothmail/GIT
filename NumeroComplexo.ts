const rl = require('readline-sync')

export class NumeroComplexo {
     real: number;
     imaginario: number;

    constructor(real: number, imaginario: number) {
        this.real = real;
        this.imaginario = imaginario
    }

    getRealeImaginario() {
        console.log(`Valores: x = ${this.real} e y = ${this.imaginario + 'i'}`)
    }

    setReal() {
        let escolha = rl.questionInt(`Valor desejado no real: `)
        this.real = escolha
    }

    setImaginario() {
        let escolha = rl.questionInt(`Valor desejado no imaginario: `)
        this.imaginario = escolha
    }


    somar(outroComplexo: NumeroComplexo): string {
        let novoReal = this.real + outroComplexo.real
        let novoImaginario = this.imaginario + outroComplexo.imaginario
        let novoComplexo = new NumeroComplexo(novoReal, novoImaginario)
        let stringNovo = novoComplexo.toString()
        return stringNovo
    }

    subtrair(outroComplexo: NumeroComplexo): string {
        let novoReal = this.real - outroComplexo.real
        let novoImaginario = this.imaginario - outroComplexo.imaginario
        let novoComplexo = new NumeroComplexo(novoReal, novoImaginario)
        let stringNovo = novoComplexo.toString()
        return stringNovo
    }

    multiplicar(outroComplexo: NumeroComplexo): string {
        let novoReal = (this.real * outroComplexo.real)
        let novoImaginario = (this.real * outroComplexo.imaginario)
        let novoComplexo = new NumeroComplexo(novoReal, novoImaginario)
        let stringNovo = novoComplexo.toString()
        return stringNovo
    }

    dividir(outroComplexo: NumeroComplexo): string {
        let novoReal = (this.real / outroComplexo.real)
        let novoImaginario = (this.real / outroComplexo.imaginario)
        let novoComplexo = new NumeroComplexo(novoReal, novoImaginario)
        let stringNovo = novoComplexo.toString()
        return stringNovo
    }

    equals(outroComplexo: NumeroComplexo): boolean {
        if (Math.sqrt((outroComplexo.real - this.real) * 2 + (outroComplexo.imaginario - this.imaginario) * 2)) {
            console.log(`Números iguais`)
            return true
        } else {
            console.log(`Números dferentes`)
            return false
        }
    }

    toString(): string {
        return (`Real: ${this.real}, Imaginario: ${this.imaginario}i`)
    }

    modulo(outroNumero): string {
        let resultado = Math.sqrt(this.real * outroNumero.real + this.imaginario * outroNumero.imaginario )
        let resultado2 = resultado + 'i'
        return resultado2;
    }
}


let num1 = new NumeroComplexo(10, 12)
let num2 = new NumeroComplexo(12, 13)

num1.dividir(num2)
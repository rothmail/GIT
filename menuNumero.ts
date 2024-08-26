import { NumeroComplexo } from "./numero"

var rl = require('readline-sync')
let escolha1 = rl.questionInt(`Número desejado (real): `)
let escolha2 = rl.questionInt(`Número desejado (imaginário): `)
let numeroVazio = new NumeroComplexo(escolha1, escolha2)
let escolha3 = rl.questionInt(`Número desejado (outro real): `)
let escolha4 = rl.questionInt(`Número desejado (outro imaginário): `)
let numeroVazio2 = new NumeroComplexo(escolha3, escolha4)
let menu: boolean = true

while (menu) {
    console.log(
        `
        0 - Finalizar
        1 - Get
        2 - Set real
        3 - Set imaginario
        4 - Somar 
        5- Subtrair
        6- Multiplicar
        7- Dividir
        8- Equals
        9- ToString
        10- Módulo
     `
    );
    let option = rl.questionInt('Escolha:')

    switch (option) {
        case 1:
            numeroVazio.getRealeImaginario()
            break
        case 2:
            numeroVazio.setReal()
            break
        case 3:
            numeroVazio.setImaginario()
            break
        case 4:
            console.log(numeroVazio.somar(numeroVazio2))
            break
        case 5:
            console.log(numeroVazio.subtrair(numeroVazio2))
            break
        case 6:
            console.log(numeroVazio.multiplicar(numeroVazio2))
            break
        case 7:
            console.log(numeroVazio.dividir(numeroVazio2))
            break
        case 8:
            console.log(numeroVazio.equals(numeroVazio2))
            break
        case 9:
            console.log(numeroVazio.toString())
            break
        case 10:
            console.log(numeroVazio.modulo(numeroVazio2))
            break
        case 0:
            process.exit(0)
        default:
            console.log('Opção inválida');
            break
    }
}
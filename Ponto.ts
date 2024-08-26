const rl = require('readline-sync')
export class Ponto2D {
     x: number;
     y: number;

    constructor() {
        this.x = 0;
        this.y = 0;
    }

    getXeY() {
        console.log(`Valores: ${this.x}, ${this.y}`)
    }

    setX() {
        let escolhaX = rl.questionInt('Valor de X:');
        let escolhaY = rl.questionInt('Valor de Y:');
        this.x = escolhaX;
        this.y = escolhaY;
    }
    setY() {
        let escolhaX = rl.questionInt('Valor de X:');
        let escolhaY = rl.questionInt('Valor de Y:');
        this.x = escolhaX;
        this.y = escolhaY;
    }

    movimentacaoPonto() {
        let escolhaX = rl.questionInt('Valor de X:');
        let escolhaY = rl.questionInt('Valor de Y:');
        this.x = escolhaX;
        this.y = escolhaY;
    }

    equals(outroPonto: Ponto2D): boolean {
        if (Math.sqrt((outroPonto.x - this.x) ** 2 + (outroPonto.y - this.y) ** 2)) {
            console.log('Pontos iguais')
            return true
        } else {
            console.log('Pontos diferentes')
            return false
        }
    }

    toString(): string {
        return (`${this.x},${this.y}`)
    }

    distancia(outroPonto: Ponto2D): number {
        return Math.sqrt((outroPonto.x - this.x) ** 2 + (outroPonto.y - this.y) ** 2)
    }

    clone(): Ponto2D {
        let clone2D = new Ponto2D()
        clone2D.x = this.x
        clone2D.y = this.y
        return clone2D
    }

}

export class Ponto2DComCoordenadas extends Ponto2D {
    constructor(x: number, y: number) {
        super()
        this.x = x;
        this.y = y;
    }
}

export class Ponto2DTerceiraClasse extends Ponto2D {
    outroPonto: Ponto2D
    constructor(outroPonto: Ponto2D) {
        super()
        this.x = outroPonto.x
        this.y = outroPonto.y
    }
}

export class Ponto2DCoordenadas extends Ponto2D {
    constructor(x: number, y: number) {
        super()
        this.x = x
        this.y = y
    }
}
export class Ponto2D3Classe extends Ponto2D {
    outroPonto: Ponto2D
    constructor(outroPonto: Ponto2D) {
        super()
        this.x = outroPonto.x
        this.y = outroPonto.y
    }
}
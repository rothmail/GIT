class Contador {
    private contador: Number

    constructor() {
        this.contador = this.contador
    }

    zerar(): void {
        this.contador = 0
    }

    incrementar(): void {
        this.contador = + 1
    }

    valor(): any {
        console.log(this.contador)
    }
}
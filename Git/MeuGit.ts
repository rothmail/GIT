let rl = require('readline-sync');

class Blobs {
    codigo: string

    constructor(codigo: string) {
        this.codigo = codigo;
    }

    inserirCodigo(): void{
        let codigo = rl.question('Código desejado:');
        this.codigo = codigo;
    }

    getCodigo(): void{
        console.log(`Código: ${this.codigo}`)
    }
}

class Commit {
    commits: Array<Blobs> = []

    inserirCommits(codigo: Blobs): void{
        let inserir = rl.question('Deseja inserir o código? (S/N)').toUpperCase()
        if (inserir == 'S') {
            console.log('Código inserido.')
            this.commits.push(codigo)
        } else if (inserir == 'N') {
            console.log('Código não inserido.')
        } else {
            console.log('Opção inválida.')
        }
    }

    getCommits(): void{
        let escolha = rl.questionInt('Commit para ser visualizado: (1)')
        console.log(`Commits: ${this.commits.length - escolha}`)
    }
}

class Branch {
    branch: Array<Commit> = []

    inserirBranch(codigo: Commit): void{
        let inserir = rl.question('Deseja inserir o codigo na branch (S/N)').toUpperCase()
        if (inserir == 'S') {
            console.log('Código inserido.')
            this.branch.push(codigo)
        } else if (inserir == 'N') {
            console.log('Código não inserido.')
        } else {
            console.log('Opção inválida.')
        }
    }
    
    getBranch(): void{
        let escolha = rl.questionInt('Commit para ser visualizado: (1)')
        console.log(`Commits: ${this.branch.length - escolha}`)
    }

    getHead(): void{
        console.log(`Último backup: ${this.branch.length - 1}`)
    }
}

class Repositorio {
    public branch:Branch[] = []
    public setRepositorio(branch: Branch): void{
        this.branch.push(branch)
    }
}
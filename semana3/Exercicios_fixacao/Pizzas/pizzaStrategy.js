// Singleton para o forno
class Forno {
    constructor() {
        if (Forno.instance) {
            return Forno.instance;
        }
        this.status = 'desligado';
        Forno.instance = this;
    }

    ligar() {
        this.status = 'ligado';
        console.log('Forno ligado.');
    }

    desligar() {
        this.status = 'desligado';
        console.log('Forno desligado.');
    }

    getStatus() {
        return this.status;
    }
}

// Exemplo de uso do padrão Singleton
const forno1 = new Forno();
forno1.ligar();

const forno2 = new Forno();
console.log(`Status do forno2: ${forno2.getStatus()}`); // Deve imprimir 'ligado', pois forno1 e forno2 são a mesma instância

forno2.desligar();
console.log(`Status do forno1: ${forno1.getStatus()}`); // Deve imprimir 'desligado'

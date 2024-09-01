//Crie uma PizzaFactory que tenha um método criarPizza. A fábrica deve ser capaz de criar diferentes tipos de pizzas (PizzaMargherita, PizzaPepperoni, PizzaQuatroQueijos). Cada classe de pizza deve ter um método preparar que imprime uma mensagem específica. Em seguida, crie uma instância da fábrica e utilize-a para preparar pizzas diferentes.

// Classe base Pizza
class Pizza {
    constructor(ingredientes, tipo, tamanho) {
        
        this.ingredientes = ingredientes;
        this.tipo = tipo;
        this.tamanho = tamanho;
    }

    preparar() {
        return `Preparando uma pizza  do tipo ${this.tipo}, tamanho ${this.tamanho}, com os seguintes ingredientes: ${this.ingredientes.join(', ')}.`;
    }
}

// Classes específicas de Pizza
class PizzaMargherita {
    constructor(tamanho) {
        return new Pizza( ['molho de tomate', 'mussarela', 'manjericão'], 'Margherita', tamanho);
    }
}

class PizzaPepperoni {
    constructor(tamanho) {
        return new Pizza(['molho de tomate', 'mussarela', 'pepperoni'], 'Pepperoni', tamanho);
    }
}

class PizzaQuatroQueijos {
    constructor(tamanho) {
        return new Pizza( ['molho de tomate', 'mussarela', 'gorgonzola', 'parmesão', 'provolone'], 'Quatro Queijos', tamanho);
    }
}

class Calabresa {
    constructor(tamanho) {
        return new Pizza( ['molho de tomate', 'mussarela', 'calabresa', 'cebola'], 'Calabresa', tamanho);
    }
}

// Fábrica de Pizzas
class PizzaFactory {
    static criarPizza(tipo, tamanho) {
        switch (tipo) {
            case 'Margherita':
                return new PizzaMargherita(tamanho);
            case 'Pepperoni':
                return new PizzaPepperoni(tamanho);
            case 'Quatro Queijos':
                return new PizzaQuatroQueijos(tamanho);
            case 'Calabresa':
                    return new Calabresa(tamanho);    
            default:
                throw new Error('Tipo de pizza inválido');
        }
    }
}

// Testando a fábrica de pizzas com tamanhos diferentes
//const pizza1 = PizzaFactory.criarPizza('Margherita', 'Média');
//console.log(pizza1.preparar());

//const pizza2 = PizzaFactory.criarPizza('Pepperoni', 'Grande');
//console.log(pizza2.preparar());

//const pizza3 = PizzaFactory.criarPizza('Quatro Queijos', 'Pequena');
//console.log(pizza3.preparar());

const pizza5 = PizzaFactory.criarPizza('Calabresa', 'Familia')
console.log(pizza5.preparar());

// Tentando criar uma pizza de tipo não definido
try {
    const pizza4 = PizzaFactory.criarPizza('Havaiana', 'Grande');
   console.log(pizza4.preparar());
} catch (error) {
    console.log(error.message);
}

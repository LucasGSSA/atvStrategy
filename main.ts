interface operacaoStrategy {
    execute(num1: number, num2: number): number;
}

class AdditionStrategy implements operacaoStrategy {
    execute(num1: number, num2: number): number {
        return num1 + num2;
    }
}

class subtracao implements operacaoStrategy {
    execute(num1: number, num2: number): number {
        return num1 - num2;
    }
}

class multiplicacao implements operacaoStrategy {
    execute(num1: number, num2: number): number {
        return num1 * num2;
    }
}

class CalculatorContext {
    private strategy: operacaoStrategy | undefined;

    setStrategy(strategy: operacaoStrategy): void {
        this.strategy = strategy;
    }

    calculate(num1: number, num2: number): number | undefined {
        if (this.strategy) {
            return this.strategy.execute(num1, num2);
        } else {
            console.log("A Strategy não foi definida.");
            return undefined;
        }
    }
}

const calculatorContext = new CalculatorContext();

const num1 = parseInt(prompt("Digite o primeiro valor:") || "0");
const num2 = parseInt(prompt("Digite o segundo valor:") || "0");
const operation = prompt("Digite a operação matemática (+, -, *):");

switch (operation) {
    case "+":
        calculatorContext.setStrategy(new AdditionStrategy());
        break;
    case "-":
        calculatorContext.setStrategy(new subtracao());
        break;
    case "*":
        calculatorContext.setStrategy(new multiplicacao());
        break;
    default:
        console.log("Operação inválida.");
}

const result = calculatorContext.calculate(num1, num2);
if (result !== undefined) {
    console.log(`Resultado da operação: ${result}`);
}

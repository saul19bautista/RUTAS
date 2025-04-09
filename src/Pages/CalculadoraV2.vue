<script>
export default {
    data() {
        return {
            display: '',  // Para mostrar lo que el usuario escribe
            currentValue: 0,  // Valor para operaciones
            operator: '',  // Para almacenar el operador
            previousValue: 0,  // Para almacenar el valor anterior antes de la operación
        };
    },
    methods: {
        agregarNumero(number) {
            // Agrega el número o el punto al display
            if (number === '.' && this.display.includes('.')) return; // No permite múltiples puntos
            this.display += number;
        },
        operacion(operator) {
            // Realiza la operación matemática
            if (operator === '=' && this.operator !== '') {
                this.calcular();
            } else if (operator === 'C') {
                this.limpiarDisplay();
            } else if (operator === 'CE') {
                this.clearEntry();
            } else {
                this.previousValue = parseFloat(this.display);
                this.operator = operator;
                this.display = '';
            }
        },
        calcular() {
            // Realiza la operación basada en el operador actual
            let result;
            const current = parseFloat(this.display);
            switch (this.operator) {
                case '+':
                    result = this.previousValue + current;
                    break;
                case '-':
                    result = this.previousValue - current;
                    break;
                case 'x':
                    result = this.previousValue * current;
                    break;
                case '/':
                    if (current === 0) {
                        result = 'Error';
                    } else {
                        result = this.previousValue / current;
                    }
                    break;
                default:
                    result = current;
                    break;
            }
            this.display = result.toString();
            this.operator = '';
            this.previousValue = 0;
        },
        limpiarDisplay() {
            this.display = '';  // Limpia todo el display
            this.operator = '';
            this.previousValue = 0;
        },
        clearEntry() {
            this.display = '';  // Limpia la entrada actual
        },
    },
};
</script>

<template>
    <div class="container d-flex justify-content-center mt-4" style="height: 100vh; background-color: #f7f7f7;">
        <div class="card p-3" style="width: 300px; background-color: #0D6EFD; border-radius: 10px;">
            <div class="card-body">
                <h6 class="text-center text-light">Calculadora V2</h6>
                <div class="mb-3">
                    <input type="text" class="form-control" v-model="display" disabled style="font-size: 1.5rem; text-align: right; color: #333;">
                </div>
                <div class="d-flex justify-content-between gap-2 mb-3">
                    <button class="btn btn-dark" @click="agregarNumero('%')">%</button>
                    <button class="btn btn-dark" @click="operacion('CE')">CE</button>
                    <button class="btn btn-dark" @click="operacion('C')">C</button>
                    <button class="btn btn-danger" @click="operacion('/')">/</button>
                </div>
                <div class="d-flex justify-content-between gap-2 mb-3">
                    <button class="btn btn-dark" @click="agregarNumero('9')">9</button>
                    <button class="btn btn-dark" @click="agregarNumero('8')">8</button>
                    <button class="btn btn-dark" @click="agregarNumero('7')">7</button>
                    <button class="btn btn-danger" @click="operacion('x')">x</button>
                </div>
                <div class="d-flex justify-content-between gap-2 mb-3">
                    <button class="btn btn-dark" @click="agregarNumero('4')">4</button>
                    <button class="btn btn-dark" @click="agregarNumero('5')">5</button>
                    <button class="btn btn-dark" @click="agregarNumero('6')">6</button>
                    <button class="btn btn-danger" @click="operacion('-')">-</button>
                </div>
                <div class="d-flex justify-content-between gap-2 mb-3">
                    <button class="btn btn-dark" @click="agregarNumero('1')">1</button>
                    <button class="btn btn-dark" @click="agregarNumero('2')">2</button>
                    <button class="btn btn-dark" @click="agregarNumero('3')">3</button>
                    <button class="btn btn-danger" @click="operacion('+')">+</button>
                </div>
                <div class="d-flex justify-content-between gap-2 mb-3">
                    <button class="btn btn-dark" @click="operacion('=')">=</button>
                    <button class="btn btn-dark" @click="agregarNumero('0')">0</button>
                    <button class="btn btn-dark" @click="agregarNumero('.')">.</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .btn-dark {
        background-color: #343a40;
        color: white;
        font-size: 1.2rem;
    }

    .btn-dark:hover {
        background-color: #23272b;
    }

    .btn-danger {
        background-color: #dc3545;
        color: white;
        font-size: 1.2rem;
    }

    .btn-danger:hover {
        background-color: #c82333;
    }
</style>


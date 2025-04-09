<script>
export default {
    data() {
        return {
            numero1: 0,
            numero2: 0,
            resultado: 0,
        }
    },
    methods: {
        sumar() {
            this.resultado = this.numero1 + this.numero2;
        },
        resta() {
            this.resultado = this.numero1 - this.numero2;
        },
        multiplicar() {
            this.resultado = this.numero1 * this.numero2;
        },
        dividir() {
            if (this.numero2 !== 0) {
                this.resultado = this.numero1 / this.numero2;
            } else {
                this.resultado = 'Error: División por 0';
            }
        },
        porcentaje() {
            this.resultado = (this.numero1 * this.numero2) / 100;
        }
    },
}
</script>

<template>
    <div class="container mt-5">
        <div class="card shadow p-4">
            <h1 class="text-center">Calculadora V1</h1>
            <div class="mb-3">
                <label for="">Número 1</label>
                <input type="number" class="form-control" v-model="numero1">
            </div>
            <div class="mb-3">
                <label for="">Número 2</label>
                <input type="number" class="form-control" v-model="numero2">
            </div>
            <div class="d-flex justify-content-center gap-2">
                <button @click="sumar" class="btn btn-danger">Suma</button>
                <button @click="resta" class="btn btn-danger">Resta</button>
                <button @click="multiplicar" class="btn btn-danger">Multiplicación</button>
                <button @click="dividir" class="btn btn-danger">División</button>
                <button @click="porcentaje" class="btn btn-danger">Porcentaje</button>
            </div>
            <h2 class="text-center mt-4">Resultado: {{ resultado }}</h2>
        </div>
    </div>
</template>

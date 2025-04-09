<script>
export default {
  data() {
    return {
      alumnos: [
        { id: 1, nombre: 'Saul López Bautista', gusto: 'Me gusta escuchar música' },
        { id: 2, nombre: 'Pedro Pérez', gusto: 'Me gusta escuchar música clásica' },
        { id: 3, nombre: 'Juan Pérez', gusto: 'Me gusta escuchar música instrumental' },
        { id: 4, nombre: 'María Martínez', gusto: 'Me gusta escuchar música rock' },
        { id: 5, nombre: 'José Pérez', gusto: 'Me gusta escuchar música blues' },
        { id: 6, nombre: 'Luis López', gusto: 'Me gusta escuchar música clásica' },
        { id: 7, nombre: 'Ana Pérez', gusto: 'Me gusta escuchar música' }
      ]
    };
  }
};
</script>

<template>
  <div class="mt-4"> <!-- Eliminado el contenedor 'container' -->
    <h3 class="text-center"></h3>
    <ul class="list-group">
      <li v-for="alumno in alumnos" :key="alumno.id" class="list-group-item">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">
              <strong>{{ alumno.id }} | {{ alumno.nombre }}</strong>
            </h5>
            <p class="card-text">{{ alumno.gusto }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h3 {
  color: white;
  background-color: black;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
  border-radius: 10px;
}

.card {
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 18px;
  font-weight: bold;
}

.card-text {
  color: #555;
}
</style>

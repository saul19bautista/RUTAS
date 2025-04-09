<template>
  <div class="mt-4"> <!-- Eliminado el contenedor 'container' -->
    <h2 class="titulo">📅 Horario de Clases de Sistemas</h2>
    
    <div class="tabla-container">
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th>Horario</th>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miércoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(h, index) in horario" :key="index" class="fade-in">
            <td>{{ index + 1 }}</td>
            <td class="horario">{{ h.hora }}</td>
            <td>{{ h.lunes || '-' }}</td>
            <td>{{ h.martes || '-' }}</td>
            <td>{{ h.miercoles || '-' }}</td>
            <td>{{ h.jueves || '-' }}</td>
            <td>{{ h.viernes || '-' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const horario = ref([
  { hora: '7:00-9:00', lunes: 'Programación Lógica y Funcional', martes: 'Inteligencia Artificial', miercoles: 'Desarrollo Ágil', jueves: 'Programación Lógica y Funcional', viernes: '' },
  { hora: '9:00-11:00', lunes: 'Desarrollo Ágil', martes: 'Administración de Redes', miercoles: '', jueves: 'Administración de Redes', viernes: '' },
  { hora: '10:00-11:00', lunes: '', martes: '', miercoles: '', jueves: '', viernes: 'Desarrollo Ágil' },
  { hora: '11:00-1:00', lunes: '', martes: 'Desarrollo en la Nube', miercoles: 'Desarrollo en la Nube', jueves: 'Inteligencia Artificial', viernes: '' },
  { hora: '11:00-12:00', lunes: '', martes: '', miercoles: '', jueves: '', viernes: 'Desarrollo en la Nube' },
  { hora: '1:00-2:00', lunes: '', martes: '', miercoles: '', jueves: 'Desarrollo con Realidad Aumentada', viernes: '' },
  { hora: '1:00-3:00', lunes: '', martes: '', miercoles: 'Desarrollo con Realidad Aumentada', jueves: '', viernes: '' },
  { hora: '2:00-4:00', lunes: '', martes: '', miercoles: '', jueves: '', viernes: 'Taller de Investigación II' },
  { hora: '3:00-5:00', lunes: '', martes: 'Desarrollo con Realidad Aumentada', miercoles: 'Taller de Investigación II', jueves: '', viernes: '' },
]);
</script>

<style>
/* Variables de colores para modo claro y oscuro */
:root {
  --bg-color: transparent; /* Cambié el color de fondo a transparente */
  --text-color: #2c3e50;
  --header-bg: #16a085;
  --header-text: white;
  --border-color: #ddd;
  --hover-color: rgba(26, 188, 156, 0.15);
}

/* Modo oscuro */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #1e272e;
    --text-color: #ecf0f1;
    --header-bg: #2ecc71;
    --border-color: #34495e;
    --hover-color: rgba(46, 204, 113, 0.2);
  }
}

/* Contenedor general */
.mt-4 {
  max-width: 950px;
  margin: auto;
  padding: 20px;
  background: var(--bg-color);
  border-radius: 12px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease-in-out;
}

/* Estilo del título */
.titulo {
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  color: var(--text-color);
  padding: 15px;
  border-bottom: 4px solid var(--header-bg);
  margin-bottom: 20px;
  text-transform: uppercase;
}

/* Contenedor de la tabla */
.tabla-container {
  overflow-x: auto;
}

/* Estilos de la tabla */
.table {
  width: 100%;
  border-collapse: collapse;
  background: var(--bg-color);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
}

/* Encabezado */
.table th {
  background: var(--header-bg);
  color: var(--header-text);
  font-size: 16px;
  padding: 14px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
}

/* Celdas */
.table td {
  text-align: center;
  padding: 12px;
  font-size: 14px;
  color: var(--text-color);
  border-bottom: 1px solid var(--border-color);
}

/* ✨ Efecto hover */
.table tbody tr:hover {
  background: var(--hover-color);
  transition: background 0.3s ease-in-out;
}

/* 🔥 Efecto de iluminación */
.table tbody tr:hover td {
  transform: scale(1.02);
  transition: transform 0.2s ease-in-out;
}

/* 🎭 Animación de entrada */
.fade-in {
  animation: fadeIn 0.8s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Horario con diseño destacado */
.horario {
  font-weight: bold;
  background: #ecf0f1;
  border-left: 4px solid var(--header-bg);
}

/* 📱 Responsive Design */
@media (max-width: 768px) {
  .table {
    font-size: 12px;
  }

  .titulo {
    font-size: 22px;
  }
}
</style>

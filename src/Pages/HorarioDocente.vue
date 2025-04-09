<template>
    <div class="container">
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
    { hora: '7:00-9:00', lunes: 'IA', martes: 'Agil', miercoles: 'web', jueves: 'IA', viernes: 'Movil' },
    { hora: '7:00-9:00', lunes: 'IA', martes: 'Agil', miercoles: 'web', jueves: 'IA', viernes: 'Movil' },
    { hora: '7:00-9:00', lunes: 'IA', martes: 'Agil', miercoles: 'web', jueves: 'IA', viernes: 'Movil' },
    { hora: '7:00-9:00', lunes: 'IA', martes: 'Agil', miercoles: 'web', jueves: 'IA', viernes: 'Movil' },
  ]);
  </script>
  
  <style>
  /* Variables de colores */
  :root {
    --bg-color: #f0f4f8;
    --text-color: #2c3e50;
    --header-bg: #ff6347; /* Color rojo anaranjado */
    --header-text: white;
    --border-color: #bbb;
    --hover-color: rgba(255, 99, 71, 0.1);
    --highlight-color: #ffd700; /* Color dorado para resaltar */
  }
  
  /* Modo oscuro */
  @media (prefers-color-scheme: dark) {
    :root {
      --bg-color: #34495e;
      --text-color: #ecf0f1;
      --header-bg: #e74c3c;
      --border-color: #7f8c8d;
      --hover-color: rgba(231, 76, 60, 0.3);
      --highlight-color: #f1c40f;
    }
    .table td.horario,
.table td:not(:first-child):not(.horario),
.table th:nth-child(2),
.table td:nth-child(n+3) {
  color: #000;
}
  }
  
  /* Contenedor general */
  .container {
    max-width: 1100px;
    margin: 50px auto;
    padding: 25px;
    background-color: var(--bg-color);
    border-radius: 20px;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease-in-out;
  }
  
  /* Título */
  .titulo {
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    color: var(--text-color);
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 5px solid var(--header-bg);
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
  }
  
  /* Contenedor de la tabla */
  .tabla-container {
    overflow-x: auto;
    border-radius: 12px;
  }
  
  /* Tabla */
  .table {
    width: 100%;
    border-collapse: collapse;
    background-color: var(--bg-color);
    border-radius: 12px;
    overflow: hidden;
    border: 2px solid var(--border-color);
  }
  
  /* Estilo de las celdas */
  .table th, .table td {
    text-align: center;
    padding: 14px;
    font-size: 16px;
    color: var(--text-color);
    border-bottom: 1px solid var(--border-color);
  }
  
  /* Encabezado */
  .table th {
    background-color: var(--header-bg);
    color: var(--header-text);
    font-weight: bold;
    text-transform: uppercase;
  }
  
  /* Efecto hover en las filas */
  .table tbody tr:hover {
    background-color: var(--hover-color);
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }
  
  /* Animación de entrada de filas */
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
  
  /* Estilo de la celda de "horario" */
  .horario {
    font-weight: bold;
    background-color: var(--highlight-color);
    color: #fff;
    border-left: 5px solid var(--header-bg);
  }
  
  /* Responsividad */
  @media (max-width: 768px) {
    .table {
      font-size: 14px;
    }
  
    .titulo {
      font-size: 28px;
    }
  }
  </style>
  
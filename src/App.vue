<template>
  <div id="app">
    <div class="container-fluid">
      <!-- Barra de navegación responsiva -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/" style="font-size: 1.2rem; font-weight: bold; color: #007bff;">Navbar</router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <router-link class="nav-link" to="/" style="font-size: 1rem; color: #007bff;">🏠 Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about" style="font-size: 1rem; color: #007bff;">📚 About</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/calculadora" style="font-size: 1rem; color: #007bff;">🧮 CalculadoraV1</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/calculadora2" style="font-size: 1rem; color: #007bff;">🧮 CalculadoraV2</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/eventos" style="font-size: 1rem; color: #007bff;">🎉 Eventos</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/horariodo" style="font-size: 1rem; color: #007bff;">📅 Horario Docente</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/mihorariodo" style="font-size: 1rem; color: #007bff;">📆 Horario Alumno</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/midato" style="font-size: 1rem; color: #007bff;">👤 Mis Datos</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/recorrido" style="font-size: 1rem; color: #007bff;">🗺️ Recorrido</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- Aquí se renderiza el contenido de la ruta -->
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
/* Personalización de la barra de navegación */
.navbar-nav {
  padding-left: 0;
}

.navbar-nav .nav-item {
  margin-right: 15px;
}

.navbar-nav .nav-link {
  transition: all 0.3s ease; /* Transición suave para los enlaces */
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #007bff;
}

.navbar-nav .nav-link:hover {
  background-color: #e0f7fa; /* Color de fondo al pasar el ratón */
  color: #01579b; /* Cambio de color de texto en hover */
  border-radius: 4px; /* Bordes redondeados para los enlaces */
}

/* Estilo para el navbar en pantallas pequeñas */
@media (max-width: 768px) {
  .navbar-nav {
    text-align: center;
    padding-left: 0;
  }

  .navbar-nav .nav-item {
    margin-bottom: 10px; /* Espacio entre los elementos */
  }

  .navbar-toggler {
    border-color: transparent;
  }
}
</style>

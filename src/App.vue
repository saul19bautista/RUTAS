<template>
  <div id="app">
    <div class="container-fluid">
      <!-- Barra de navegación responsiva -->
      <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/" style="font-size: 1.4rem; font-weight: bold; color: #0d6efd;">
            📌 Saúl López Bautista
          </router-link>
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
                <router-link class="nav-link menu-link" to="/">🏠 Inicio</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link menu-link" to="/about">📚 Acerca de</router-link>
              </li>

              <!-- Submenú Calculadoras -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle menu-link" href="#" id="calculadoraDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  🧮 Calculadoras
                </a>
                <ul class="dropdown-menu animate__animated animate__fadeIn" aria-labelledby="calculadoraDropdown">
                  <li>
                    <router-link class="dropdown-item submenu-link" to="/calculadora">🟢 Calculadora V1</router-link>
                  </li>
                  <li>
                    <router-link class="dropdown-item submenu-link" to="/calculadora2">🔵 Calculadora V2</router-link>
                  </li>
                </ul>
              </li>

              <!-- Submenú Horarios -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle menu-link" href="#" id="horarioDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  📅 Horarios
                </a>
                <ul class="dropdown-menu animate__animated animate__fadeIn" aria-labelledby="horarioDropdown">
                  <li>
                    <router-link class="dropdown-item submenu-link" to="/horariodo">👨‍🏫 Docente</router-link>
                  </li>
                  <li>
                    <router-link class="dropdown-item submenu-link" to="/mihorariodo">👨‍🎓 Alumno</router-link>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <router-link class="nav-link menu-link" to="/eventos">🎉 Eventos</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link menu-link" to="/midato">👤 Mis Datos</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link menu-link" to="/recorrido">🗺️ Recorrido</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link menu-link" to="/registrar">📝 Registrarse</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link menu-link" href="#" @click.prevent="logout">🚪 Cerrar sesión</a>
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
  methods: {
    logout() {
      localStorage.removeItem("loggedIn");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

.navbar-nav .nav-item {
  margin-right: 10px;
}

.nav-link.menu-link {
  font-size: 1rem;
  padding: 0.6rem 1.2rem;
  color: #0d6efd;
  border-radius: 10px;
  transition: all 0.3s ease;
  background-color: transparent;
}

.nav-link.menu-link:hover {
  background-color: #e3f2fd;
  color: #0a58ca;
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(13, 110, 253, 0.15);
}

.nav-item.dropdown .dropdown-menu {
  background-color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  border: none;
  border-radius: 10px;
  padding: 0.5rem 0;
  min-width: 220px;
}

.submenu-link {
  padding: 0.5rem 1.2rem;
  color: #0d6efd;
  font-weight: 500;
  transition: all 0.2s ease;
  font-size: 0.95rem;
  border-radius: 8px;
}

.submenu-link:hover {
  background-color: #d4edfc;
  color: #063970;
  padding-left: 1.6rem;
}

@media (max-width: 768px) {
  .navbar-nav {
    text-align: center;
    padding-left: 0;
  }

  .navbar-nav .nav-item {
    margin-bottom: 10px;
  }

  .navbar-toggler {
    border-color: transparent;
  }
}
</style>

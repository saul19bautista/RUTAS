<template>
  <div id="app">
    <div class="container">

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="#">Navbar</router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link text-decoration-none" to="/">🏠 Home</router-link>
              </li> 
              <li class="nav-item">
                <router-link class="nav-link text-decoration-none" to="/about">📚 About</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link text-decoration-none" to="/calculadora">🧮 CalculadoraV1</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link text-decoration-none" to="/calculadora2">🧮 CalculadoraV2</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- Aquí se renderiza el contenido de cada ruta -->
      <router-view />
    </div>
  </div>
</template>
